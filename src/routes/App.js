import React from 'react';

import App1 from '../pages/App1';
import App2 from '../pages/App2';
import App3 from '../pages/App3';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<App1 />} />
                    <Route path='iniciarSesion' element={<App2 />} />
                    <Route path='registrarse' element={<App3 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;