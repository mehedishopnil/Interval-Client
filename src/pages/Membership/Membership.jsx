import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Membership = () => {
  const { userData } = useContext(AuthContext);

  // Ensure userData is an array for mapping
  const normalizedUserData = Array.isArray(userData) ? userData : [userData];

  return (
    <div>
      <h1>Membership Details:</h1>
      {normalizedUserData?.length > 0 ? (
        <ul>
          {normalizedUserData.map((user) => (
            <li key={user?._id || Math.random()}>
              <strong>Name:</strong> {user?.name || "N/A"} <br />
              <strong>Membership:</strong> {user?.membership || "N/A"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No membership details available.</p>
      )}
    </div>
  );
};

export default Membership;
