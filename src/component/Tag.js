import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import axios from '../axios';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
}));

export default function Chips() {
    const classes = useStyles();
    const [tags, setTags] = useState();

    useEffect(async () => {
        let response = await axios.get("/symptoms/", {});
        setTags(response.data.data.symptoms)
    }, [])


    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    let tagComponents = null;
    if (tags !== undefined && tags.length > 0) {
        tagComponents = tags.map(tag => {
            return <Chip
                avatar={<Avatar>{tag.name.substring(0, 1).toUpperCase()}</Avatar>}
                label={tag.name}
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
        })
    }

    return (
        <div className={classes.root}>
            {tagComponents}
        </div>
    );
}
