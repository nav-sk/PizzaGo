import {GiPlainCircle} from "react-icons/gi";


/*Component to display tag indicating Veg or Non-veg  item*/
export const VegTag = ({isVeg}) => {
    return <span
        className={`absolute text-sm font-bold self-end text-right flex flex-row items-center px-2 rounded-full border-2 ` + (isVeg ? "bg-green-200 border-green-600" : "bg-red-200 border-red-600")}><GiPlainCircle
        className={`mr-1 text-` + (isVeg ? "green" : "red") + '-600'}/>{isVeg ? "Veg" : "Non Veg"}</span>
}
