import ReactDom from 'react-dom';
import {useState, useEffect} from 'react';

const ActiveClass = "cursor-pointer bg-[#DC7A39] text-white rounded-[5px] px-[10px] py-[5px]"
const InactiveClass = "cursor-pointer bg-white text-[#4B465C] rounded-[5px] px-[10px] py-[5px]"

const RejectionReasonModal = ({setRejectionReasons, setRejectionModal, setRejectionReasonModal}) => {

    const [selector, setSelector] = useState(false);

    const [aadhar, setAadhar] = useState(false);
    const [pan, setPan] = useState(false);
    const [gst, setGst] = useState(false);

    const RejectionHandler = () => {
        setRejectionModal(true)
        setRejectionReasons(false);
    }

    return ReactDom.createPortal(
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#D9D9D980] z-1000" />
            <div className="min-w-[500px] flex flex-col items-center p-[20px] fixed z-1000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFFFFF] rounded-[10px] shadow-xl">
                <img src="/Images/BlockUserAlert.png" alt="alertIcon" className='w-[40px]' />
                <div className='flex flex-col items-center mt-[10px]'>
                    <p className='text-[26px] text-[#4B465C] text-center'>Select reason for rejection</p>
                </div>
                <div onClick={() => setSelector(!selector)} className='px-[10px] mb-[10px] py-[5px] min-w-[300px] flex justify-between h-[36px] border-[1px] border-[#DBDADE] rounded-[5px] '> 

                   {
                       (!aadhar && !pan && !gst) ? <span className='text-[#4B465C]'>Select</span> : (
                        <div>
                            {
                                aadhar ? <span className='text-[#4B465C] mr-[10px]'>Aadhar</span> : null
                            }
                            {
                                pan ? <span className='text-[#4B465C] mr-[10px]'>Pan</span> : null
                            }
                            {
                                gst ? <span className='text-[#4B465C] mr-[10px]'>GST</span> : null
                            }
                        </div>
                       )
                   }
                   <img src="/Images/DropdownArrow.png" alt="dropdown" className='w-[25px]' />
                </div>
                {
                    !selector ? null : (
                        <div className='flex flex-col space-y-2 bg-white min-w-[300px] rounded-[5px] shadow-xl p-[10px]'>
                            <div onClick = {() => setAadhar(!aadhar)} className = {aadhar ? ActiveClass : InactiveClass} >Aadhar Details Incorrect</div>
                            <div onClick = {() => setPan(!pan)} className = {pan ? ActiveClass : InactiveClass}>Pan Details Incorrect</div>
                            <div onClick = {() => setGst(!gst)} className = {gst ? ActiveClass : InactiveClass}>GST Details Incorrect</div>
                        </div>
                    )
                }
                <div className='flex justify-center items-center space-x-3 mt-[15px]'>
                    <button onClick={() => {
                        setRejectionModal(true)
                        setRejectionReasonModal(false);
                    }} className='bg-[#3C3836] text-white px-[15px] py-[5px] rounded-[5px] text-center'>Done</button>
                </div>
            </div>
        </>, document.getElementById("portal")
    );
}

export default RejectionReasonModal;