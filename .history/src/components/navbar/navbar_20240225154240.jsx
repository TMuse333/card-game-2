import React, { useState,useEffect } from "react";
import './navbar3.css';
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';
import { ChevronDown } from 'react-feather';

const SubMenu = ({isHovered,mouseEnter,mouseLeave,
    resourceIndex}) => {

        const [itemHovered, setItemHovered] = useState(null)

        const handleMouseEnter = (index) => {
            setItemHovered(index)
        }

        const handleMouseLeave = () => {
            setItemHovered(null)
        }

    const serviceMenuData = [
        {
            name:'Web dev',
            description:`We make banging websites 
            with the most fire animations
            you'll see while still having your content
            be the main focus`
        },
        {
            name:'Copywriting',
            description:`The way of the samurai is the true way
            We use the art of persuasion from an extensive
            background in english to get you more sales`
        },
        {
            name:'Graphic Design',
            description:`If you need some visual sauce we got you
            too, we have a visual prowess like the Uchiha clan`
        },
        {
            name:'Quantum endeavours',
            description:'We will go to the quantum realm and get it done.'
        }
    ]

    

    const resourcesMenuData = [
        {
            name:'Focus Tactics',
            description:`We live in a world where the ability the focus is becoming 
            more valuable at the same time where it is becoming more rare.
            Learn how to hone your focus to surpass the competition and
            become a winner.`
        },
        {
            name:'The Quantum Realm',
            description:`The Quantum Realm is a place where every possibility exists.
            You can experience anything you want in the Quantum Realm
            before making it a reality. Learn how to use this power to its
            fullest ability to live the life you dream.
            `
        },
        {
            name:'The Way of the Samurai',
            description:`With so many distractions and impurity in todays
            it is essential that you don't fall off the path
            mastering your craft. Learn the ways of the Samurai to become your strongest
            self and obtain self-mastery.`
        },
        {
            name:'Health Tactics',
            description:`The journey of mastery is long and challenging,
            It is essential you have high energy and maintain strong 
            physical health to sustain years and years of hard work everyday.
            Learn these health tactics to improve every area of your life.
            `
        }
    ]

    const resourcesList = [
        serviceMenuData,
        resourcesMenuData

    ]

    const style ={
        opacity: isHovered ? 1 : 0
    }

    const boxStyle = (index) => {
        const selected = index === itemHovered;
      
        return {
          border: selected ? '2px solid white' : null,
          boxShadow: selected ? '0 0 10px rgba(255, 255, 255, 0.7)' : null,
        };
      };
      



    return (
        <section 
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        style={style}
         className="submenu-container">

           {resourcesList[resourceIndex ?? 1].map((item,index) => (
            <div className="submenu-box"
            style={boxStyle(index)}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            key={index}>
                <h2>
                    {item.name}
                </h2>
                <div className="submenu-line">

                </div>
                <p>{item.description}</p>
            </div>
           ))}

        </section>
    )
}

const SmallSubMenu = ({isHovered,mouseEnter,mouseLeave}) => {

const style = {
    opacity: isHovered ? 1 : 0,
    zIndex: isHovered ? 999 : 0
}

    return (
        <section className="small-sub-container"
        style={style}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
            <ul>
                <li className="small-li">
                    Our Process
                </li>
                <li className="small-li">
                    Our mission
                </li>
                <li className="small-li"> 
                    The team
                </li>
            </ul>
        </section>
    )

}



const Navbar3 = () => {
  const [navButtonClicked, setNavButtonClicked] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 865);
  const [isHovered, setIsHovered] = useState(null);

  const [returnClicked, setReturnCLicked] = useState(false)

  const [listHovered, setListHovered] = useState(null);


  const [subHovered, setSubHovered] = useState(false)





  const handleListEnter = (index) => {
    setListHovered(index)
    handleSubEnter()
    console.log('mouse entered on the list')
    console.log('index',index)
  }

  const handleListLeave = () => {
  
  }

  const subMenuReturn = () => {
    setReturnCLicked(true);
   
  };
  



  const handleNavClick = () => {
    setNavButtonClicked(!navButtonClicked);
    setActiveMenuItem(null); // Reset active menu item when clicking on the main nav button
  };


  useEffect(()=> {
    const handleResize = () => {
        setIsDesktop(window.innerWidth >= 1000)
        if(isDesktop){
            setActiveMenuItem(null)
            setNavButtonClicked(false)
        }
    }

    window.addEventListener('resize',handleResize)

    return () => {
        window.removeEventListener('resize',handleResize)
    }
},[])

useEffect(() => {
    if (returnClicked) {
      setActiveMenuItem(null);
      setReturnCLicked(false);
      console.log('set return', returnClicked);
    }
  }, [returnClicked]);

  const handleMenuItemClick = (index) => {

    setActiveMenuItem(index);
  };


  const [listEntered, setListEntered] = useState(false)

  const [resourceIndex, setResourceIndex] = useState(null)

  const handleListEntry = (index) => {

    setResourceIndex(index)
  
    setListEntered(true)
    setSubHovered(true)

  }

  const handleSubEnter = (index) => {
   if(listEntered){

 setResourceIndex(index)

    setSubHovered(true)
}


}

const handleSubLeave = () => {
 
    setListEntered(false)
    setSubHovered(false)
  }





  const listStyle = (index) =>{
    const selected = index === listHovered

    return {
        color: selected ? 'rgb(185, 185, 185)' : 'white',
    
    }
  }



  const navStyle = {
    right: navButtonClicked ? '0%' : '-200%',
    transition: 'right 0.8s ease-in',
    paddingTop: '4rem',
    paddingLeft: '2rem',
  };

  const secondaryNavStyle =  {
   
        right: 
         activeMenuItem !== null 
         ? '0' : '-150%',
        transition: 'right 0.3s ease-in',
        top:0

  }



  const subList = (
    <>
    <ul className="secondary-nav"
        style={secondaryNavStyle}>
    <button className="sub-button"
    onClick={()=>subMenuReturn()}
    >
        Back
        </button>

{activeMenuItem === 0 ? (
    <>
    <li>Web Dev</li>
    <li>Copywriting</li>
    <li>Quantum Realm</li>
    </>
) : activeMenuItem === 1 ? (
    <>
    <li>Our mission</li>
    <li>About us</li>
    <li>The Way of The samurai</li>
    </>
) : null
}

    


        </ul>
    </>
  )

  const [smallSubHovered, setSmallSubHovered] = useState(false)
  const [smallListEntered, setSmallListEntered] = useState(false)

  const handleSmallSubEnter = () => {
    setSmallListEntered(true)
    setSmallSubHovered(true)
  }

  const handleSmallSubMenuEntry = () => {

        setSmallSubHovered(true)
  }

  const handleSmallSubLeave = () => {
    setSmallSubHovered(false)
  }



  const mainNavStyle = {
    opacity: activeMenuItem !== null ? 0 : 1,
    transition: 'opacity 0.3s ease-in'
  }

  return (
    <nav className="nav3-container">

        {isDesktop ? (
          <>
          <div className="desktop-wrapper">

          <Link to='/'>
        <p className="company-name">Company name</p>
      </Link>

          <ul className="nav3-desktop-menu">

              <li 
            onMouseEnter={()=>handleListEntry(0)}
            onMouseLeave={()=>handleSubLeave()}
            style={{
                transform:'translateY(-0.4rem)'
            }}
           
              >
                Services <ChevronDown
                 style={{
                    transform:'translateY(0.5rem) scale(0.75)'
                }}
                />
                         
              </li>

              <Link to='/parallax'>

            

              <li
        
            onMouseEnter={()=>handleSmallSubEnter()}
            onMouseLeave={()=>handleSmallSubLeave()}
              >
               
                About
               
              </li>
              </Link>

                <li
                onMouseEnter={()=>handleListEntry(1)}
                onMouseLeave={()=>handleSubLeave()}
                style={{
                    transform:'translateY(-0.4rem)'
                }}
                >
                    Resources<ChevronDown
                    style={{
                        transform:'translateY(0.5rem) scale(0.75)'
                    }}
                
                />
                </li>

                <li>
                    Contact
                </li>

                </ul>


                </div>
                <SmallSubMenu
                isHovered={smallSubHovered}
                mouseEnter={()=>handleSmallSubMenuEntry()}
                mouseLeave={()=>handleSmallSubLeave()}
                />
                <SubMenu
                mouseEnter={()=>handleSubEnter(resourceIndex)}
                isHovered={subHovered}
                mouseLeave={()=>handleSubLeave()}
                resourceIndex={resourceIndex}
                />
          </>
        ) : (
          <>

    <Link to='/'>
        <p className="company-name">Company name</p>
      </Link>

      <div className="nav3-logo" onClick={() => handleNavClick()}>
        <div className="nav-line"/>
        <div className="nav-line"/>
        <div className="nav-line"/>
        </div>

    <ul className="nav3-contents" style={!isDesktop ? navStyle : null}>
        <p className="x-button" onClick={() => handleNavClick()}>X</p>

   
    <div className="main-nav"
    style={mainNavStyle}>
      
            <ul>
                <li 
                    onMouseEnter={() => handleListEnter(0)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(0)}
                    onClick={() => handleMenuItemClick(0)}
                >
                    Services
                </li>
                <Link to='/parallax'>

             
                <li 
                    onMouseEnter={() => handleListEnter(1)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(1)}
                    onClick={() => handleMenuItemClick(1)}
                >
                    About 
                </li>
                </Link>
                <li 
                    onMouseEnter={() => handleListEnter(2)}
                    onMouseLeave={() => handleListLeave()}
                    style={listStyle(2)}
                    onClick={() => handleMenuItemClick(2)}
                >
                    Contact
                </li>
            </ul>
        
    </div>

            {subList}
            </ul>

          </>
    
     
      )}
    </nav>
  );
  
};

export default Navbar3;