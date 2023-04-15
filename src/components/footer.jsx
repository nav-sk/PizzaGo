export const Footer = () => {
    return <footer className="flex w-full bg-Green text-Orange flex-col text-center pt-10 pb-4">
        <div className="flex w-full flex-col font-bold">
            <h1 className="font-Lobster sm:text-xl">PizzaGo</h1>
            <p>Pizza store listing website</p>
        </div>
        <div className="flex flex-col">
            <h2 className="font-bold mt-5 underline">Links</h2>
            <div className="flex flex-row justify-center">
                <p className="text-sm mr-2">Home</p>
                <p className="text-sm mr-2">About</p>
                <p className="text-sm mr-2">Login</p>
                <p className="text-sm">Cart</p>
            </div>
        </div>
        <div>
            <h2 className="font-bold mt-5 underline">Contact</h2>
            <p className="text-sm mr-2">1/32C, West Avenue, California.</p>
            <p className="text-sm mr-2">contact@pizzago.com</p>
        </div>
        <div>
            <p className="text-sm italic mt-5 font-bold">Copyrights &copy; 2023 | All rights Reserved</p>
        </div>
        <div>
            <p className="mt-5">Made with &hearts; by <a className="font-Lobster" target='_blank' href='https://github.com/nav-sk' rel="noreferrer">Naveen SK</a></p>
        </div>
    </footer>
}