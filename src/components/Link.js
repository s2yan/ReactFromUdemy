import { useContext } from 'react';
import NavigationContext from '../context/Navigation';
import ClassNames from 'classnames';

export default function Link({ to, children, className }) {
    const { navigate } = useContext(NavigationContext);
    const classes = ClassNames('text-blue-700', 'hover:text-blue-900', 'hover:border-l-4 border-blue-900 pl-1.5', className);
    const handleClick = (e) => {
        e.preventDefault();
        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>
            {children}
        </a>
    );
}