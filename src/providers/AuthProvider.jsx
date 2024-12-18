import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null); // Default value null for unauthenticated state
  const [allResortData, setAllResortData] = useState([]);

  console.log("All Resort Data:", allResortData);

   // Function to create user and send data to backend
   const createUser = async (name, email, password, membership) => {
     setLoading(true);
     try {
       // Check if user already exists in the backend
       const userExistsResponse = await fetch(
         `${import.meta.env.VITE_API_Link}/users?email=${email}`
       );
 
       if (userExistsResponse.status === 404) {
         console.log("User not found, proceeding with registration");
       } else if (!userExistsResponse.ok) {
         throw new Error("Failed to check if user exists");
       } else {
         const userExistsData = await userExistsResponse.json();
         if (userExistsData.length > 0) {
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: "You are already registered",
           });
           return; // Stop the registration process
         }
       }
 
       // Create user with Firebase
       const userCredential = await createUserWithEmailAndPassword(
         auth,
         email,
         password
       );
       const createdUser = userCredential.user;
 
       // Send user data to backend
       const backendResponse = await fetch(
         `${import.meta.env.VITE_API_Link}/users`,
         {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             name,
             email,
             membership,
           }),
         }
       );
 
       if (!backendResponse.ok) {
         throw new Error("Failed to send user data to backend");
       }
 
       Swal.fire({
         title: "Successfully Registered",
         showClass: {
           popup: "animate__animated animate__fadeInUp animate__faster",
         },
         hideClass: {
           popup: "animate__animated animate__fadeOutDown animate__faster",
         },
       });
 
       // Fetch specific user data from backend based on email
       const userDataResponse = await fetch(
         `${import.meta.env.VITE_API_Link}/users?email=${email}`
       );
       if (!userDataResponse.ok) {
         throw new Error("Failed to fetch user data from backend");
       }
       const userData = await userDataResponse.json();
       
       if (userData.length > 0) {
         setUser(userData[0]);
       } else {
         console.error("No user data found after registration for email:", email);
       }
       
       return userCredential;
     } catch (error) {
       console.error("Error creating user:", error.message);
       throw error;
     } finally {
       setLoading(false);
     }
   };
 


  // SignIn process (with email and password)
const login = async (email, password) => {
     setLoading(true);
     try {
       const userCredential = await signInWithEmailAndPassword(auth, email, password);
       const signedInUser = userCredential.user;
   
       // Fetch specific user data from backend based on email
       const userDataResponse = await fetch(
         `${import.meta.env.VITE_API_Link}/users?email=${email}`
       );
       if (!userDataResponse.ok) {
         throw new Error("Failed to fetch user data from backend");
       }
   
       const userData = await userDataResponse.json();
       if (userData.length > 0) {
         setUser(userData[0]);
       } else {
         console.error("No user data found for the email:", email);
       }    
       
   
       // Show success alert
       Swal.fire({
         title: "Successfully Signed In",
         showClass: { popup: "animate__animated animate__fadeInUp animate__faster" },
         hideClass: { popup: "animate__animated animate__fadeOutDown animate__faster" },
       });
   
       return userCredential;
     } catch (error) {
       console.error("Error signing in:", error.message);
       throw error;
     } finally {
       setLoading(false);
     }
   };




  // Fetch all resorts data:
  const fetchAllResorts = async () => {
    setLoading(true);
    try {
      const url = `http://localhost:5000/all-resorts`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Error fetching all resort data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setAllResortData(data);
    } catch (error) {
      console.error("Error fetching all resort data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch resorts data on component mount
  useEffect(() => {
    fetchAllResorts();
  }, []);

  const authInfo = {
    loading,
    user,
    setUser, // Added setUser for updating user state
    allResortData,
    fetchAllResorts, // Added function to refresh data if needed
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
