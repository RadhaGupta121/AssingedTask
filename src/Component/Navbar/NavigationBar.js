import './nav.css'
const NavigationBar=()=>{
    return(
        <>
       <div className="nav-container bg-black">
        <ul className="nav-list flex flex-wrap justify-center text-white gap-20 text-xl  py-3">
            <li>Home</li>
            <li>Deals</li>
            <li>Coupon</li>
            <li>Stores</li>
            <li>Contact us</li>
        </ul>
       </div>
        
        </>
    )
}
export default NavigationBar;