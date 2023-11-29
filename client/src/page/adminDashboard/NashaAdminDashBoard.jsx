
import MainDash from "../../components/nashaAdminDashboard/MainDash.jsx";
import NashaPatientNav from "../../components/nashaAdminDashboard/NashaPatientNav.jsx";
import Divider from "../../components/Divider.jsx";


export const NashaAdminDashboard = () => {
    return (
        <>
            <NashaPatientNav/>
            <Divider/>
            <MainDash/>
        </>
    );
};