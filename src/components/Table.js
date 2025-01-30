export default function Table({ data , config }){

    //rendering the table body using data prop as argument for config
    const renderRow = data.map((item) =>{
        const renderCell = config.map((columnConfig) =>{
            return(
                <td className='border border-gray-900 px-4 py-2' key={columnConfig.lable}>{columnConfig.render(item)}</td>
            )
        })

        return(
            <tr key={item.name} className="border-b">
                {renderCell}
            </tr>
        )
    })

    //rendering the table header using data prop
    const renderHeader = config.map((columnConfig) =>{
        return(
            <th className="px-4 py-2 border-b border border-gray-900" key={columnConfig}>{columnConfig.lable}</th>
        )
    }
    )

    return (
        <table className='bg-white border border-gray-900'>
            <thead className='bg-gray-300'>
                <tr>
                    {renderHeader}
                </tr>
            </thead>
            <tbody>
                {renderRow}
            </tbody>
        </table>
    )
}