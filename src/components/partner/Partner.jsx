import { Button } from "@nextui-org/react";
import partnerlogo from "./partnerlogo.png";
import useAllContext from "../../hooks/UseAllContext";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const { user } = useAllContext();
  const navigate = useNavigate();
  const handleRoute = () => {
    navigate(user ? "/dashboard/overview" : "/registration");
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-5 md:py-16 py-6 max-w-screen-lg mx-auto">
        <h1 className="md:text-3xl text-2xl font-bold text-gray-800 text-center">
          Our partners & Contributor
        </h1>
        <p className="text-gray-500 mt-2 md:text-lg text-sm max-w-md text-center">
          Their support enables us to expand our impact and serve more
          communities in need.
        </p>
        <div className="flex justify-center md:gap-14 flex-wrap gap-8 md:pt-8 items-center mt-8">
          <div className="flex gap-4 items-center">
            <img
              src={partnerlogo}
              alt="Beetan logo"
              className="w-12 object-cover h-12"
            />
            <p className="mt-2 text-gray-800 font-semibold">Beetan</p>
          </div>

          <div className="flex gap-4 items-center">
            <img
              src={partnerlogo}
              alt="Beetan logo"
              className="w-12 object-cover h-12"
            />
            <p className="mt-2 text-gray-800 font-semibold">Beetan</p>
          </div>

          <div className="flex gap-4 items-center">
            <img
              src={partnerlogo}
              alt="Beetan logo"
              className="w-12 object-cover h-12"
            />
            <p className="mt-2 text-gray-800 font-semibold">Beetan</p>
          </div>

          <div className="flex gap-4 items-center">
            <img
              src={partnerlogo}
              alt="Beetan logo"
              className="w-12 object-cover h-12"
            />
            <p className="mt-2 text-gray-800 font-semibold">Beetan</p>
          </div>
        </div>
        <div className="flex mt-8 space-x-4">
          <Button
            onClick={handleRoute}
            color="primary"
            className="md:hidden block font-semibold"
            size="sm"
          >
            Become a Contributor
          </Button>
          <Button
            onClick={handleRoute}
            color="primary"
            className="md:block hidden font-semibold"
            size="md"
          >
            Become a Contributor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
