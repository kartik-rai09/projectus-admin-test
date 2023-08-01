import { useState, useEffect } from "react";

const OTPVerification = () => {

    const [code, setCode] = useState(new Array(6).fill(""));
    const [verified, setVerified] = useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setCode([...code.map((d, indx) => (indx === index ? element.value : d))]);

        //Focus next input

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleVerification = () => {
        setVerified(true);
    }

    return (
        <>
        {
            verified ? (
                <div className="relative w-[100vw] h-[100vh] flex justify-center items-center">
                    <img src="/Images/LoginSuccessImage.png" alt="success" className="" />
                </div>
            ) : (
                <div className="flex items-center h-[100vh] w-full px-[150px] justify-center space-x-36">
                <img src="/Images/OTPPageHero.png" alt="HeroImage" className="w-[30rem]" />
                <div className="flex flex-col items-center space-y-24 max-w-[350px]">
                    <img src="/Images/ProjectusBanner.png" alt="Banner" className="w-[200px]" />
                    <div>
                        <p className="text-[#4B465C] text-[26px]">Enter OTP</p>
                        <p className="text-[#4B465C] text-[18px] mt-[5px]">We sent a verification code to your mobile. Enter the code from the mobile in the field below.</p>
                        <p className="text-[#4B465C] text-[18px] font-semibold">******9763</p>
                        <div className="mt-[15px]">
                            <p className="text-[16px] text-[#4B465C] font-semibold">Type your 6 digit security code</p>
                            <div className="space-x-4 mt-[5px]">
                                {
                                    code.map((data, index) => {
                                        return <input 
                                            type="text"
                                            className="outline-none rounded-[5px] w-[40px] h-[40px] text-center text-[19px] border-[1px] border-[#DBDADE]"
                                            maxLength={1}
                                            key={index}
                                            value={data}
                                            onChange={(e) => handleChange(e.target, index)}
                                            onFocus={(e) => e.target.select}
                                            autoFocus={index === 0}
                                        />
                                    })
                                }
                            </div>
                        </div>
    
                        <button onClick={() => handleVerification()} className=" mt-[20px] w-full text-center rounded-[5px] text-white bg-[#3C3836] py-[5px] cursor-pointer" >Verify my account</button>
                        <div className="mt-[10px] w-full flex justify-center"><p className="text-[16px] text-[#4B465C] ">Didn't get the code? <span className="text-[#DC7A39]">  Resend</span></p></div>
                    </div>
                </div>
            </div>
            )
        }

        </>
    );
}

export default OTPVerification;