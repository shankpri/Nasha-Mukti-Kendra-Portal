import {useParams} from "react-router-dom";
import {AddNotice} from "../adminDashboard/AddNotice.jsx";
import {NewPatient} from "./NewPatient.jsx";
import NashaPatientTable from "./NashaPatientTable.jsx";
import Notices from "./Notices.jsx";

const MainDashboard = () => {
    const {dashboard} = useParams();

    return (
        <main>
            {dashboard === "patients" ? <NashaPatientTable/>
                : dashboard === "newpatient" ? <NewPatient/>
                    : dashboard === "notices" ? <Notices/>
                        : <h1>404</h1>}
        </main>

    )
}

export default MainDashboard;