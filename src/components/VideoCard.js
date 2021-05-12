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
                    <p className="videoCard__infoTitle">{title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__numOfViews">{numOfViews}</p>
                    <p className="videoCard__postedDate">{postedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
