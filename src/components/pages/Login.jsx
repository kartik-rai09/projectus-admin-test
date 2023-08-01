import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
    const navigate = useNavigate();

    const phoneRef = useRef();

    const [phone, setPhone] = useState(0);

    const getOtpHandler = () => {
        const number = phoneRef.current.value;

        if(number.length !== 10){
            console.log("invalid");
        }else{
            navigate("/login/otp-verification");
        }
    }

    return (
        <div className="flex items-center h-[100vh] w-full px-[150px] justify-center space-x-36">
            <img src="/Images/LoginPageHero.png" alt="HeroImage" className="w-[20rem]" />
            <div className="flex flex-col items-center space-y-24 max-w-[350px]">
                <img src="/Images/ProjectusBanner.png" alt="Banner" className="w-[200px]" />
                <div>
                    <p className="text-[#4B465C] text-[26px]">Welcome Back!</p>
                    <p className="text-[#4B465C] text-[18px] mt-[5px]">Please login with your registered mobile number</p>
                    <div className="mt-[15px]">
                        <p className="text-[14px]">Mobile Number</p>
                        <input ref={phoneRef} type="number" placeholder="+919495xxxxxx" required className="w-[100%] border-[1px] border-[#DBDADE] rounded-[5px] h-[35px]" />
                    </div>

                    <button onClick={() => getOtpHandler()} className=" mt-[40px] w-full text-center rounded-[5px] text-white bg-[#3C3836] py-[5px] cursor-pointer" >Get OTP</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;