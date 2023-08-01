import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const RolesManagementTable = ({DataList, setViewRole, setEditRole, setDeleteRole, setDeleteRoleId, setRoleDetails}) => {

    function EditDetailsHandler(data){
        setRoleDetails(data)
        setEditRole(true)
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
                    <th className="text-[#656565] text-[18px]">ROLE ID</th>
                    <th className="text-[#656565] text-[18px]">ROLE NAME </th>
                    <th className="text-[#656565] text-[18px]">USER ASSIGNED</th>
                    <th className="text-[#656565] text-[18px]">TOTAL PERMISSIONS</th>
                    <th className="text-[#656565] text-[18px]">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    DataList.map((data, index) => {
                    return (
                        <tr className="bg-white py-[10px]">
                            <td className="bg-white">{index+1}.</td>
                            <td className="bg-white">{data.roleId}</td>
                            <td className="bg-white">{data.roleName}</td>
                            <td className="bg-white">{data.userAssigned}</td>
                            <td className="bg-white">{data.totalPermissions}</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewRole(true)
                                    setRoleDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => EditDetailsHandler(data)} src="/Images/EditIcon.png" alt="icon" className="w-[20px]" />
                                <img onClick={() => {
                                    setDeleteRole(true)
                                    setDeleteRoleId(data.roleId)
                                }} src="/Images/DeleteIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default RolesManagementTable;