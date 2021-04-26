import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './VideoRow.css'

function VideoRow({ image, title, channel, views, timestamp, channelImage, description }) {

    return (
        <div className='videoRow' id='videoRow'>
            <img className='videoRow__thumbnail' src={image} alt=""/>
            <div className='videoRow__info'>
                <div className='videoRow__text'> 
                    <h3>{title}</h3>
                    <p>{views} views • {timestamp}</p>
                    <div className='videoRow__channelName'>
                        <Avatar className='videoRow__logo' src={channelImage}/>
                        <p>{channel}</p>
                        
                    </div>
                    <p style={{width:"90%"}}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow
