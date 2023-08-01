import {useState, useEffect} from 'react';
import VendorVerificationTable from '../../Tables/VendorVerificationTable';
import DataList from '../../Database/VendorVerificationData';
import ViewVendor from './ViewVendor';

const VendorVerification = () => {

    const [addVendor, setAddVendor] = useState(false);
    const [viewVendor, setViewVendor] = useState({
        show: false,
        vendorId: -1,
    });
    const [vendorDetails, setVendorDetails] = useState({});

    return (
        <div className="relative px-[30px] py-[30px]">
            <p className="text-[22px] text-[#4B465C] font-semibold">
                {addVendor ? <p><span className="text-[#4B465C90]">Vendor Verification</span> / Add Vendor </p> : (
                    viewVendor.show ? <p><span className="text-[#4B465C90]">Vendor Verification</span> / View Vendor </p> : (
                        <p className="text-[22px] text-[#4B465C] font-semibold">Vendor Verification</p>
                    )
                ) }

            </p>
            {/* {
                !addVendor ? (
                    <div className="w-full flex justify-end">
                        <button onClick = {() => setAddVendor(true)} className="px-[8px] py-[2px] text-center text-[16px] text-[#DC7A39] border-[1px] border-[#DC7A39] rounded-[5px]">+  Add Vendor</button>
                    </div>
                ) : null
            }    */}

            {
                    viewVendor.show ? (
                        <ViewVendor 
                            setViewVendor = {setViewVendor} 
                            vendorDetails = {vendorDetails} 
                            viewVendor = {viewVendor} 
                        />
                    ) : (
                            <div className="border-[1px] border-[#DBDADE] p-[10px] mt-[30px]">
                                <VendorVerificationTable 
                                    DataList={DataList} 
                                    setViewVendor = {setViewVendor} 
                                    setVendorDetails = {setVendorDetails}
                                />
                            </div>
                    )
                
            }
        </div>
    );
}

export default VendorVerification;