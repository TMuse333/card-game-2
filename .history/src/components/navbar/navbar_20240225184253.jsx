import './navbar.css';
// import search from '../media/search_bar.jpeg';
import { Link } from 'react-router-dom';
import react, {useState} from 'react'
import { useGameContext } from '../context';

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);


const toggleMenu = () => {
setMenuOpen(!menuOpen);
};


const [isMobile, setIsMobile] = useState(false)


const navStyle = {
height: !menuOpen ? '0' : '100px',
overflowY:'hidden',
transition:'height 0.3s ease-in',
backgroundColor: '#333',
marginTop:'-0.5rem'


}


const navStyle2 = {
position:'absolute',
right:'10%'
}


return (
<div className='nav-wrapper'>




<nav className='navbar-container'>
<div className='navbar-contents'>


<div className='desktop-menu'>
<p>How To Play</p>
<Link to='overview'>
<p>Leaderboard</p>
</Link>
<p>View Cards</p>
{/* <img src={search}
style={{
height:'25px'
}}/> */}




</div>
<p className='name'>Quantum Card Game</p>


<div className='list-search-box'
>
<div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
<div className='bar'></div>
<div className='bar'></div>
<div className='bar'></div>
</div>




{/* <img src={search} alt='Search' /> */}
</div>
</div>


<ul
style={navStyle}
className='nav-list'>
<li>Home</li>
<li>Process</li>
<li>About</li>
<li>Contact</li>
</ul>
</nav>
</div>
);
};


export default Navbar;