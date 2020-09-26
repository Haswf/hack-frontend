import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple ,lightBlue} from '@material-ui/core/colors';


export default function LetterAvatars(user) {

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        color: {
            color: theme.palette.getContrastText(stringToColor(user)),
            backgroundColor: stringToColor(user),
        }

    }));
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar className={classes.color}>{user[0]}</Avatar>
        </div>
    );
}
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

stringToColor('Material-UI') // "#da90b2"
// "#5fe9b2"
