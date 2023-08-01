import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const SubadminManagementTable = ({DataList, setView, setEdit, setDeleteSubadmin, setDeleteName, setDetails}) =>{

    function EditDetailsHandler(data){
        setDetails(data)
        setEdit(true)
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
                    <th className="text-[#656565] text-[18px]">EMAIL </th>
                    <th className="text-[#656565] text-[18px]">MOBILE</th>
                    <th className="text-[#656565] text-[18px]">ASSIGNED ROLE</th>
                    <th className="text-[#656565] text-[18px]">USERS ASSIGNED</th>
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
                            <td className="bg-white">{data.email}</td>
                            <td className="bg-white">{data.mobile}</td>
                            <td className="bg-white">{data.assignedRole}</td>
                            <td className="bg-white">{data.usersAssigned}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setView(true)
                                    setDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => EditDetailsHandler(data)} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setDeleteSubadmin(true)
                                    setDeleteName(data.name)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default SubadminManagementTable;