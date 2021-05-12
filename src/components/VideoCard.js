import React, {useState} from 'react';
import "./styles/VideoCard.css";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";


const VideoCard = ({ thumbnailUrl, isCustom, channelImageUrl, title, channelName, numOfViews, postedDate }) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        // save url logic here
        setOpen(false);
    }


    return (
        <div className="videoCard">
            <Modal
                open={open} onClose={handleClose}>
                <TextField />
            </Modal>
            {isCustom ? (
                <button onClick={e => setOpen(true)}>Upload thumbnail</button>
            ) : (
                <img  className="videoCard" src=""/>
            )}
            <img className="videoCard__thumbnail" src={thumbnailUrl} alt=""/>

            <div className="videoCard__info">
                <div className="videoCard__channelImageContainer">
                    <img src={channelImageUrl} alt=""/>
                </div>

                <div className="videoCard__infoText">
                    <p className="videoCard__title">{title}</p>
                    <p className="videoCard__channelName">{channelName}</p>
                    <p className="videoCard__numOfViewsAndPostDate">{numOfViews} • {postedDate}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
