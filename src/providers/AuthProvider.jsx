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
import axios from "axios";

// Create the AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allResortData, setAllResortData] = useState([]);
  const [email, setEmail] = useState(null);
  const [userData, setUserData] = useState([]);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  console.log(userData)

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

  const createProfile = async (allData) => {
    const { membership, phone, userID, email, password, name = "New User" } = allData;

    if (!email || !password) {
      showAlert("Email and Password are required", "error");
      return { success: false, message: "Email and Password are required" };
    }

    setLoading(true);
    try {
      const checkUserEmailUrl = `${import.meta.env.VITE_server_API}/users/email=${email}`;
      const userEmailExistsResponse = await fetch(checkUserEmailUrl);

      if (userEmailExistsResponse.status === 200) {
        showAlert("Email already registered", "error");
        return { success: false, message: "Email already registered" };
      } else if (userEmailExistsResponse.status !== 404) {
        throw new Error("Failed to check email existence");
      }

      const firebaseUser = await createUserWithEmailAndPassword(auth, email, password);
      const userProfileData = {
        name,
        userId: userID,
        email,
        membership,
        telephone: phone,
      };

      const backendResponse = await fetch(`${import.meta.env.VITE_server_API}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userProfileData),
      });

      if (!backendResponse.ok) {
        throw new Error("Failed to send user data to backend");
      }

      setEmail(email);
      showAlert("Profile created successfully", "success");

      return { success: true };
    } catch (error) {
      console.error("Error creating profile:", error.message);
      showAlert(error.message || "Something went wrong", "error");
      return { success: false, message: error.message };
    } finally {
      setLoading(false);
    }
  };

  const fetchUserByEmail = async (email) => {
    if (!email) {
      console.error("Email is required to fetch user data");
      return;
    }

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_server_API}/users?email=${email}`
      );
      setUserData(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user data:", error.response?.data || error);
    }
  };

  const googleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email } = result.user;

      const checkUserUrl = `${import.meta.env.VITE_server_API}/users?email=${email}`;
      const userExistsResponse = await fetch(checkUserUrl);

      if (!userExistsResponse.ok && userExistsResponse.status !== 404) {
        throw new Error("Failed to check if user exists");
      }

      if (userExistsResponse.status === 404) {
        await fetch(`${import.meta.env.VITE_server_API}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: displayName, email }),
        });
      }

      setEmail(email);
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
      setEmail(email);
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
      setEmail(null);
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
      if (!response.ok) throw new Error(`Error fetching users: ${response.statusText}`);
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
      const response = await fetch(`${import.meta.env.VITE_server_API}/resort-data`);
      if (!response.ok) throw new Error(`Error fetching resorts: ${response.statusText}`);
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
    if (email) fetchUserByEmail(email);

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) setEmail(currentUser.email);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [email]);

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
    email,
    userData,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
