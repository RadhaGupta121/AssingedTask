import logo from './logo.svg';
import './App.css';
import SerachBar from './Component/Navbar/SearchBar';
import NavigationBar from './Component/Navbar/NavigationBar';
import Home from './Component/Home/Home';
import DealsOfTheDay from './Component/Deals/DealsOfTheDay';
import CoupenByCategories from './Component/Coupon/CoupounByCategories';
import PopualarMembership from './Component/Membership/PopualarMembership';
import Subscription from './Component/Subscription/Subsciption';
import Working from './Component/Working/Working';
import BecomePartOfTeams from './Component/App_Banner/Become_PartOfTeam';
import Categories from './Component/Categories/Categories';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <>
 <SerachBar/>
 <NavigationBar/>
 <Home/>
 <DealsOfTheDay/>
 <CoupenByCategories/>
 <PopualarMembership/>
 <Subscription/>
 <Working/>
 <BecomePartOfTeams/>
 <Categories/>
 <Footer/>
 </>
  );
}

export default App;
