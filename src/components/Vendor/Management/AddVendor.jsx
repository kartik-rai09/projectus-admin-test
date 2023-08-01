import {useState, useEffect, useRef} from 'react';
import SuccessModal from '../../User/SuccessModal';
import CategoryCard from '../../Assets/CategoryCard';

const ActiveClass = "w-[50%] px-[10px] py-[3px] text-white bg-[#DC7A39] cursor-pointer rounded-[5px]";
const InactiveClass = "w-[50%] px-[10px] py-[3px] text-[#4B465C80] cursor-pointer rouded-[5px]";


const AddVendor = ({setAddVendor}) => {

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();
    const stateRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();
    const pinRef = useRef();
    const aadharRef = useRef();
    const panRef = useRef();
    const attachmentsRef = useRef();
    const categoryRef = useRef();

    const [showSuccessBanner, setShowSucccessBanner] = useState(false);
    const [activeGender, setActiveGender] = useState(-1);
    const [categoryList, setCategoryList] = useState([]);

    const addVendorHandler = () => {
        const name = nameRef.current.value;
        
        setShowSucccessBanner(true);
    }

    const addCategoryHandler = () => {

        const newCategory = categoryRef.current.value;

        setCategoryList((prev) => {
            return [...prev, newCategory];
        });
    }

    return (
        <>
        <div className=" mt-[20px]">
            <form>
                <div className="w-full flex flex-col items-start">
                    <p className="text-[14px] text-[#4B465C]">Profile Photo</p>
                    <div className="">
                        <img src="/Images/ProfilePhotoIcon.png" alt="picture" className="w-[70px]" />
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="flex justify-between space-x-3">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Full Name</p>
                            <input required ref={nameRef} type="text" name="name" placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input required ref={emailRef} type="email" name="email" placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input required ref={mobileRef} type="number" name="mobile" placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Address</p>
                            <input required ref={addressRef} type="text" name="address" placeholder="Enter your address" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input required ref={cityRef} type="text" name="city" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">State</p>
                            <input required ref={stateRef} type="text" name="state" placeholder="Enter your state" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                    </div>
                    <div className="flex  space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pin Code</p>
                            <input required ref={pinRef} type="text" name="pin" placeholder="Enter the pin code" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Country</p>
                            <input required ref={countryRef} type="text" name="country" placeholder="Enter country name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Gender</p>
                            <div className="flex border-[1px] border-[#DBDADE] rounded-[5px] w-full">
                                <div 
                                    className={activeGender === 1 ? ActiveClass : InactiveClass}
                                    onClick = {() => {
                                        setActiveGender(1)
                                    }}
                                >Female</div>
                                <div onClick = {() => setActiveGender(2)} className={activeGender === 2 ? ActiveClass : InactiveClass}>Male</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Aadhar Card</p>
                            <input required ref={aadharRef} type="file" name="address" placeholder="Attach file" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pan Card</p>
                            <input required ref={panRef} type="file" name="state" placeholder="Attach file" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Other Attachments</p>
                            <input required ref={attachmentsRef} type="file" name="country" placeholder="Attach file" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px] text-[#4B465C80]" />
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                    <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Category</p>
                            {/* <div name="aadhar" className="flex justify-between h-[36px] bg-[#F8F8F8] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]"><span className="text-[#4B465C80]">Add Category</span><img src="/Images/AddCategoryIcon.png" alt="add" className="w-[25px]" /></div>
                            {
                                <div className="w-[100%] grid grid-cols-2 mt-[2px] max-h-[70px] overflow-y-scroll">
                                    
                                </div>
                            } */}
                            <div className='w-full relative flex justify-between items-center'>
                                <input type="text" ref={categoryRef} placeholder="Add Category" className='border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[3px]' />
                                <img onClick = {() => addCategoryHandler()} className='w-[45px] cursor-pointer' src="/Images/AddCategoryIcon.png" alt="add" />
                            </div>
                            <div className='w-full grid grid-cols-2 max-h-[100px] overflow-y-scroll'>
                                {
                                    categoryList.map((category) => {
                                        return <CategoryCard>{category}</CategoryCard>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center items-center mt-[30px]">
                    <div onClick={() => {addVendorHandler()}} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[3px]">Add Vendor</div>
                </div>
            </form>
        </div>
        {
            showSuccessBanner ? 
            <SuccessModal setAdd={setAddVendor} name={"Vendor"} /> : null
        }
        </>
    );
}

export default AddVendor;