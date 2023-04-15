import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setApiData} from "./redux/actions/apiDataAction";
import {setMenuData} from "./redux/actions/menuDataAction";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./components/cart";
import {Home} from "./components/home";
import {Footer} from "./components/footer";

const App = () => {
    const apiData = useSelector(state => state.apiDataReducer.data);
    const reduxDispatch = useDispatch();

    useEffect(() => {
        //Setting the data from API call only for first time launch of application
        if (!apiData) {
            axios.get('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68').then(res => {
                console.log("API Success")
                reduxDispatch(setApiData(res.data));
                reduxDispatch(setMenuData(res.data));
            }).catch(err => {
                console.error(err.error);
            })
        }
    }, []);

    return <div className="bg-Platinum font-Nunito min-h-full">
        {/* Setting two routes in the application
            1) / -> listing page of the application
            2) /cart -> cart page of the application
        */}
        <Routes>
            <Route path="cart" element={<Cart/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        {/* Implementing common footer for both the applications*/}
        <Footer/>

    </div>
}
export default App;
