import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';



const VendorVerificationTable = ({DataList, setViewVendor, setVendorDetails, setVendorId}) => {

    const [openOptions, setOpenOptions] = useState(-1);
    const [open, setOpen] = useState(false);

    function optionsHandler(index){
        if(open == true){
            setOpenOptions(-1);
            setOpen(false);
        }else{
            setOpenOptions(index);
            setOpen(true);
        }
    }

    useEffect(() => {
        let table = new DataTable('#myTable', {
            scrollY: 400,
            retrieve: true,
        });
    }, []);


    return (
        <table id="myTable" class="display">
            <thead>
                <tr>
                    <th className="text-[#656565] text-[18px]">S.NO.</th>
                    <th className="text-[#656565] text-[18px]">FULL NAME</th>
                    <th className="text-[#656565] text-[18px]">MOBILE </th>
                    <th className="text-[#656565] text-[18px]">EMAIL</th>
                    <th className="text-[#656565] text-[18px]">REGISTER DATE</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.name}</td>
                            <td className="bg-white">{data.mobile}</td>
                            <td className="bg-white">{data.email}</td>
                            <td className="bg-white">{data.date}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewVendor({
                                        show: true,
                                        vendorId: index,
                                    })
                                    setVendorDetails({
                                        name: data.name,
                                        mobile: data.mobile,
                                        email: data.email,
                                    })
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default VendorVerificationTable;