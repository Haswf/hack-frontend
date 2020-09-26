import React from 'react';
import {withRouter} from "react-router"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ResumeIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';

const mainListItems = (props) => {
    return (
        <div>
            <ListItem button onClick={() => props.history.push("/usercenter")}>
                <ListItemIcon>
                    <ResumeIcon />
                </ListItemIcon>
                <ListItemText primary="Discussion history" />
            </ListItem>
        </div>
    )
}

export default withRouter(mainListItems)