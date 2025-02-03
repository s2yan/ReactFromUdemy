import Table from './Table'
import {useState} from 'react'

export default function SortableTable(props){
    const { config } = props
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    let handleLabelClick = (lable) =>{
        if(sortOrder === null){
            setSortOrder('asc')
            setSortBy(lable)
        }else if(sortOrder === 'asc'){
            setSortOrder('desc')
            setSortBy(lable)
        }else{
            setSortOrder(null)
            setSortBy(null)
        }   
    }

    //console.log(sortOrder)
    //console.log(sortBy)

    let updatedConfig = config.map((column) =>{
        if(column.sortValue){
            return {
                ...column,
                header: () => {
                    return <th 
                                className="px-4 py-2 border-b border border-gray-900" key={column.lable} onClick={() => {handleLabelClick(column.lable)}}>
                                    {column.lable} is sortable
                            </th>}
            }
        }
        return column
    })
    //console.log(updatedConfig)
    
    //If sort order and sortby both are not null in that casses we will sort the data
    let sortedData = props.data
    if(sortOrder && sortBy){
        const {sortValue} = config.find((column) => column.lable === sortBy)
        sortedData = [...props.data].sort((a,b) =>{
            let valueA = sortValue(a)
            let valueB = sortValue(b)

            let reverseOrder = sortOrder === 'asc' ? 1 : -1
            if(typeof valueA === 'string'){
                return reverseOrder * valueA.localeCompare(valueB)
            }else{
                return (valueA - valueB) * reverseOrder
            }
        })

    }

    
    return <Table {...props} data ={sortedData} config={updatedConfig}/>
}

