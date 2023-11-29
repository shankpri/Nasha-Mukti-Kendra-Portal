const NashaPatientTable = () => {

    const ids = [1, 2, 3];

    return (
        <main>

            <div className="px-12">
                <table className="table table-zebra table-lg">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Publish Date</th>
                        <th>Notice</th>

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
                                    20/09/2023
                                </td>
                                <td>
                                    You are advised to follow the guidelines issued by the Ministry of Social Justice and Empowerment1
                                    and the Ministry of Health and Family Welfare2 for cleaning and disinfection of nasha mukti kendra.
                                    You are also required to use eco-friendly and biodegradable products for cleaning purposes.
                                    You should dispose of the waste materials in a safe and responsible manner, following the rules of solid waste management3
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
