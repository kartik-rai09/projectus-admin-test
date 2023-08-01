import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const BookingClosedTable = ({DataList, setViewBooking, setDeleteBooking, setDeleteBookingId, setBookingDetails}) => {

    const [openOptions, setOpenOptions] = useState(-1);
    const [open, setOpen] = useState(false);

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
                    <th className="text-[#656565] text-[18px]">BOOKING ID</th>
                    <th className="text-[#656565] text-[18px]">FULL NAME </th>
                    <th className="text-[#656565] text-[18px]">SERVICE</th>
                    <th className="text-[#656565] text-[18px]">VENDOR NAME</th>
                    <th className="text-[#656565] text-[18px]">SUB SERVICE</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.id}</td>
                            <td className="bg-white">{data.name}</td>
                            <td className="bg-white">{data.service}</td>
                            <td className="bg-white">{data.vendorName}</td>
                            <td className="bg-white">{data.subService}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewBooking(true)
                                    setBookingDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default BookingClosedTable;