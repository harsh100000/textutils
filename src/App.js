import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

const App = () => {

    const [mode, setMode] = useState('light')
    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark')
            document.body.style.backgroundColor = 'rgb(29, 30, 66)'
            document.body.style.color = 'white'
            setBtnText('Disable Dark Mode')
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'
            document.body.style.color = 'black'
            setBtnText('Enable Dark Mode')
        }
    }

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} btnText={btnText} />
                <div className="container my-3">
                    <Routes>
                        <Route exact path='/' element={<TextForm mode={mode}/>}></Route>
                        <Route exact path='/about' element={<About/>}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App
