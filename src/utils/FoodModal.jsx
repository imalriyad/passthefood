import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Input,
  Textarea,
  DatePicker,
} from "@nextui-org/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import UseAllContext from "../hooks/UseAllContext";
import useGeolocation from "../hooks/useGeolocation";
import { useState } from "react";

const FoodModal = () => {
  const { setIsOpen, isOpen } = UseAllContext();
  const onClose = () => setIsOpen(false);
  const { location } = useGeolocation();
  const [address, setAddress] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the placeholder to show the selected file name
      console.log("Selected file:", file); // Use this for further handling, like uploading
    }
  };

  const regionData = [
    { division: "Dhaka" },
    { division: "Chattogram" },
    { division: "Khulna" },
    { division: "Sylhet" },
    { division: "Rajshahi" },
    { division: "Barishal" },
    { division: "Mymensingh" },
    { division: "Rangpur" },
  ];

  const foodCategories = [
    "Rice",
    "Curries & Stews",
    "Fish",
    "Breads",
    "Snacks & Street Food",
    "Sweets & Desserts",
  ];

  const handleIconClick = () => {
    if (location?.address) {
      setAddress(location.address);
    }
  };

  return (
    <>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 ">
            Donate A Food Item
          </ModalHeader>
          <ModalBody>
            <form className="grid gap-4 grid-cols-2">
              {/* Food Name Input */}
              <div>
                <Input size="sm" type="text" label="Food Name" />
              </div>

              {/* Region Dropdown */}
              <Select size={"sm"} label="Region" className="w-full rounded-lg">
                {regionData?.map((region) => (
                  <SelectItem
                    key={region.division.toLocaleLowerCase()}
                    value={region.division.toLocaleLowerCase()}
                  >
                    {region.division}
                  </SelectItem>
                ))}
              </Select>

              {/* Food Category Dropdown */}
              <div>
                <Select
                  size={"sm"}
                  label="Food Category"
                  className="w-full rounded-lg"
                >
                  {foodCategories?.map((category, index) => (
                    <SelectItem
                      key={index}
                      value={category.toLocaleLowerCase()}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              {/* Weight Input */}

              <div>
                <Input size="sm" type="number" label="Food Weight (KG)" />
              </div>

              {/* Value Input */}
              <div>
                <Input size="sm" type="number" label="Food Value (USD)" />
              </div>

              {/* Value Address */}
              <div>
                <div className="relative">
                  <Input
                    size="sm"
                    type="text"
                    label="Pick-up Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <i
                    className="fa-solid fa-location-crosshairs fas fa-eye-slash absolute right-3 top-4 text-gray-500 cursor-pointer"
                    onClick={handleIconClick}
                  ></i>
                </div>
              </div>

              {/* Food image */}
              <div className="col-span-2">
                <div className="relative">
                  {/* Hidden File Input */}
                  <input
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                    style={{
                      opacity: 0,
                      zIndex: 2,
                    }}
                  />
                  {/* Styled Input */}
                  <span className="flex items-center">
                    {" "}
                    <Input
                      size="lg"
                      readOnly
                      placeholder={fileName || "Select food image"}
                      className="relative z-1"
                    />{" "}
                    <i className="fa-solid absolute right-4 fa-image"></i>
                  </span>
                </div>
              </div>

              {/* Food Expiry date */}
              <div className="col-span-2">
                <DatePicker
                  label="Food Expiry date"
                  hideTimeZone
                  minValue={now(getLocalTimeZone())}
                  showMonthAndYearPickers
                  defaultValue={now(getLocalTimeZone())}
                />
              </div>

              {/* Instrcution */}
              <div className="col-span-2">
                <Textarea
                  variant="flat"
                  label="Any Instruction?"
                  labelPlacement="inside"
                />
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Donate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FoodModal;
