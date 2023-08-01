import Sidebar from "./Assets/Sidebar";
import ContentContainer from "./Assets/ContentContainer";
import {useState, useEffect} from 'react';

const Dashboard = (props) => {

    const [selectedPage, setSelectedPage] = useState(1);

    return (
        <>  
        <div className="w-[100vw] flex">
            <Sidebar setSelectedPage = {setSelectedPage} />
            <ContentContainer selectedPage={selectedPage} />
        </div>
        </>
    );
}

export default Dashboard;