import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Header(props) {
    
    function openHiddenSearchBar(){
        let bar = document.getElementById('searchBarHidden')
        if (bar.style.display === 'flex'){
            bar.style.display = 'none'
            bar.style.transition = '0.5s'
        }
        else{
            bar.style.display = 'flex'
            bar.style.transition = '0.5s'
        }
    }


    const [inputSearch, setInputSearch] = useState("");

    
    return (
        <div className='header'>
            <div className='header__left'>
                <MenuIcon onClick={props.hideFunction} style={{cursor:'pointer'}}/>
                <Link to='/'>
                    <img 
                        className='header__logo'
                        alt='YouTube Logo'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png'
                    />
                </Link>
            </div>
            <div className='header__input'>
                <input placeholder='Search' value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>

            <div className='searchBarHidden' id='searchBarHidden'>
                <input placeholder='Search' value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>
            
            <div className='header__icons'>
                <SearchIcon className='header__inputButtonForMobile' onClick={openHiddenSearchBar}/>
                <VideoCallIcon className='header__icon'/>
                <AppsIcon className='header__icon'/>
                <NotificationsIcon className='header__icon'/>
                <AccountCircleIcon className='header__icon'/>
            </div>

        </div>
    )
}

export default Header
