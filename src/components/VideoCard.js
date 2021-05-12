import React from 'react';
import "./styles/VideoCard.css";

const VideoCard = ({ thumbnailUrl, channelImageUrl, title, channelName, numOfViews, postedDate }) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={thumbnailUrl} alt=""/>

            <div className="videoCard__info">
                <div className="videoCard__channelImageContainer">
                    <img src={channelImageUrl} alt=""/>
                </div>

                <div className="videoCard__infoText">
                    <p>{title}</p>
                    <p>{channelName}</p>
                    <p>{numOfViews}</p>
                    <p>{postedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
