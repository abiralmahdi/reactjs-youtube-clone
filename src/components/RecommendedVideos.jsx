import React from 'react'
import './RecommendedVideos.css'
import VideoCard from './VideoCard'

function RecommendedVideos() {


    return (
        <div className='recommendedVideos' id='recommendedVideos'>
            <h2>Recommended</h2>

            <div className='recommendedVideos__videos'>
                <VideoCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU" 
                            title="Learn React in 30minutes" 
                            channel="Clever Programmer" 
                            views="304K" 
                            timestamp="9 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>

                <VideoCard  image="https://i.ytimg.com/vi/SRhaP7aRMKc/maxresdefault.jpg" 
                            title="Learn Django in 30 minutes" 
                            channel="Clever Programmer" 
                            views="224K" 
                            timestamp="3 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>
                            <VideoCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU" 
                            title="Learn React in 30minutes" 
                            channel="Clever Programmer" 
                            views="304K" 
                            timestamp="9 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>

                <VideoCard  image="https://i.ytimg.com/vi/SRhaP7aRMKc/maxresdefault.jpg" 
                            title="Learn Django in 30 minutes" 
                            channel="Clever Programmer" 
                            views="224K" 
                            timestamp="3 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>
                <VideoCard  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpvR-41z8RKHxeym4hugkjg4TwgHxKmqLzng&usqp=CAU" 
                            title="Learn React in 30minutes" 
                            channel="Clever Programmer" 
                            views="304K" 
                            timestamp="9 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>

                <VideoCard  image="https://i.ytimg.com/vi/SRhaP7aRMKc/maxresdefault.jpg" 
                            title="Learn Django in 30 minutes" 
                            channel="Clever Programmer" 
                            views="224K" 
                            timestamp="3 hours ago" 
                            channelImage="https://i.pinimg.com/474x/e4/a8/cf/e4a8cf2b3534ea19918479d35ecb9cc8.jpg"/>

            </div>
        </div>
        
    )
}

export default RecommendedVideos
