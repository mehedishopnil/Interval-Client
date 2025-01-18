import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";

const Membership = () => {
  const { userData, loading } = useContext(AuthContext);

  // Ensure userData is an array for mapping
  const normalizedUserData = Array.isArray(userData) ? userData : [userData];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-blue-600">My Memberships</h1>
      {loading ? (
        <Loading />
      ) : (
        normalizedUserData?.length > 0 && (
          <ul>
            {normalizedUserData.map((user) => (
              <li key={user?._id || Math.random()}>
                <strong>Name:</strong> {user?.name || "N/A"} <br />
                <p>Member Number</p> {user?.membership || "N/A"}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Membership;
