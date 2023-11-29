const NashaTable = () => {

    const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <main>

            <div className="px-12">
                <table className="table table-zebra table-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nasha Kendra Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>Total Patients</th>
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
                                    Lucknow Central P10
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
                                    1500
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

export default NashaTable;
