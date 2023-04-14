import {useSelector} from "react-redux";
import {GiFullPizza, GiPizzaSlice} from "react-icons/gi";
import {Customize} from "./customize";
import {ItemCard} from "./ItemCard";
import {FilterMenu} from "./filterMenu";
import {SortMenu} from "./sortMenu";


const MenuEmpty = (props) => {
    return <div className="flex flex-col items-center mt-10">
        <GiFullPizza className="text-5xl text-gray-500"/>
        <p className="text-gray-500 font-bold mt-5">No Results Found</p>
    </div>
}
export const Menu = (props) => {
    const menuData = useSelector(state => state.menuDataReducer.data);

    return <div className="w-full flex flex-col items-center pb-10">
        <h2 className="sm:text-5xl text-3xl flex flex-row items-center justify-center font-Lobster text-Green text-center whitespace-nowrap flex-wrap sm:mb-8">Satisfy
            Your Cravings:&nbsp;<br className="sm:hidden"/>
            <span
                className="text-Orange stroke-1 stroke-black menu-title-text-orange block  sm:w-fit flex flex-row items-center">Our
            Pizza Menu<GiPizzaSlice className="ml-4 text-Green"/></span></h2>
        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-3/4 sm:px-5">
            <FilterMenu/>
            <SortMenu/>
        </div>
        {menuData && menuData.length > 0 ?
            <div className="w-full px-5 sm:w-3/4 flex grid sm:grid-cols-3 sm:gap-10 gap-5">
                {menuData && menuData.map((el, i) => {
                    return <ItemCard key={i} {...el}/>
                })}
            </div> : <MenuEmpty/>}
        <Customize {...menuData[0]}/>
        <div className="hidden text-green-600 text-red-600 bg-red-200 bg-green-200"/>
    </div>
}