import Link from './Link'

export default function Sidebar(){
    const Links = [
        {label: 'Accordion', path: '/'},
        {label: 'Dropdown', path: '/dropdown'},
        {label: 'Button', path:'/button'},
        {label: 'Modal', path:'/modal'},
        {label: 'Table', path:'/table'}

    ]
    
    const renderLinks = Links.map((link) =>{
        return(
            <Link key={link.label} to={link.path} className='mb-2'>{link.label}</Link>
        )
    })

    return(
        <div className='flex flex-col'>
            {renderLinks}
        </div>
    )
}