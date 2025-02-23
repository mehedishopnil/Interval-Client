import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";

const Membership = () => {
  const { userData, loading } = useContext(AuthContext);
  const [isTabOpen, setIsTabOpen] = useState(false);

  // Ensure userData is an array for mapping
  const normalizedUserData = Array.isArray(userData) ? userData : [userData];

  return (
    <div className=" p-4 ">
      <h1 className="text-xl font-bold text-blue-600">My Memberships</h1>
      {loading ? (
        <Loading />
      ) : (
        normalizedUserData?.length > 0 && (
          <div className="space-y-6 ">
            {normalizedUserData.map((user) => (
              <div key={user?._id || Math.random()} className="space-y-4">
                {/* Member Number */}
                <div>
                  <p className=" font-semibold text-lg text-gray-700">
                    Member Number:{" "}
                  </p>
                  <p>
                    <span className="font-normal">
                      {user?.membership || "N/A"}
                    </span>
                  </p>
                </div>

                {/* Membership Card */}
                <div className=" space-y-4 bg-white shadow-md px-4 py-4 rounded-md">
                  <div className="flex">
                    {/* Image */}
                    <img
                      src={
                        user?.profileImage ||
                        "https://www.intervalworld.com/images/iw/card_iw_basic.jpg"
                      }
                      alt="Membership"
                      className=" rounded-md object-cover"
                    />
                    {/* Details */}
                    <div className="flex flex-col flex-grow ml-4">
                      <h2 className="text-base font-semibold">
                        Interval Membership
                      </h2>
                      <p className="text-sm text-gray-500">
                        Expires: {user?.membershipExpiry || "N/A"}
                      </p>
                    </div>
                  </div>
                  {/* Renew/Upgrade Button */}
                  <button className=" w-full btn btn-primary bg-[#0077be] text-white">
                    Renew/Upgrade
                  </button>
                </div>

                {/* Tab Menu for Benefits */}
                <div className="bg-white shadow-md p-4 rounded-md">
                  <button
                    onClick={() => setIsTabOpen(!isTabOpen)}
                    className="w-full text-left font-semibold flex justify-between items-center"
                  >
                    Benefits
                    <span>{isTabOpen ? "▲" : "▼"}</span>
                  </button>
                  {isTabOpen && (
                    <ul className="mt-2 space-y-1 text-gray-600">
                      <li>Exchange</li>
                      <li>Getaways</li>
                      <li>Guest Certificates</li>
                      <li>Travel Insurance</li>
                      <li>Resort Directory</li>
                      <li>Entertainment® Coupon Sampler</li>
                      <li>Interval World Mastercard® credit card</li>
                      <li>Interval Travel®</li>
                      <li>Member Publications</li>
                      <li>Confirmation Information</li>
                      <li>Up to 60% Off Hotels</li>
                    </ul>
                  )}
                </div>

                {/* Owners Card */}
                <div className="bg-white shadow-md p-4 rounded-md">
                  <h1 className="font-bold">Owners</h1>
                  <span className="divider"></span>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">Name:</p>
                      <p>{user?.name || "N/A"}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Contact:</p>
                      <p>{user?.email || "N/A"}</p>
                    </div>
                    <button className="btn text-white bg-[#18294B] w-full md:w-auto">
                      Actions
                    </button>
                  </div>
                </div>

                {/* Selected Resorts */}
                <div>
                  <h2 className="text-lg font-semibold">Selected Resorts</h2>
                  <div className="bg-white shadow-md p-4 rounded-md">
                    {/* You can map and display user-selected resorts here */}
                    <p className="text-gray-600">No resorts selected yet.</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Back Button */}
            <div className="flex items-center justify-center">
              <button className="w-60 btn bg-[#18294B] text-white hover:bg-[#18294bcc]">
                Back
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Membership;
