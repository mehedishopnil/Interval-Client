import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allResortData, setAllResortData] = useState([]);

  console.log(allUsers)
  console.log(user)
  console.log(allResortData)

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const showAlert = (title, icon = "success") => {
    Swal.fire({
      title,
      icon,
      showClass: {
        popup: "animate__animated animate__fadeInUp animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutDown animate__faster",
      },
    });
  };


//creating profile::
const createProfile = async (allData) => {
  const { membership, phone, userID, email, password } = allData;
  
  setLoading(true);
  try {
    console.log("Creating profile with the following data:", { membership, phone, userID, email, password });

    // Check if the user already exists by email
    const checkUserEmailUrl = `${import.meta.env.VITE_server_API}/users/email=${email}`;
    const userEmailExistsResponse = await fetch(checkUserEmailUrl);

    if (!userEmailExistsResponse.ok && userEmailExistsResponse.status !== 404) {
      throw new Error("Failed to check if email exists");
    }

    const userEmailExistsData = userEmailExistsResponse.ok ? await userEmailExistsResponse.json() : null;

    // If the email exists, return an error
    if (userEmailExistsData && userEmailExistsData.length > 0) {
      console.log("Email already exists:", email);
      showAlert("Email already registered", "error");
      return { success: false, message: "Email already registered" };
    }

    // Create Firebase user
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating Firebase user:", error.message);
      throw new Error("Firebase user creation failed");
    }

    // Prepare user profile data for the backend
    const userProfileData = {
      name: allData.name || "New User",
      userId: userID,
      email,
      membership,
      telephone: phone,
    };

    console.log("Sending user profile data to backend:", userProfileData);

    // Send the user profile data to the backend
    const backendResponse = await fetch(`${import.meta.env.VITE_server_API}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userProfileData),
    });

    if (!backendResponse.ok) {
      const errorText = await backendResponse.text();
      console.error("Backend error:", errorText);
      throw new Error("Failed to send user data to backend");
    }

    console.log("User data successfully sent to the backend");

    // Since the user profile data was successfully added to the backend, no need to fetch again
    const userData = await userEmailExistsResponse.json();
    console.log("Fetched user data from backend:", userData);

    // Set the user data if found
    if (userData && userData.length > 0) {
      setUser(userData[0]);
    }

    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error.message);
    showAlert(error.message || "Something went wrong", "error");
    return { success: false, message: error.message };
  } finally {
    setLoading(false);
  }
};

  
  
  
  
  

  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email } = result.user;

      const checkUserUrl = `${
        import.meta.env.VITE_server_API
      }/users?email=${email}`;
      const userExistsResponse = await fetch(checkUserUrl);
      if (!userExistsResponse.ok && userExistsResponse.status !== 404) {
        throw new Error("Failed to check if user exists");
      }

      const userExistsData = userExistsResponse.ok
        ? await userExistsResponse.json()
        : [];
      if (userExistsData.length === 0) {
        await fetch(`${import.meta.env.VITE_server_API}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: displayName, email }),
        });
      }

      const userDataResponse = await fetch(checkUserUrl);
      const userData = await userDataResponse.json();
      if (userData.length > 0) setUser(userData[0]);

      showAlert("Successfully Logged In with Google");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    } finally {
      setLoading(false);
    }
  };



  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userDataResponse = await fetch(
        `${import.meta.env.VITE_server_API}/users?email=${email}`
      );

      if (!userDataResponse.ok)
        throw new Error("Failed to fetch user data from backend");

      const userData = await userDataResponse.json();
      if (userData.length > 0) setUser(userData[0]);

      showAlert("Successfully Signed In");
    } catch (error) {
      console.error("Error signing in:", error.message);
    } finally {
      setLoading(false);
    }
  };




  const signOut = async () => {
    setLoading(true);
    try {
      await firebaseSignOut(auth);
      setUser(null);
      showAlert("Successfully Signed Out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    } finally {
      setLoading(false);
    }
  };



  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_server_API}/all-users`);
      if (!response.ok)
        throw new Error(`Error fetching users: ${response.statusText}`);
      const data = await response.json();
      setAllUsers(data);
    } catch (error) {
      console.error("Error fetching all users data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllResorts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_server_API}/resort-data`
      );
      if (!response.ok)
        throw new Error(`Error fetching resorts: ${response.statusText}`);
      const data = await response.json();
      setAllResortData(data);
    } catch (error) {
      console.error("Error fetching all resort data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllResorts();
    fetchAllUsers();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    loading,
    user,
    allUsers,
    setUser,
    allResortData,
    fetchAllResorts,
    fetchAllUsers,
    createProfile,
    login,
    signOut,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
