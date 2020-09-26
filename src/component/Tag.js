import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import axios from '../axios';
import ReactChip from 'react-chip'
import Autocomplete from "@material-ui/lab/Autocomplete";

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
    const [tags, setTags] = useState([]);
    const [selected, setSelected] = useState([]);
    async function getSymptoms() {
        let response = await axios.get("/symptoms/", {});
        setTags(response.data.data.symptoms)
    }

    useEffect(() => { getSymptoms() }, []);


    const handleDelete = (tag) => {
        const newSelected = selected.filter(e=>{return e!==tag._id})
        setSelected(newSelected)
        sessionStorage.setItem("tag_filter",JSON.stringify(selected))
        console.log(sessionStorage.getItem("tag_filter"))

    };

    const handleClick = (tag) => {
        const newSelected = [...selected,tag._id]
        if(!selected.includes(tag._id)) {
            setSelected(newSelected)
        }

        sessionStorage.setItem("tag_filter",JSON.stringify(selected))
        console.log(sessionStorage.getItem("tag_filter"))

    };

    let tagComponents = null;
    let current_color = "default"
    if (tags !== undefined && tags.length > 0) {
        tagComponents = tags.map(tag => {
            let enabled =selected.includes(tag._id)
            if (selected.includes(tag._id)){
                current_color = "primary"
            } else {
                current_color = "default"
            }
            return <Chip
                avatar={<Avatar>{tag.name.substring(0, 1).toUpperCase()}</Avatar>}
                label={tag.name}
                clickable
                color={enabled?"primary":"default"}
                onClick={()=>handleClick(tag)}
                onDelete={()=>handleDelete(tag)}

                deleteIcon={!enabled?<DoneIcon />:null}
            />
        })
    }

    return (
        <div className={classes.root}>
            {tagComponents}
        </div>
    );
}
