import CategoryCard from "../../Assets/CategoryCard";
import {useState, useEffect} from 'react';
import SuccessModal from "./SuccessModal";
import RejectionReasonModal from "./RejectionReasonModal";
import RejectionModal from "./RejectionModal";

const ViewVendor = ({setViewVendor, vendorDetails, viewVendor}) => {

    const [successModal, setSuccessModal] = useState(false);
    const [rejectionModal, setRejectionModal] = useState(false);
    const [rejectionReasonModal, setRejectionReasonModal] = useState(false);
    const [rejectionReasons, setRejectionReasons] = useState({
        aadharIncorrect: false,
        panIncorrect: false,
        gstincorrect: false,
    });

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
                            <input disabled type="text" name="name" value = {vendorDetails.name} placeholder="Enter your name" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Email</p>
                            <input disabled type="email" name="email" value = {vendorDetails.email} placeholder="Enter your email" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Mobile</p>
                            <input disabled type="number" name="mobile" value = {vendorDetails.mobile} placeholder="Enter your contact" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Address</p>
                            <input disabled type="text" name="address" placeholder="Enter your address" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">City</p>
                            <input disabled type="text" name="city" placeholder="Enter your city" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">State</p>
                            <input disabled type="text" name="state" placeholder="Enter your state" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                    </div>
                    <div className="flex  space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pin Code</p>
                            <input disabled type="text" name="pin" placeholder="Enter the pincode" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Country</p>
                            <input disabled type="text" name="country" placeholder="Enter your country" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" />
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Gender</p>
                            <div className="flex border-[1px] border-[#DBDADE] rounded-[5px] w-full">
                                <div className="w-[50%] px-[10px] py-[5px] text-[#4B465C80]">Female</div>
                                <div className="bg-[#DC7A39] text-white w-[50%] px-[10px] py-[5px]">Male</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Aadhar Card</p>
                            {/* <input disabled type="text" name="address" placeholder="aadhar.pdf" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" /> */}
                            <div name="aadhar" className="flex justify-between h-[36px] bg-[#F8F8F8] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]"><span className="text-[#4B465C80]">aadhar.pdf</span><span className="text-[14px] cursor-pointer text-[#DC7A39] underline">View</span></div>
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Pan Card</p>
                            {/* <input disabled type="text" name="city" placeholder="pancard.pdf" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" /> */}
                            <div name="pan" className="flex justify-between h-[36px] bg-[#F8F8F8] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]"><span className="text-[#4B465C80]">pancard.pdf</span><span className="text-[14px] cursor-pointer text-[#DC7A39] underline">View</span></div>
                        </div>
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Other Attachments</p>
                            {/* <input disabled type="text" name="state" placeholder="attachment.pdf" className="border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]" /> */}
                            <div name="aadhar" className="flex justify-between h-[36px] bg-[#F8F8F8] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]"><span className="text-[#4B465C80]">attachment.pdf</span><span className="text-[14px] cursor-pointer text-[#DC7A39] underline">View</span></div>
                        </div>
                    </div>

                    <div className="flex justify-between space-x-3 mt-[10px]">
                        <div className="flex flex-col items-start w-[33%]">
                            <p className="text-[14px] text-[#4B465C]">Category</p>
                            <div name="aadhar" className="flex justify-between h-[36px] bg-[#F8F8F8] border-[1px] border-[#DBDADE] rounded-[5px] w-full px-[10px] py-[5px]"><span className="text-[#4B465C80]">Categories</span><img src="/Images/CategoryAddButton.png" alt="add" className="w-[25px]" /></div>
                            {
                                    <div className="w-[100%] grid grid-cols-2 mt-[2px] max-h-[70px] overflow-y-scroll">
                                        {/* {
                                            vendorDetails[viewVendor.vendorId].categories.map((category, index) => {
                                                return <CategoryCard>{category}</CategoryCard>
                                            })
                                        } */}
                                        <CategoryCard>Account Consultant</CategoryCard>
                                        <CategoryCard>Account Consultant</CategoryCard>
                                        <CategoryCard>Account Consultant</CategoryCard>
                                        <CategoryCard>Account Consultant</CategoryCard>
                                        <CategoryCard>Account Consultant</CategoryCard>
                                        <CategoryCard>Account Consultant</CategoryCard>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full justify-center space-x-5 items-center mt-[30px]">
                    <div onClick={() => {
                        setSuccessModal(true) 
                    }} className="bg-[#3C3836] text-white text-center rounded-[5px] px-[20px] py-[5px] cursor-pointer">Approve</div>
                    <div onClick={() => {
                        setRejectionReasonModal(true)
                    }} className="bg-[#A8AAAE29] text-[#3C3836] text-center rounded-[5px] px-[20px] py-[5px]">Reject</div>
                </div>
            </form>
        </div>
        
        {
            !successModal ? (null) : (
                <SuccessModal setSuccessModal={setSuccessModal} />
            )
        }
        {
            !rejectionReasonModal ? (null) : (
                <RejectionReasonModal 
                    setRejectionReasons = {setRejectionReasons}
                    setRejectionModal = {setRejectionModal}
                    setRejectionReasonModal = {setRejectionReasonModal}
                />
            )
        }
        {
            !rejectionModal ? null : (
                <RejectionModal setRejectionModal = {setRejectionModal} />
            )
        }
        </>
    );
}

export default ViewVendor;