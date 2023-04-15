import {VegTag} from "./vegTag";
import {Rating} from "./rating";
import {FaRupeeSign} from "react-icons/fa";
import {BiCartAdd} from "react-icons/bi";

/*Each item in the menu list in home page*/
export const ItemCard = (props) => {
    const {id, description, img_url, name, price, rating, size, toppings, isVeg, showModal} = props;
    return <div
        className="w-full bg-white rounded-xl shadow-lg aspect-square outline outline-4 outline-transparent hover:outline-Orange transition-[outline-color] duration-300 overflow-hidden font-bold">
        <div className="h-2/3 relative">
            <img className="h-full w-full object-cover peer" src={img_url} alt={name}/>
            <div
                className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-Orange px-5 bg-opacity-90 opacity-0 pointer-events-none duration-300 transition-opacity peer-hover:opacity-100">
                <p className="text-center font-extrabold drop-shadow-xl text-white text-lg">{description}</p></div>
        </div>
        <div className="w-full p-2 flex flex-col relative">
            <VegTag isVeg={isVeg}/>
            <p className="font-extra bold">{name}</p>
            <Rating rating={rating}/>
            <p className="flex flex-row mt-4 ml-2 items-center text-2xl font-black"><FaRupeeSign
                className="mr-1"/>{price}</p>
            <button
                className="absolute bottom-2 right-4 bg-Yellow rounded-full py-3 px-5 text-xl text-Green shadow-md hover:bg-YellowDark"
                onClick={e=>showModal(props)}
            >
                <BiCartAdd/></button>
        </div>
    </div>
}
