import { useState, useEffect } from "react";

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation((prev) => ({ ...prev, latitude, longitude }));
            getAddressFromCoordinates(latitude, longitude);
          },
          (err) => {
            console.error("Error getting location:", err.message);
            setError("Failed to get location: " + err.message);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        console.error("Geolocation not supported");
        setError("Geolocation is not supported by this browser.");
      }
    };

    const getAddressFromCoordinates = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.a0379ce5b46626ffacb134ea16c8844a&lat=${latitude}&lon=${longitude}&format=json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch address from API");
        }

        const data = await response.json();
        if (data.display_name) {
          setLocation((prev) => ({ ...prev, address: data.display_name }));
        } else {
          setError("Address not found");
        }
      } catch (err) {
        console.error("Error fetching address:", err.message);
        setError("Failed to fetch address.");
      }
    };

    getUserLocation();
  }, []);

  return { location, error };
};

export default useGeolocation;
