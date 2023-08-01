// import ServiceManagement from "../ServiceManagement/Services/ServiceManagement";
import UserManagement from "../User/UserManagement";
import VendorManagement from "../Vendor/Management/VendorManagement";
import VendorVerification from "../Vendor/Verification/VenderVerification";
// import HireVendor from "../ServiceManagement/HireVendor/HireVendor";
// import BookingRescheduled from '../BookingManagement/Rescheduled/BookingRescheduled';
// import BookingPending from '../BookingManagement/Pending/BookingPending';
// import BookingClosed from '../BookingManagement/Closed/BookingClosed';
import Footer from "./Footer";
import Header from "./Header";
// import Testimonials from "../ContentManagement/Testimonials/Testimonials";
// import Vlogs from "../ContentManagement/Vlogs/Vlogs";
// import Banners from "../ContentManagement/Banners/Banners";
// import Payments from "../Payments/Payments";
// import RolesManagement from "../RolesAccessManagement/RolesManagement/RolesManagement";
// import SubadminManagement from "../RolesAccessManagement/SubadminManagement/SubadminManagement";

const ContentContainer = ({selectedPage}) => {
    return (
        <>  
            <div className="w-[80%] h-[100vh] relative">
                <Header/>
                
                {
                    selectedPage === 1 ? <UserManagement /> : null
                }

                {
                    selectedPage === 2 ? <VendorVerification /> : null
                }

                {
                    selectedPage === 3 ? <VendorManagement /> : null
                }

                {/* {
                    selectedPage === 4 ? <ServiceManagement /> : null
                }

                {
                    selectedPage === 5 ? <HireVendor /> : null
                }

                {
                    selectedPage === 6 ? <BookingPending /> : null
                }

                {
                    selectedPage === 7 ? <BookingRescheduled /> : null
                }

                {
                    selectedPage === 8 ? <BookingClosed /> : null
                }

                {
                    selectedPage === 9 ? <Banners /> : null
                }

                {
                    selectedPage === 10 ? <Vlogs /> : null
                }

                {
                    selectedPage === 11 ? <Testimonials /> : null
                }

                {
                    selectedPage === 12 ? <RolesManagement /> : null
                }

                {
                    selectedPage === 13 ? <SubadminManagement /> : null
                }

                {
                    selectedPage === 16 ? <Payments /> : null */}
                {/* } */}

                <Footer/>
            </div>
        </>
    );
}

export default ContentContainer;