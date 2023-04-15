import {VegTag} from "./vegTag";
import {Rating} from "./rating";
import {FaRupeeSign} from "react-icons/fa";
import {useState} from "react";
import {BiMinus, BiPlus} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {setCartData} from "../redux/actions/cartDataAction";


/*
* Defining a single choices element that acts as
* both checkbox and radio button based on the
* 'isRadio' parameter
*/
const Choice = props => {
    const {isRadio, title, choice, checked} = props;
    const formattedChoice = choice.split(' ').map(word => word.toLowerCase()).join('-');
    return <div className="m-1">
        <input className="hidden peer"
               type={isRadio ? 'radio' : 'checkbox'}
               id={`${title}-${formattedChoice}`}
               name={title}
               value={choice}
               defaultChecked={isRadio && checked}
        />
        <label
            className="w-full h-full cursor-pointer bg-gray-400 hover:bg-opacity-60  bg-opacity-30 block px-5 py-2 ring-2 font-bold rounded-md transition-all duration-300 ring-transparent peer-checked:ring-green-500 peer-checked:bg-green-100"
            htmlFor={`${title}-${formattedChoice}`}>{choice}</label>
    </div>
}

/*
* A wrapper to render the Choices elements for both
* checkboxes and radio buttons
*/
const ChoicesList = (props) => {
    const {items} = props;
    return <div className="flex flex-row flex-wrap ">
        {items && items.map((el, i) => <Choice {...props} choice={Object.values(el)[0]} checked={i === 0} key={i}/>)}
    </div>
}


/* Element for Quantity chooser
*  One cannot choose beyond zero
*/
const Quantity = (props) => {
    const [quantity, setQuantity] = useState(1);

    return <div className="flex flex-row items-center font-bold ml-2">
        <button className="h-full group" disabled={quantity <= 1} onClick={e => setQuantity(quantity - 1)}><BiMinus
            className="h-full px-1 bg-opacity-90 rounded-l-md group-disabled:bg-opacity-50 bg-Orange text-2xl"/>
        </button>
        <div className="px-3 bg-gray-200 h-full flex justify-center items-center">
            <input className="w-5 bg-transparent text-center outline-none"
                   name="quantity"
                   value={quantity}
                   readOnly={true}/></div>
        <button className="h-full " onClick={e => setQuantity(quantity + 1)}>
            <BiPlus className="h-full px-1 bg-opacity-90 rounded-r-md text-2xl bg-Orange"/>
        </button>
    </div>
}

/*Element for popup that customizes the pizza
* including size, topping, and quantity*/
export const Customize = (props) => {
    const cartData = useSelector(state => state.cartDataReducer.data);
    const dispatch = useDispatch();
    const {id, description, img_url, name, price, rating, size, toppings, toggleModalState} = props;

    const onClickAdd = e => {
        const itemData = {};
        itemData.id = id;
        const form = document.forms.namedItem('customize-form');
        itemData.size = form.size.value;
        itemData.toppings = [];
        form.toppings.forEach(el => el.checked ? itemData.toppings.push(el.value) : null);
        itemData.quantity = form.quantity.value;
        dispatch(setCartData([...cartData, itemData]));
        alert('Item added to Cart!')
        toggleModalState();
    }


    return <div
        className="w-full h-full sm:h-full fixed top-0 left-0 z-20 bg-black bg-opacity-60 flex justify-center items-center overflow-auto">
        <div className="sm:w-1/2 h-full sm:h-fit bg-white rounded-lg shadow-lg sm:p-5 overflow-auto">
            <div className="w-full h-full flex sm:flex-row flex-col overflow-auto">
                <div className="h-full w-full flex flex-col">
                    <img src={img_url} alt={name} className="w-full rounded-md shadow-lg"/>
                    <div className="w-full h-full flex flex-col relative p-2">
                        <VegTag/>
                        <div className="w-full h-full flex flex-row justify-between mt-8">
                            <div className="flex flex-col justify-center">
                                <p className="font-extrabold text-lg">{name}</p>
                                <Rating rating={rating}/>
                            </div>
                            <p className="flex flex-row mt-4 ml-2 items-center text-2xl font-black"><FaRupeeSign
                                className="mr-1"/>{price}</p>
                        </div>
                        <p className="font-bold mt-5">{description}</p>
                    </div>
                </div>
                {/* Using form to collect clicked data from  User*/}
                <form className="w-full p-2 sm:p-5" name="customize-form" onSubmit={e => e.preventDefault()}>
                    <h2 className="font-extrabold text-lg">Choose Size:</h2>
                    <ChoicesList {...size[0]} title="size"/>

                    <h2 className="font-extrabold text-lg mt-4">Choose Toppings:</h2>
                    <ChoicesList {...toppings[0]} title="toppings"/>

                    <div className="mt-4 flex flex-row">
                        <span className="font-extrabold text-lg">Quantity:&nbsp;</span>
                        <Quantity/>
                    </div>

                    <div className="w-full flex flex-row justify-end font-bold mt-10 mb-5 pr-5">
                        <button
                            className="px-4 py-2 rounded-full text-Orange hover:text-Orange ring-Orange ring-2 hover:bg-Yellow  mr-4"
                            onClick={toggleModalState}
                        >Cancel
                        </button>
                        <button
                            className="px-6 ring-2 ring-Orange py-2 rounded-full text-Green bg-Orange hover:bg-Yellow hover:text-Orange"
                            onClick={onClickAdd}>Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}