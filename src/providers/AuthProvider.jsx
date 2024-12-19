import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import app from "../firebase/firebase.config";
import {
  createProfileWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
} from "firebase/auth";

export const AuthContext = createContext();

console.log(import.meta.env.VITE_server_API)

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [allResortData, setAllResortData] = useState([]);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // Utility to show alerts
  const showAlert = (title, icon = "success") => {
    Swal.fire({
      title,
      icon,
      showClass: { popup: "animate__animated animate__fadeInUp animate__faster" },
      hideClass: { popup: "animate__animated animate__fadeOutDown animate__faster" },
    });
  };

  // Function to create user and send data to backend
  const createProfile = async (name, email, password, membership) => {
    setLoading(true);
    try {
      const checkUserUrl = `${import.meta.env.VITE_server_API}/users?email=${email}`;
      const userExistsResponse = await fetch(checkUserUrl);

      if (!userExistsResponse.ok && userExistsResponse.status !== 404) {
        throw new Error("Failed to check if user exists");
      }

      const userExistsData = userExistsResponse.ok ? await userExistsResponse.json() : [];
      if (userExistsData.length > 0) {
        showAlert("You are already registered", "error");
        return;
      }

      await createProfileWithEmailAndPassword(auth, email, password);
      const backendResponse = await fetch(`${import.meta.env.VITE_server_API}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, membership }),
      });

      if (!backendResponse.ok) throw new Error("Failed to send user data to backend");

      showAlert("Successfully Registered");
      const userDataResponse = await fetch(checkUserUrl);
      if (!userDataResponse.ok) throw new Error("Failed to fetch user data from backend");

      const userData = await userDataResponse.json();
      if (userData.length > 0) setUser(userData[0]);
    } catch (error) {
      console.error("Error creating user:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Function for Google Login
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

      const userExistsData = userExistsResponse.ok ? await userExistsResponse.json() : [];
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

  // Sign-in process (with email and password)
  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const userDataResponse = await fetch(
        `${import.meta.env.VITE_server_API}/users?email=${email}`
      );

      if (!userDataResponse.ok) throw new Error("Failed to fetch user data from backend");

      const userData = await userDataResponse.json();
      if (userData.length > 0) setUser(userData[0]);

      showAlert("Successfully Signed In");
    } catch (error) {
      console.error("Error signing in:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Sign out process
  const signOut = async () => {
    setLoading(true);
    try {
      await firebaseSignOut(auth);
      setUser(null);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch all resorts data
  const fetchAllResorts = async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_server_API}/all-resorts`;
      const response = await fetch(url);

      if (!response.ok) throw new Error(`Error fetching resorts: ${response.statusText}`);

      const data = await response.json();
      setAllResortData(data);
    } catch (error) {
      console.error("Error fetching all resort data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch resorts data and listen to auth changes
  useEffect(() => {
    fetchAllResorts();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    allResortData,
    fetchAllResorts,
    createProfile,
    login,
    signOut,
    googleLogin,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
