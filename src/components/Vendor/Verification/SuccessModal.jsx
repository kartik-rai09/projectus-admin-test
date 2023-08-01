import ReactDom from 'react-dom';

const SuccessModal = ({setSuccessModal}) => {
    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980] z-1000" />
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <img src="/Images/SuccessIcon.png" alt="successIcon" className='w-[40px]' />
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center'>Vendor Added Successfully</p>
                </div>
                <div className='flex justify-center items-center space-x-3 mt-[15px]'>
                    <button onClick={() => setSuccessModal(false) } className='bg-[#3C3836] text-white px-[15px] py-[5px] rounded-[5px] text-center'>Done</button>
                </div>
            </div>
        </>, document.getElementById("portal")
    );
}

export default SuccessModal;