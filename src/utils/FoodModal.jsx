import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Select, SelectItem } from '@nextui-org/react';
import UseAllContext from '../hooks/UseAllContext';


const FoodModal = () => {
    const {setIsOpen,isOpen} = UseAllContext()
    const onClose = () => setIsOpen(false);



    const region = []







    return (
        <>
     <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 ">Donate A Food Item</ModalHeader>
        <ModalBody >
        <form className="grid gap-4 grid-cols-2">
       
  {/* Donor Name Input */}
  <div>
  <label className="block mb-1 text-gray-700 font-medium">Food Name</label>
  <input
    type="text"
    placeholder="Food Name"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  />

  </div>
  {/* Region Dropdown */}
  <Select 
 size={"sm"} label="Account Type" className="w-full rounded-lg">
  {region?.map((type) => (
    <SelectItem key={type.label.toLocaleLowerCase()} value={type.label.toLocaleLowerCase()}>
      {type.label}
    </SelectItem>
  ))}
</Select>
{errors.accountType && (
            <span className="text-sm text-red-500">
              Account Type is required.
            </span>
          )}

  {/* Food Category Dropdown */}
  <div>
  <label className="block mb-1 text-gray-700 font-medium">Food Category</label>
  <select
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  >
    <option value="" disabled selected>
      Select Category
    </option>
    <option value="Vegetables">Vegetables</option>
    <option value="Fruits">Fruits</option>
    <option value="Grains">Grains</option>
    <option value="Canned Goods">Canned Goods</option>
    <option value="Meat">Meat</option>
  </select>
  </div>

  {/* Weight Input */}
 <div>
 <label className="block mb-1 text-gray-700 font-medium">Weight (kg)</label>
  <input
    type="number"
    placeholder="Weight in kg"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  />
 </div>

  {/* Value Input */}
  <div>
  <label className="block mb-1 text-gray-700 font-medium">Value (USD)</label>
  <input
    type="number"
    placeholder="Value in USD"
    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  />
  </div>

  {/* Value Address */}
  <div >
  <label className="block mb-1 text-gray-700 font-medium">Pick-up Address</label>
  <div className='relative'>
  <input type={"text"} placeholder="Address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
  
  <i className="fa-solid fa-location-crosshairs fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
  </div>
  </div>






     
   </form>
        </ModalBody>
        <ModalFooter>
          
        <Button color="primary" onPress={onClose}>
          Okay
          </Button>
      
        </ModalFooter>
      </ModalContent>
    </Modal>
        </>
    );
};

export default FoodModal;