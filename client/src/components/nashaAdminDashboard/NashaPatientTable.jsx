import {useEffect, useState} from "react";
import axios from "axios";



const NashaPatientTable = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        // Create an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/user/getCentrePatient');
                setPatients(response.data); // Update the state with response data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the async function
        fetchData();
    }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

    console.log(patients);

    return (
        
        <main>

            <div className="px-12">
                <table className="table table-zebra table-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Activity Status</th>
                        <th>Counselling Count</th>
                        <th>Remark</th>
                    </tr>
                    </thead>


                    <tbody>

                    {
                        patients.map(patient => (
                            <tr key={patient._id}>
                                <td>
                                    {patient._id}
                                </td>
                                <td>
                                    {patient.name}
                                </td>
                                <td>
                                    {patient.age}
                                </td>
                                <td>
                                    {patient.gender}
                                </td>
                                <td>
                                   Email {/*{patient.email}*/}
                                </td>
                                <td>
                                    {patient.city}
                                </td>
                                <td>
                                    {patient.address}
                                </td>
                                <td>
                                    {patient.activityStatus}
                                </td>
                                <td>
                                    {patient.counsellingCount}
                                </td>
                                <td>
                                    {patient.remark}
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-xs">Update</button>
                                </td>

                            </tr>
                        ))
                    }

                    </tbody>


                </table>
            </div>


        </main>
    )
}

export default NashaPatientTable;
