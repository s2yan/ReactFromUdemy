import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';

export default function ModalPage(){
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = ()=>{
        setIsOpen(!isOpen);
    }

    const handleClose = () =>{
        setIsOpen(!isOpen);
    }

    const actionBar = (
        <div>
            <Button primary rounded onClick={() =>{
                setIsOpen(!isOpen);
            }}>I Accept</Button>
        </div>
    )
    const modal = (<Modal onClose={handleClose}  actionBar={actionBar}>
        <p>This is the content of the modal</p>
    </Modal>)

    return(
        <div>
            <Button 
                onClick={handleClick}
                primary 
                rounded
            >Open Modal</Button>
            {isOpen && modal}
        </div>
    )
}