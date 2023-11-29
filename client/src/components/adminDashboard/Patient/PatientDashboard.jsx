
import PatientNav from "./PatientNav.jsx";
import PatientTable from "./PatientTable.jsx";
import Divider from "../../Divider.jsx";

const PatientDashboard = () => {
    return (
        <>
            <PatientNav/>
            <Divider/>
            <PatientTable/>
        </>
    );
};

export default PatientDashboard;