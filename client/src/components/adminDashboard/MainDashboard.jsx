import {useParams} from "react-router-dom";
import {AddNotice} from "./AddNotice.jsx";
import NashaDashBoard from "./NashaMukti/NashaDashBoard.jsx";
import PatientDashboard from "./Patient/PatientDashboard.jsx";

const MainDashboard = () => {
    const {dashboard} = useParams();

    return (
        <main>
            {dashboard === "nasha" ? <NashaDashBoard/>
                : dashboard === "patients" ? <PatientDashboard/>
                    : dashboard === "notice" ? <AddNotice/>
                        : <h1>404</h1>}
        </main>

    )
}

export default MainDashboard;