import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ResumeIcon from '@material-ui/icons/AccountBox';
import PortfolioIcon from '@material-ui/icons/Collections';
import BookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import LogoutButton from "../component/LogoutButton";
//import UpdateProfileButton from "../Button/UpdateProfileButton";
//import LogoutButton from "../Button/LogoutButton";
//import { useAuth0} from "@auth0/auth0-react";



export const mainListItems = (
    <div>
        <ListItem button onClick={() => toResume()}>
            <ListItemIcon>
                <ResumeIcon />
            </ListItemIcon>
            <ListItemText primary="Discussion history" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset></ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <BookmarkIcon />
            </ListItemIcon>
            <ListItemText primary="Reset Password" />
        </ListItem>
        <LogoutButton/>
    </div>
);

/*export const thirdListItems = (
   "1"
);*/


function toPortfolioCollections(){
    window.location.assign(`http://localhost:3000/portfoliocollections`);
}

function toResume(){
    window.location.assign(`http://localhost:3000/resume`);
}

function toUserInformation(){
    window.location.assign(`http://localhost:3000/usercenter`);
}

export function toReset() {
    window.location.assign("https://localhost:3000/resetPassword")
}
/*to the list page*/