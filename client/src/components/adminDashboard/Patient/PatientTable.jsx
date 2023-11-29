const PatientTable = () => {

    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                        <th>Addiction Status</th>
                    </tr>
                    </thead>


                    <tbody>

                    {
                        ids.map(i => (
                            <tr key={i}>
                                <td>
                                    7869097709
                                </td>
                                <td>
                                    Priyank
                                </td>
                                <td>
                                    20
                                </td>
                                <td>
                                    Male
                                </td>
                                <td>
                                    email@email.email
                                </td>
                                <td>
                                    Lucknow
                                </td>
                                <td>
                                    Plot-2A Central Arc Gomti Nagar
                                </td>
                                <td>
                                    Active
                                </td>
                                <td>
                                    16
                                </td>
                                <td>
                                    Good
                                </td>
                                <td>
                                    Non-Addicted
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

export default PatientTable;
