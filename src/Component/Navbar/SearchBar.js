import logo from '../../img/logo.png'
import './nav.css'
const SearchBar = () => {
    return (
        <>
            <div className='searchbar p-4 mt-0'>
                <div className="container max-w-[1240px] mt-[0px] items-center  flex flex-wrap justify-evenly  mx-auto px-2 bg-whitesomoke-200">
                    <div className='img-container mb-2 mt-0'>
                        <img src={logo} alt='not found' />
                    </div>
                    <ul className='flex flex-wrap gap-4 '>
                        <li className='input-box-li' >  <input type='search' placeholder='Enter you product'  className="max-w-[20rem] h-12  w-96  border-grey-600 border-2 rounded-3"  />
                        </li>
                        <li>
                            
                            <button className='login-btn bg-red-500 text-white p-3 rounded-3  '>Login/Signout</button>
                        </li>
                    </ul>



                </div>

            </div>
        </>
    )
}
export default SearchBar;



