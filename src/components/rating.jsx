import {ImStarFull, ImStarHalf} from "react-icons/im";


/*Component to display star rating of a item*/
export const Rating = ({rating}) => {
    const full = Math.floor(rating);
    const half = rating - full !== 0;
    const stars = [];
    for (let i = 0; i < full; i++) {
        stars.push(<ImStarFull className="text-Yellow mr-1 drop-shadow-md" key={i}/>);
    }
    if (half) stars.push(<ImStarHalf className="text-Yellow drop-shadow-md" key={full}/>)
    return <div className="ml-2 flex flex-row">
        {stars}
    </div>
}