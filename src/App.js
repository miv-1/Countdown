import './App.css';
import './bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import HelloThere from "./Pages/HelloThere";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/HelloThere' element={<HelloThere/>}/>
                <Route path='*' element={<h1>This page does not exist.</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
