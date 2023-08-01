const RejectionModal = ({setRejectionModal}) => {
    return (
        <>
            <div className="z-1000 fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980]"></div>
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <img src="/Images/BlockUserAlert.png" className="w-[40px]" alt="icon" />
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center'>Vendor Rejected!</p>
                </div>

                <div onClick={() => setRejectionModal(false)} className="bg-[#CC0000] flex justify-center items-center mt-[20px] rounded-[5px]">
                    <p className="text-center text-white px-[15px] py-[6px] cursor-pointer">Done</p>
                </div>

            </div>
        </>
    );
}

export default RejectionModal;