import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setMenuData} from "../redux/actions/menuDataAction";
import {BiSortDown, BiSortUp} from "react-icons/bi";

export const SortMenu = (props) => {
    const dispatch = useDispatch();
    const apiData = useSelector(state => state.apiDataReducer.data);
    const [sortOrder, setSortOrder] = useState(true);
    const [sortMode, setSortMode] = useState('default');

    useEffect(() => {
        switch (sortMode) {
            case "default":
                dispatch(setMenuData(apiData));
                return;
            case "price": {
                const _ = [...apiData];
                _.sort((a, b) => sortOrder ? b.price - a.price : a.price - b.price);
                dispatch(setMenuData(_));
                return;
            }
            case "rating": {
                const _ = [...apiData];
                _.sort((a, b) => sortOrder ? b.rating - a.rating : a.rating - b.rating);
                dispatch(setMenuData(_));
                return;
            }
            default:
                return;
        }
    }, [sortMode, sortOrder]);

    return <div
        className="relative flex flex-row items-center justify-center sm:justify-end w-full mb-5 mt-0 sm:mt-5 px-2">
        <span className="font-extrabold text-xl">Sort By:&nbsp;</span>
        <div className="flex flex-row">
            <input type='radio' name="sort" id="sort-default" defaultChecked={true} value="default"
                   className="hidden peer/default"
                   onChange={e => setSortMode('default')}/>
            <label htmlFor="sort-default"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold rounded-l-md transition-colors duration-300 peer-checked/default:bg-white peer-checked/default:text-black">Default</label>
            <input type='radio' name="sort" id="sort-price" value="price" className="hidden peer/price"
                   onChange={e => setSortMode('price')}/>
            <label htmlFor="sort-price"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold border-l-transparent border-r-transparent transition-colors duration-300 peer-checked/price:bg-white border-collapse peer-checked/price:text-black">Price</label>
            <input type='radio' name="sort" id="sort-rating" value="rating" className="hidden peer/rating"
                   onChange={e => setSortMode('rating')}/>
            <label htmlFor="sort-rating"
                   className="px-3 py-1 border-2 text-gray-600 border-gray-400 font-bold rounded-r-md peer-checked/rating:bg-white border-collapse peer-checked/rating:text-black">Rating</label>
        </div>
        <div className="text-gray-600 ml-2 text-2xl" style={{display: sortMode === 'default' ? 'none' : 'block'}}
             onClick={e => setSortOrder(!sortOrder)}>{sortOrder ?
            <BiSortDown title="Sort: Decreasing Order"/> : <BiSortUp title="Sort: Increasing Order"/>}</div>
    </div>
}
