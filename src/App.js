import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getAccessTokenFromLocalStorage} from "./utils/storage";
import axios from "axios";


function App() {

    useEffect(() => {
        const token = getAccessTokenFromLocalStorage();

        if(token) {
            axios.get("http://188.225.31.249:8000/api/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(res => {
                console.log(res.data);
            }).catch(e => {
                alert(e)
            })
        }

    }, [])

    return (
        <Routes>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'*'} element={<MainPage/>}/>
        </Routes>
    );
}

export default App;
