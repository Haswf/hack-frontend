import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import {makeStyles} from "@material-ui/core/styles";
import axios from "../axios"
import { useSnackbar } from 'notistack';
import { withRouter } from "react-router";


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    fab: {
        margin: theme.spacing.unit * 2,
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing.unit * 5,
        right: theme.spacing.unit * 5,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));


const FormDialog = (props) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [content, setContent] = React.useState("");

    const submitComment = async () => {
        try {
            axios.post("/replies/", {
                message: content,
                parentId: props.parentId,
                discussionId : props.discussionId
            }, {
                headers: {
                    Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")).replace(/['"]+/g, '')
                }
            })
            enqueueSnackbar("Comment submitted" , {
                variant: 'success'
            });
        } catch (e) {
            enqueueSnackbar("Submit failed: "+e.message , {
                variant: 'error'
            });
        }

    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip Button title="Add Comments" aria-label="Add Comments" onClick={handleClickOpen}>
                <Fab color="secondary" className={classes.absolute}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Comment</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Share your wisdom and professional knowledge to help our patients!
                    </DialogContentText>
                    <textarea
                        rows = "5"
                        cols = "60"
                        id="review"
                        onChange={(e => setContent(e.target.value))} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>{
                        submitComment()
                        handleClose()
                    }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default withRouter(FormDialog);
