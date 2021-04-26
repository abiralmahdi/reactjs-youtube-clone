import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className='searchPage' id='searchPage'>
            <div className='searchPage__filter'>
                <TuneOutlinedIcon/>
                <h2>FILTERS</h2>
                
            </div>
            <hr/>
            <ChannelRow
            image="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
            channel="Clever Programmmer"
            verified
            subs="949k"
            noOfVideos={452}
            description="You can find awesome videos on programming and software developmen here in this channel. We love to make contents as per your requirements and programming skills."
            />
            <VideoRow
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU"
            title="Learn React native in 60 mins"
            channel="Clever Programmmer"
            views ="45k"
            timestamp="6 hours ago"
            channelImage="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
            description="You can find awesome videos on programming and software developmen here in this channel. We love to make contents as per your requirements and programming skills."
            />
            <VideoRow
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU"
            title="Learn React native in 60 mins"
            channel="Clever Programmmer"
            views ="45k"
            timestamp="6 hours ago"
            channelImage="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
            description="You can find awesome videos on programming and software developmen here in this channel. We love to make contents as per your requirements and programming skills."
            />
            <VideoRow
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU"
            title="Learn React native in 60 mins"
            channel="Clever Programmmer"
            views ="45k"
            timestamp="6 hours ago"
            channelImage="https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png"
            description="You can find awesome videos on programming and software developmen here in this channel. We love to make contents as per your requirements and programming skills."
            />

        </div>
        
    )
}

export default SearchPage
