import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExploreIcon from '@material-ui/icons/Explore';


function Sidebar() {

    

    return (
        <div className='sidebar' id='sidebar'>
            <SidebarRow title='Home' Icon={<HomeIcon className='sidebarRow__icon'/>} />
            <SidebarRow title='Explore' Icon={<ExploreIcon className='sidebarRow__icon'/>} />
            <SidebarRow title='Trending' Icon={<WhatshotIcon className='sidebarRow__icon'/>} selected/>
            <SidebarRow title='Subscriptions' Icon={<SubscriptionsIcon className='sidebarRow__icon'/>}/>
            <hr/>
            <SidebarRow title='Library' Icon={<VideoLibraryIcon className='sidebarRow__icon'/>}/>
            <SidebarRow title='History' Icon={<HistoryIcon className='sidebarRow__icon'/>}/>
            <SidebarRow title='Your videos' Icon={<OndemandVideoIcon className='sidebarRow__icon'/>}/>
            <SidebarRow title='Watch later' Icon={<WatchLaterIcon className='sidebarRow__icon'/>}/>
            <SidebarRow title='Liked videos' Icon={<ThumbUpAltIcon className='sidebarRow__icon'/>}/>
        </div>
    )
}

export default Sidebar
