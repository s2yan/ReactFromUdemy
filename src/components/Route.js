import { useContext } from 'react'
import  NavigationContext from '../context/Navigation'

export default function Route({ path, children }){
    const { currentPath } = useContext(NavigationContext)
    if(path === currentPath) return children
    return null
}