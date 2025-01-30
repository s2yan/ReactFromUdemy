import Sidebar from './components/Sidebar'
import Route from './components/Route'
import AccordionPage from './Pages/AccordionPage'
import DropdownPage from './Pages/DropdownPage'
import ButtonPage from './Pages/ButtonPage'
import ModalPage from './Pages/ModalPage'
import TablePage from './Pages/TablePage'
export default function App() {
    return (
        <>
            <div className='container mx-auto grid grid-cols-4 gap-4 p-4'>
                <Sidebar className="col-span-1" />
                <div className="col-span-3">
                    <Route path='/'>
                        <AccordionPage />
                    </Route>

                    <Route path='/dropdown'>
                        <DropdownPage />
                    </Route>

                    <Route path='/button'>
                        <ButtonPage />
                    </Route>

                    <Route path='/modal'>
                        <ModalPage />
                    </Route>
                    <Route path={'/table'}>
                        <TablePage />
                    </Route>
                </div>
            </div>
        </>
    );
}