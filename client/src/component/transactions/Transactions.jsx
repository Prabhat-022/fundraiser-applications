
const Transactions = () => {
    return (
        <>
            <div className="overflow-x-auto  w-full h-screen">
                <div className="flex items-center justify-between mx-40 mt-5">
                    <h1 className='text-center text-2xl'>Transactions</h1>
                    <p>
                        /General/Transactions
                    </p>
                </div>
            
            <div className="flex items-center justify-center">
            <table className="table  m-10 p-10 shadow bg-white rounded-lg">
                    <thead className="bg-orange-400">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Amount</th>
                            <th className="px-6 py-3">Transaction Id</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">PanCard</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <td className="px-6 py-4">1</td>
                            <td className="px-6 py-4">Prashant Shukla </td>
                            <td className="px-6 py-4">10</td>
                            <td className="px-6 py-4">pay_LDKND43ldaR</td>
                            <td className="px-6 py-4">Fri Mar 24 2023</td>
                            <td className="px-6 py-4">PJ4943</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            </div>

        </>
    )
}

export default Transactions
