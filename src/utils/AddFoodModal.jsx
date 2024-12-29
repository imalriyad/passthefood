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

import useGeolocation from "../hooks/useGeolocation";
import { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useForm } from "react-hook-form";
import useUserInfo from "../hooks/useUserInfo";
import useAllContext from "../hooks/UseAllContext";
import useDonation from "../hooks/useDonation";

const AddFoodModal = () => {
  let [date, setDate] = useState();
  const {refetch} = useDonation()


  const {
    isOpen,
    setIsOpen,
    setConfirmationModalOpen,
    setHasNewFoodItem,
    setHasNewnoti
  } = useAllContext();
  const onClose = () => setIsOpen(false);
  const { location } = useGeolocation();
  const [address, setAddress] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadUrl, setUploadUrl] = useState("");
  const axios = useAxios();
  const [userInfo] = useUserInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  // handle image upload to cloudnary
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);
    } else {
      return;
    }
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "passthefoodproject");
    data.append("cloud_name", "dlgjtxwwy");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dlgjtxwwy/image/upload`,
      data
    );
    setUploadUrl(response.data?.url);
  };

  const onSubmit = async (data) => {

    const foodImage = uploadUrl;
    const donorId = userInfo?._id;
    const donorType = userInfo?.accountType;
    const donorName = userInfo?.name;
    const donorAvatar = userInfo?.avatar;
    const foodExpiryDate = date;
    const foodName = data?.foodName;
    const foodValue = data?.foodValue;
    const foodWeight = data?.foodWeight;
    const foodCategory = data?.foodCategory;
    const foodPickupAddress = data?.foodPickupAddress;
    const foodRegion = data?.foodRegion;
    const instructions = data?.instructions;
    const isoStringWithoutTimezone = `${foodExpiryDate.year}-${String(
      foodExpiryDate.month
    ).padStart(2, "0")}-${String(foodExpiryDate.day).padStart(2, "0")}T${String(
      foodExpiryDate.hour
    ).padStart(2, "0")}:${String(foodExpiryDate.minute).padStart(
      2,
      "0"
    )}:${String(foodExpiryDate.second).padStart(2, "0")}.${String(
      foodExpiryDate.millisecond
    ).padStart(3, "0")}`;

    const newFood = {
      foodImage,
      donorType,
      donorName,
      donorId,
      foodName,
      foodExpiryDate: isoStringWithoutTimezone,
      foodValue,
      foodWeight,
      foodCategory,
      foodRegion,
      instructions,
      foodPickupAddress,
      donorAvatar,
    };

    try {
      const res = await axios.post("/create-donation", newFood);
      if (res.status == 200) {
        setIsOpen(false);
        setConfirmationModalOpen(true);
        refetch();
        reset();
        setHasNewFoodItem(true)
        setHasNewnoti(true)
      } else {
      }
    } catch (error) {
      console.log(error);
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

  const foodCategoriesData = [
    { category: "Rice" },
    { category: "Curries & Stews" },
    { category: "Fish" },
    { category: "Breads" },
    { category: "Snacks & Street Food" },
    { category: "Sweets & Desserts" },
  ];

  const handleGetLocation = () => {
    if (location?.address) {
      setAddress(location.address);
    }
  };

  return (
    <>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 ">
            Donate Food
          </ModalHeader>
          <ModalBody>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 grid-cols-2"
            >
              {/* Food Name Input */}
              <div>
                <Input
                  {...register("foodName", { required: true })}
                  size="sm"
                  type="text"
                  label="Food Name"
                />
                {errors.foodName && (
                  <span className="text-sm text-red-500">
                    Food name required.
                  </span>
                )}
              </div>

              {/* Region Dropdown */}
              <div>
                {" "}
                <Select
                  {...register("foodRegion", { required: true })}
                  size={"sm"}
                  label="Region"
                  className="w-full rounded-lg"
                >
                  {regionData?.map((region) => (
                    <SelectItem
                      key={region.division.toLocaleLowerCase()}
                      value={region.division.toLocaleLowerCase()}
                    >
                      {region.division}
                    </SelectItem>
                  ))}
                </Select>
                {errors.foodRegion && (
                  <span className="text-sm text-red-500">
                    Food region required.
                  </span>
                )}
              </div>

              {/* Food Category Dropdown */}
              <div>
                <Select
                  {...register("foodCategory", { required: true })}
                  size={"sm"}
                  label="Food Category"
                  className="w-full rounded-lg"
                >
                  {foodCategoriesData?.map((category, index) => (
                    <SelectItem
                      key={category.category.toLocaleLowerCase()}
                      value={category.category.toLocaleLowerCase()}
                    >
                      {category.category}
                    </SelectItem>
                  ))}
                </Select>
                {errors.foodCategory && (
                  <span className="text-sm text-red-500">
                    Food category required.
                  </span>
                )}
              </div>

              {/* Weight Input */}
              <div>
                <Input
                  {...register("foodWeight", { required: true })}
                  size="sm"
                  type="number"
                  label="Food Weight (KG)"
                />
                {errors.foodWeight && (
                  <span className="text-sm text-red-500">
                    Food weight required
                  </span>
                )}
              </div>

              {/* Value Input */}
              <div>
                <Input
                  {...register("foodValue", { required: true })}
                  size="sm"
                  type="number"
                  label="Food Value (USD)"
                />
                {errors.foodValue && (
                  <span className="text-sm text-red-500">
                    Food value required
                  </span>
                )}
              </div>

              {/* Pick-up Address */}
              <div>
                <div className="relative">
                  <Input
                    {...register("foodPickupAddress", { required: true })}
                    size="sm"
                    type="text"
                    label="Pick-up Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <i
                    className="fa-solid fa-location-crosshairs fas fa-eye-slash absolute right-3 top-4 text-gray-500 cursor-pointer"
                    onClick={handleGetLocation}
                  ></i>
                </div>
                {errors.foodPickupAddress && (
                  <span className="text-sm text-red-500">
                    Pickup address required
                  </span>
                )}
              </div>

              {/* Food Image */}
              <div className="col-span-2">
                <div className="relative">
                  <input
                    {...register("foodImage", { required: true })}
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full cursor-pointer"
                    style={{
                      opacity: 0,
                      zIndex: 2,
                    }}
                  />
                  <span className="flex items-center">
                    <Input
                      size="lg"
                      readOnly
                      placeholder={fileName || "Select food image"}
                      className="relative z-1"
                    />
                    <i className="fa-solid absolute right-4 fa-image"></i>
                  </span>
                </div>
                {errors.foodImage && (
                  <span className="text-sm text-red-500">
                    Food Image required.
                  </span>
                )}
              </div>

              {/* Food Expiry Date */}
              <div className="col-span-2">
                <DatePicker
                  {...register("foodExpiryDate")}
                  hideTimeZone
                  showMonthAndYearPickers
                  value={date}
                  defaultValue={date ? date : now(getLocalTimeZone())}
                  label="Event Date"
                  onChange={(date) => setDate(date)}
                />
                {errors.foodExpiryDate && (
                  <span className="text-sm text-red-500">
                    Food expiry date required
                  </span>
                )}
              </div>

              {/* Instrcution */}
              <div className="col-span-2">
                <Textarea
                  {...register("instructions", { required: true })}
                  variant="flat"
                  label="Any Instruction?"
                  labelPlacement="inside"
                />{" "}
                {errors.instructions && (
                  <span className="text-sm text-red-500">
                    Instructions required
                  </span>
                )}
              </div>
              <div className="w-full col-span-2">
                <Button type="submit" className="w-full" color="primary">
                  Donate
                </Button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddFoodModal;
