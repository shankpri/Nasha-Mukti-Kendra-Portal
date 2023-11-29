import DashboardNavbar from "../../components/adminDashboard/DashboardNavbar.jsx";
import Divider from "../../components/Divider.jsx";
import MainDashboard from "../../components/adminDashboard/MainDashboard.jsx";

export const AdminDashboard = () => {
    return (
        <>
            <DashboardNavbar/>
            <Divider/>
            <MainDashboard/>
        </>
    );
};