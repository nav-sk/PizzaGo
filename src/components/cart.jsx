import {BiLeftArrowAlt} from "react-icons/bi";
import {useDispatch, useSelector} from "react-redux";
import {BsCartX, BsCheckLg, BsCircleFill} from "react-icons/bs";
import {Link} from "react-router-dom";
import {FaRupeeSign} from "react-icons/fa";
import {setCartData} from "../redux/actions/cartDataAction";


/*Element to display when cart is empty*/
const NoItemsCart = props => {
    return <div className="flex flex-col items-center font-bold text-center">
        <BsCartX className="text-4xl mb-5"/>
        <p className="text-xl">No items found in cart.<br/> Don't you add some from the menu?</p>
        <Link to="/">
            <button className="px-4 py-2 bg-Orange rounded-full shadow-md text-lg mt-5">Take me!</button>
        </Link>
    </div>
}

/*Element for each item in the cart*/
const CartItem = (props) => {
    console.log(props)
    const {data} = props;
    return <div className="my-2">
        <div className="w-full h-full flex flex-row border-2 rounded-lg p-2 flex-wrap sm:flex-nowrap">
            <img src={data.img_url} className="w-28 object-contain sm:w-36 rounded-md "/>
            <div className="flex flex-col px-2 text-md sm:text-base order-3 sm:order-2 mt-2 sm:mt-0">
                <div className="flex flex-row items-center">
                    <h2 className="font-extrabold">{data.name}</h2>
                    <BsCircleFill className="text-sm p-1 mx-1"/>
                    <span className="text-sm font-bold italic">{data.isVeg ? "Veg" : "Non Veg"}</span>
                </div>
                <p className="font-bold italic"><span
                    className="font-extrabold not-italic">Size:&nbsp;</span>{props.size}</p>
                <p className="font-bold italic"><span
                    className="font-extrabold not-italic">Toppings:&nbsp;</span>{props.toppings.join(', ')}</p>
                <p className="font-bold italic"><span
                    className="font-extrabold not-italic">Quantity:&nbsp;</span>{props.quantity}</p>
            </div>
            <div className="flex-grow-1 order-2 sm:order-3 flex-shrink-0 flex flex-col justify-center flex-1 pr-5">
                <p className="text-right font-black text-2xl sm:text-3xl flex items-center justify-end"><FaRupeeSign
                    className="mr-2"/>{props.quantity * data.price}</p>
                <p className="flex justify-end text-sm italic font-bold text-gray-500">{props.quantity}&nbsp;x&nbsp;{data.price}</p>
            </div>

        </div>
    </div>
}

/*A wrapper for listing the elements in the cart*/
const ItemsList = ({data}) => {
    const apiData = useSelector(state => state.apiDataReducer.data);
    const dispatch = useDispatch();

    let total = 0;
    for (let item of data) {
        total += item.quantity * apiData[item.id - 1].price;
    }

    const onCheckoutClick = props => {
        alert("Items Checked out Successfully!");
        dispatch(setCartData([]));
    }

    return <div className="w-full flex flex-col ">
        {data && data.map((el, i) => <CartItem key={i} {...el} data={apiData[el.id - 1]}/>)}
        <div className="w-full h-0.5 bg-gray-300 rounded-full mt-6 mb-4 "/>
        <div className="flex flex-row font-extrabold justify-end items-center text-2xl sm:text-3xl mr-5">
            <span className="italic">Total:&nbsp;</span>
            <span className="flex flex-row items-center"><FaRupeeSign/>{total}</span>
        </div>
        <button
            className="text-lg font-bold flex flex-row items-center mb-5 self-end mt-10 mr-5 py-2 shadow-md hover:shadow-lg transition-all duration-300 px-4 bg-Orange rounded-full"
            onClick={onCheckoutClick}
        >
            <BsCheckLg className="mr-2"/>Checkout
        </button>
    </div>
}

/*Root cart element*/
export const Cart = (props) => {
    const cartData = useSelector(state => state.cartDataReducer.data);

    return <div className="w-full flex flex-col items-center">
        <header className="h-16 w-full bg-Green">
            <div className="w-full h-full items-center px-5 flex flex-row">
                <Link to="/" className="flex flex-row items-center font-bold text-Orange"><BiLeftArrowAlt
                    className="text-2xl"/>&nbsp;Home</Link>
            </div>
        </header>
        <div className="sm:w-1/2 px-2 w-full sm:p-0 flex flex-col mb-10">
            <h1 className="text-5xl font-black text-Green p-5 text-center">Cart</h1>
            <div className="w-full bg-white rounded-lg shadow-lg sm:p-5 p-2 pt-5 sm:mt-10">
                {cartData.length === 0 ? <NoItemsCart/> : <ItemsList data={cartData}/>}
            </div>
        </div>
    </div>
}