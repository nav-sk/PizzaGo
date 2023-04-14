import {VegTag} from "./vegTag";
import {Rating} from "./rating";
import {FaRupeeSign} from "react-icons/fa";


const Choice = props => {
    const {isRadio, title, choice, checked} = props;
    const formattedChoice = choice.split(' ').map(word=>word.toLowerCase()).join('-');
    return <label>
        <input type={isRadio ? 'radio' : 'checkbox'} id={`${title}-${formattedChoice}`} name={title} value={`${title}-${formattedChoice}`} defaultChecked={checked}/>
        <span>{choice}</span>
    </label>
}
const Choices = (props) => {
    const {items} = props;
    console.log(props)
    return <div>
        {items && items.map((el, i) => <Choice {...props}  choice={Object.values(el)[0]} checked={i===0}/>)}
    </div>
}

export const Customize = (props) => {
    const {id, description, img_url, name, price, rating, size, toppings, isVeg} = props;

    return <div
        className="w-full h-full fixed top-0 left-0 z-20 bg-black bg-opacity-60 flex justify-center items-center">
        <div className="w-1/2 h-96 bg-white rounded-lg shadow-lg p-5 flex flex-row ">
            <div className="h-full w-full flex flex-col">
                <img src={img_url} alt={name} className="w-full rounded-md shadow-lg"/>
                <div className="w-full h-full flex flex-col relative p-2">
                    <VegTag/>
                    <div className="w-full h-full flex flex-row justify-between">
                        <div className="flex flex-col justify-center">
                            <p className="font-extrabold text-lg">{name}</p>
                            <Rating rating={rating}/>
                        </div>
                        <p className="flex flex-row mt-4 ml-2 items-center text-2xl font-black"><FaRupeeSign
                            className="mr-1"/>{price}</p>
                    </div>
                </div>
            </div>

            <form className="w-full h-16 p-2">
                <h2 className="font-extrabold text-lg">Choose Size:</h2>
                <Choices {...size[0]} title="size"/>

                <h2 className="font-extrabold text-lg">Choose Toppings:</h2>
                <Choices {...toppings[0]} title="size"/>
            </form>
        </div>
    </div>
}

// <div
//     className="w-full bg-white rounded-xl shadow-lg aspect-square outline outline-4 outline-transparent hover:outline-Orange transition-[outline-color] duration-300 overflow-hidden font-bold">
//     <div className="h-2/3 relative">
//         <img className="h-full w-full object-cover peer" src={img_url} alt={name}/>
//         <div
//             className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-Orange px-5 bg-opacity-90 opacity-0 pointer-events-none duration-300 transition-opacity peer-hover:opacity-100">
//             <p className="text-center font-extrabold drop-shadow-xl text-white text-lg">{description}</p></div>
//     </div>
//     <div className="w-full p-2 flex flex-col relative">
//         <VegTag isVeg={isVeg}/>
//         <p className="font-extra bold">{name}</p>
//         <Rating rating={rating}/>
//         <p className="flex flex-row mt-4 ml-2 items-center text-2xl font-black"><FaRupeeSign
//             className="mr-1"/>{price}</p>
//         <button
//             className="absolute bottom-2 right-4 bg-Yellow rounded-full py-3 px-5 text-xl text-Green shadow-md hover:bg-YellowDark">
//             <BiCartAdd/></button>
//     </div