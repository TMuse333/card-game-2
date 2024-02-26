import './navbar.css';
// import search from '../media/search_bar.jpeg';
import { Link } from 'react-router-dom';
import react, {useEffect, useState} from 'react'
import { useGameContext } from '../context';

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const {setViewCardsClicked,
    setViewRules,
    setLeaderboardSelected,
leaderboardSelected,
} = useGameContext()



const toggleMenu = () => {
setMenuOpen(!menuOpen);
};


const [isMobile, setIsMobile] = useState(window.innerWidth <= 864)

useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 864);
    };
  
    // Initial check
    handleResize();
  
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


const navStyle = {
height: !menuOpen || leaderboardSelected || viewR? '0' : '100px',
overflowY:'hidden',
transition:'height 0.3s ease-in',
backgroundColor: 'rgb(84, 0, 168)',
marginTop:'-0.5rem'


}


const navStyle2 = {
position:'absolute',
right:'10%'
}

const leaderboardClick = () => {
    setLeaderboardSelected(true)
}

const handleCardClick = () => {
    setViewCardsClicked(true)
}

const handleRulesClick = () => {
    setViewRules(true)
}


return (
<div className='nav-wrapper'>




<nav className='navbar-container'>
<div className='navbar-contents'>


<div className='desktop-menu'>
<p>How To Play</p>

<p>Leaderboard</p>

<p>View Cards</p>
{/* <img src={search}
style={{
height:'25px'
}}/> */}




</div>
<p className='name'>Quantum Card Game</p>

{isMobile && (


<div className='list-search-box'
>
<div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
<div className='bar'></div>
<div className='bar'></div>
<div className='bar'></div>
</div>






</div>
)}
</div>


{isMobile && (
    <>
   
    <ul
style={navStyle}
className='nav-list'>
<li onClick={handleRulesClick}>How to Play</li>
<li onClick={handleCardClick}>View Cards</li>
<li onClick={leaderboardClick}>Leaderboard</li>

</ul>
</>
)}

</nav>
</div>
);
};


export default Navbar;