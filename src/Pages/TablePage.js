import SortableTable from '../components/SortableTable'


export default function TablePage(){
    const data = [
        {name: 'Orange', color: 'bg-orange-500', price: 100},
        {name: 'Apple', color : 'bg-red-300', price: 80},
        {name: 'Banana', color: 'bg-yellow-500', price: 120},
        {name: 'Mango', color: 'bg-green-500', price: 150}
    ]
    
    //Adding config so that our table can show dynamic data, which will be also an array of objects.
    const config = [
        {
            lable: 'Name',
            render: (fruit) => fruit.name
        },
        {
            lable: 'Color',
            render:  (fruit) => <div className={`w-4 h-4 p-4 ${fruit.color}`}></div>
        },
        {
            lable: 'Price',
            render: (fruit) => fruit.price
        },
        {
            lable: 'Price with Tax',
            render: (fruit) => fruit.price * 1.1    
        }
    ]

    return (
        //<Table data = { data }  config ={config}/>
        <SortableTable data={data} config ={config}/>
    )
}