import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const TestimonialsTable = ({DataList, setViewBanner, setEditBanner, setDeleteBanner, setDeleteBannerName, setBannerDetails}) => {

    function EditDetailsHandler(data){
        setBannerDetails(data)
        setEditBanner(true)
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
                    <th className="text-[#656565] text-[18px]">USER NAME</th>
                    <th className="text-[#656565] text-[18px]">REVIEW</th>
                    <th className="text-[#656565] text-[18px]">RATING</th>
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
                            <td className="bg-white">{data.review.substring(0, 20) + "..."}</td>
                            <td className="bg-white">
                                <img src="/Images/RatingIcon.png" className="w-[100px]" alt="rating" />
                            </td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewBanner(true)
                                    setBannerDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    EditDetailsHandler(data)
                                    setEditBanner = {setEditBanner}
                                }} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setDeleteBanner(true)
                                    setDeleteBannerName(data.name)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
};

export default TestimonialsTable;