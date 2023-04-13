

const ItemCard = (props) =>{
    return <div className="w-full bg-white rounded-xl shadow-lg aspect-square">

    </div>
}
export const Menu = (props) => {
  return <div className="w-full flex justify-center ">
      <div className="w-full px-5 sm:w-3/4 flex grid sm:grid-cols-3 sm:gap-10 gap-5">
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
      </div>
  </div>
}