import {useState, useEffect} from 'react';

const NonActiveClass = 'flex items-center bg-[#F8F8F8] text-[#4B465C] rounded-[5px] px-[10px] py-[4px] cursor-pointer';
const ActiveClass = "flex items-center bg-[#3C3836] text-white rounded-[5px] px-[10px] py-[4px] cursor-pointer"

const Sidebar = ({setSelectedPage}) => {

    const [active, setActive] = useState(1);

    return (
        <>
        <div className="h-[100vh] w-[20%] shadow-xl overflow-y-scroll">
            <img src="/Images/SidebarLogo.png" alt="logo" className="" />
            
            <div className="px-[20px]">

                <div className="">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Users</p>
                    <div onClick={() => {
                        setActive(1)
                        setSelectedPage(1)
                    }} className={active === 1 ? ActiveClass : NonActiveClass}>
                        <img src={active === 1 ? "/Images/SidebarManagementIcon.png": "Images/SidebarManagementIconDark.png"} alt="icon" className="w-[25px]" /> 
                        <p className="pl-[10px]">Management</p>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Vendor</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(2)
                            setSelectedPage(2)
                        }} className={active === 2 ? ActiveClass : NonActiveClass}>
                            <img src={active === 2 ? "/Images/SidebarManagementIcon.png": "Images/VendorVerificationDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Verification</p>
                        </div>
                        <div onClick={() => {
                            setActive(3)
                            setSelectedPage(3)
                        }} className={active === 3 ? ActiveClass : NonActiveClass}>
                            <img src={active === 3 ? "/Images/SidebarManagementIcon.png": "Images/SidebarManagementIconDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Management</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Service Management</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(4)
                            setSelectedPage(4)
                        }} className={active === 4 ? ActiveClass : NonActiveClass}>
                            <img src={active === 4 ? "/Images/SidebarManagementIcon.png": "Images/ServicesDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Services</p>
                        </div>
                        <div onClick={() => {
                            setActive(5)
                            setSelectedPage(5)
                        }} className={active === 5 ? ActiveClass : NonActiveClass}>
                            <img src={active === 5 ? "/Images/SidebarManagementIcon.png": "Images/SidebarManagementIconDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Hire a vendor</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Bookings Management</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(6)
                            setSelectedPage(6)
                        }} className={active === 6 ? ActiveClass : NonActiveClass}>
                            <img src={active === 6 ? "/Images/SidebarManagementIcon.png": "Images/PendingDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Pending</p>
                        </div>
                        <div onClick={() => {
                            setActive(7)
                            setSelectedPage(7)
                        }} className={active === 7 ? ActiveClass : NonActiveClass}>
                            <img src={active === 7 ? "/Images/SidebarManagementIcon.png": "Images/RescheduledDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Rescheduled</p>
                        </div>
                        <div onClick={() => {
                            setActive(8)
                            setSelectedPage(8)
                        }} className={active === 8 ? ActiveClass : NonActiveClass}>
                            <img src={active === 8 ? "/Images/SidebarManagementIcon.png": "Images/ClosedDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Closed</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Content Management</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(9)
                            setSelectedPage(9)
                        }} className={active === 9 ? ActiveClass : NonActiveClass}>
                            <img src={active === 9 ? "/Images/SidebarManagementIcon.png": "Images/BannersIcon.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Banners</p>
                        </div>
                        <div onClick={() => {
                            setActive(10)
                            setSelectedPage(10)
                        }} className={active === 10 ? ActiveClass : NonActiveClass}>
                            <img src={active === 10 ? "/Images/SidebarManagementIcon.png": "Images/VlogsDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Vlogs</p>
                        </div>
                        <div onClick={() => {
                            setActive(11)
                            setSelectedPage(11)
                        }} className={active === 11 ? ActiveClass : NonActiveClass}>
                            <img src={active === 11 ? "/Images/SidebarManagementIcon.png": "Images/TestimonialsDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Testimonials</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Roles / Access</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(12)
                            setSelectedPage(12)
                        }} className={active === 12 ? ActiveClass : NonActiveClass}>
                            <img src={active === 12 ? "/Images/SidebarManagementIcon.png": "Images/RolesDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Roles</p>
                        </div>
                        <div onClick={() => {
                            setActive(13)
                            setSelectedPage(13)
                        }} className={active === 13 ? ActiveClass : NonActiveClass}>
                            <img src={active === 13 ? "/Images/SidebarManagementIcon.png": "Images/PermissionsDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Subadmin Management</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Reports</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(14)
                            setSelectedPage(14)
                        }} className={active === 14 ? ActiveClass : NonActiveClass}>
                            <img src={active === 14 ? "/Images/SidebarManagementIcon.png": "Images/GeneralReportDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">General Reports</p>
                        </div>
                        <div onClick={() => {
                            setActive(15)
                            setSelectedPage(15)
                        }} className={active === 15 ? ActiveClass : NonActiveClass}>
                            <img src={active === 15 ? "/Images/SidebarManagementIcon.png": "Images/FinancialReportDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Financial Reports</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[15px] mb-[20px]">
                    <p className="text-[13px] text-[#4B465C] px-[5px] mb-[10px]">Payments</p>
                    <div className='space-y-2'>
                        <div onClick={() => {
                            setActive(16)
                            setSelectedPage(16)
                        }} className={active === 16 ? ActiveClass : NonActiveClass}>
                            <img src={active === 16 ? "/Images/SidebarManagementIcon.png": "Images/PaymentsDark.png"} alt="icon" className="w-[25px]" /> 
                            <p className="pl-[10px]">Payments</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Sidebar;