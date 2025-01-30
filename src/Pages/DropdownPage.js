import Dropdown from '../components/Dropdown'

export default function DropdownPage(){

    const options = [
        {label:'red', value:'red'}, 
        {label:'green', value:'green'}, 
        {label:'blue', value:'blue'}
    ]
    
    return(
        <>
            <Dropdown options={options}/>
        </>
    )
}