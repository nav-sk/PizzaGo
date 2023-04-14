import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setMenuData} from "../redux/actions/menuDataAction";

export const FilterMenu = (props) => {
    const dispatch = useDispatch();
    const apiData = useSelector(state => state.apiDataReducer.data);
    const [filterMode, setFilterMode] = useState('both');

    useEffect(() => {
        switch (filterMode) {
            case "both":
                dispatch(setMenuData(apiData));
                return;
            case "veg": {
                dispatch(setMenuData(apiData.filter(el => el.isVeg)));
                return;
            }
            case "nonveg": {
                dispatch(setMenuData(apiData.filter(el => !(el.isVeg))));
                return;
            }
            default:
                return;
        }
    }, [filterMode]);

    return <div
        className="relative flex flex-row items-center w-full justify-center sm:justify-start my-5 px-2">
        <span className="font-extrabold text-xl">Filter By:&nbsp;</span>
        <div className="flex flex-row">
            <input type='radio' name="filter" id="filter-both" defaultChecked={true} value="both"
                   className="hidden peer/both"
                   onChange={e => setFilterMode('both')}/>
            <label htmlFor="filter-both"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold rounded-l-md transition-colors duration-300 peer-checked/both:bg-white peer-checked/both:text-black">Both</label>
            <input type='radio' name="filter" id="filter-veg" value="veg" className="hidden peer/veg"
                   onChange={e => setFilterMode('veg')}/>
            <label htmlFor="filter-veg"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold border-l-transparent border-r-transparent transition-colors duration-300 peer-checked/veg:bg-green-200 peer-checked/veg:text-green-800">Veg</label>
            <input type='radio' name="filter" id="filter-nonveg" value="nonveg" className="hidden peer/nonveg"
                   onChange={e => setFilterMode('nonveg')}/>
            <label htmlFor="filter-nonveg"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold rounded-r-md peer-checked/nonveg:bg-red-200 peer-checked/nonveg:text-red-800">Non
                veg</label>
        </div>
    </div>
}