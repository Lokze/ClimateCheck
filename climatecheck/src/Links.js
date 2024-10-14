import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalWarming } from './pages/gw';
import { GWDetails } from './pages/gwDetails';
import { NotFoundPages } from './pages/NotFoundPages';

export const Links = () =>{
    return (
        <Router>
            <Routes>
                <Route path="/gw" element={ <GlobalWarming/>}/>
                <Route path='/gw/details' element={<GWDetails/>}/>
                <Route element={<NotFoundPages/>}/>
            </Routes>
        </Router>
    )
}