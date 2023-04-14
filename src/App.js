import './App.css';
import {Header} from "./components/header";
import {Menu} from "./components/menu";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setApiData} from "./redux/actions/apiDataAction";
import {setMenuData} from "./redux/actions/menuDataAction";

const App = () => {
    const apiData = useSelector(state => state.apiDataReducer.data);
    const reduxDispatch = useDispatch();

    useEffect(() => {
        if (!!!apiData) {
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
        <Header/>
        <Menu/>
    </div>
}
export default App;
