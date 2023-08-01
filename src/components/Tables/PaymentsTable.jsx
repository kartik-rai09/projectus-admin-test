import React, { useState, useEffect } from "react";
import DataTable from 'datatables.net-dt';

const PaymentsTable = ({DataList, setViewPayment, setPaymentDetails}) => {

    //const [viewPayment, setViewPayment] = useState(false);
    //const [paymentDetails, setPaymentDetails] = useState({});
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
                    <th className="text-[#656565] text-[18px]">TRANSACTION ID </th>
                    <th className="text-[#656565] text-[18px]">SERVICE</th>
                    <th className="text-[#656565] text-[18px]">AMOUNT</th>
                    <th className="text-[#656565] text-[18px]">STATUS</th>
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
                            <td className="bg-white">{data.transactionId}</td>
                            <td className="bg-white">{data.service}</td>
                            <td className="bg-white">{data.amount}</td>
                            <td className="bg-white">{
                                data.status === "Credited" ? <div className="text-[#1BB55C] bg-[#1BB55C29] rounded-[3px] px-[3px] py-[3px] text-center">Credited</div> : <div className="text-[#EA5455] bg-[#EA545529] rounded-[3px] px-[3px] py-[3px] text-center">Debited</div>
                            }</td>
                            <td className="bg-white flex items-center space-x-3">
                                <img onClick={() => {
                                    setViewPayment(true)
                                    setPaymentDetails(data)
                                }} src="/Images/ViewIcon.png" alt="icon" className="w-[20px]" />
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    );
}

export default PaymentsTable;