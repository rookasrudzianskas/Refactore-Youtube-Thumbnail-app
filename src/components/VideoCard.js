import React, {useState} from 'react';
import "./styles/VideoCard.css";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



const VideoCard = ({ thumbnailUrl, isCustom, channelImageUrl, title, channelName, numOfViews, postedDate }) => {

    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    // console.log(input);
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = (e) => {
        // save url logic here
        e.preventDefault();
        setImageUrl(input);
        setOpen(false);
        console.log(imageUrl);
    };


    return (
        <div className="videoCard">

            {/* MODAL +++++++++++++++=*/}
            <Modal
                open={open} onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <form action="">
                        {/* what we type is going to be saved in the input state. but then we click*/}
                        {/* submit, we have that url to the image  state*/}
                        <TextField value={input} onChange={e => setInput(e.target.value)}/>
                        <Button type="submit" onClick={handleClose}>Set Image URL</Button>
                    </form>

                </div>
            </Modal>

            {/* Defining if car is custom or not*/}
            {isCustom && !imageUrl ? (
                <button onClick={e => setOpen(true)}>Select thumbnail</button>
            ) : (
                <img  className="videoCard__thumbnail" src={imageUrl}/>
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
