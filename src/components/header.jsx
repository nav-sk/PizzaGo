import {BiCart, BiSearchAlt, BiX} from "react-icons/bi";
import {useState} from "react";
import pizzaHeader from '../assets/pizzaHeader.jpg'
import {useDispatch, useSelector} from "react-redux";
import {setMenuData} from "../redux/actions/menuDataAction";

export const Header = (props) => {
    const dispatch = useDispatch();
    const apiData = useSelector(state => state.apiDataReducer.data);
    const [searchQuery, setSearchQuery] = useState("");
    const onSearchQueryChange = e => {
        e.preventDefault();
        const query = e.currentTarget.value;
        setSearchQuery(query);
        dispatch((setMenuData(apiData.filter(el => el.name.toLowerCase().includes(query.toLowerCase())))));
    }
    // style={{background: `url(${pizzaHeader})`, backgroundSize: "cover"}}
    return <header className="w-full flex flex-col items-center sm:pb-0 pb-10">
        <div
            className="w-full flex flex-row items-center justify-between text-Orange h-16 bg-Green px-4 fixed z-10 top-0">
            <h1 className="font-Lobster text-2xl sm:text-3xl">Treflo</h1>
            <div className="flex flex-row items-center font-bold">
                <a className="cursor-pointer mr-10 hover:text-Yellow border-b-2 border-transparent hover:border-Yellow transition-all duration-300 sm:block hidden">Login</a>

                <button
                    className="bg-Yellow pr-5 pl-4 text-platinum py-2 rounded-full shadow-md hover:bg-Orange duration-300 transition-colors flex flex-row justify-between items-center text-Navy">
                    <BiCart className="mr-2 text-xl"/>Cart
                </button>
            </div>
        </div>
        <img src={pizzaHeader} alt="pizza header" className="w-full mt-16"/>
        {/*<div className="bg-Orange bg-opacity-40 w-full  py-24">*/}
        {/*  <h1 className="font-Nunito font-black text-5xl">The ultimate pizza destination awaits!</h1>*/}
        {/*</div>*/}
        <div
            className="w-full sm:w-1/2 h-12 sm:h-16 rounded-md flex sm:-translate-y-1/2 relative items-center bg-white shadow-lg">
            <BiSearchAlt className="text-2xl mx-5"/>
            <input type="text" className="w-full h-full rounded-r-md outline-none font-Nunito font-bold bg-inherit"
                   placeholder="Search Pizzas" value={searchQuery}
                   onChange={onSearchQueryChange}/>
            <BiX className="text-2xl mx-5 cursor-pointer"
                 style={{display: searchQuery.trim() === "" ? "none" : "block"}} onClick={() => setSearchQuery("")}/>
        </div>
    </header>
}