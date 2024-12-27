import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirect authenticated user to the dashboard
      navigate("/dashboard/gateways");
    }
  }, [user, navigate]);

  return (
    <div className="">
      {!user && (
        <>
          <Carousel />
          <Content />
        </>
      )}
    </div>
  );
};

export default Home;
