import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const VlogsTable = ({DataList, setViewBanner, setEditBanner, setDeleteBanner, setDeleteBannerName, setBannerDetails}) => {

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
                    <th className="text-[#656565] text-[18px]">TITLE</th>
                    <th className="text-[#656565] text-[18px]">CTA TEXT </th>
                    <th className="text-[#656565] text-[18px]">YOUTUBE LINK</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.title}</td>
                            <td className="bg-white">{data.ctaText}</td>
                            <td className="bg-white max-w-[300px] max-h-[30px] overflow-x-scroll overflow-y-scroll">{data.ctaLink}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewBanner(true)
                                    setBannerDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => EditDetailsHandler(data)} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setDeleteBanner(true)
                                    setDeleteBannerName(data.title)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
};

export default VlogsTable;