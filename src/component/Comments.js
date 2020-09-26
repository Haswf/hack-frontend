import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LikeIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/ModeComment";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import axios from "../axios";
import {Dialog} from "@material-ui/core";
import DialogBox from "./DialogBox";


const styles = theme => ({
    root: {
        width: "100%",
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
        marginLeft: 100
    },
    grid: {
        marginLeft: 20
    }
});

const LaSoText = ({ text }) => {
    let arr = text.split("-");
    return (
        <span>
      {arr.map((cc, i) => (
          <React.Fragment>
              <code
                  key={i}
                  style={{
                      margin: "0 0.2em",
                      padding: ".2em",
                      background: " rgba(0,0,0,0.06)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      borderRadius: "2px",
                      fontSize: "110%",
                      color: "#000"
                  }}
              >
                  {cc}
              </code>
              {i === arr.length - 1 ? "" : " "}
          </React.Fragment>
      ))}
    </span>
    );
};

const TopicThumb = ({ reply }) => {
    const handleTextEllipsis = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };
    return (
        <Grid container style={{ marginLeft: 10 }}>
            <Grid item xs={12} style={{ marginLeft: -5 }}>
                <Typography>
                    <LaSoText text={reply.user.username} />
                </Typography>
            </Grid>
            <Grid item xs={12} style={{ marginTop: 6 }}>
                <Typography variant="caption">
                    {"@" + reply.user["_id"] + " - " + new Date().toLocaleDateString()}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography>{handleTextEllipsis(reply.message, 70)}</Typography>
            </Grid>
            <Grid item xs={12} style={{ marginLeft: -10, marginTop: -12 }}>
                <IconButton component="span">
                    <LikeIcon style={{ fontSize: "20px" }} color="primary" />
                    <span
                        style={{
                            fontSize: "1rem",
                            marginLeft: 5,
                            paddingTop: 5
                        }}
                    >
            13
          </span>
                </IconButton>
                <IconButton component="span">
                    <CommentIcon style={{ fontSize: "20px", marginTop: 3 }} />
                    <span
                        style={{
                            fontSize: "1rem",
                            marginLeft: 5,
                            paddingTop: 5
                        }}
                    >
            56
          </span>
                </IconButton>
            </Grid>
        </Grid>
    );
};

class AlignItemsList extends React.Component {
    constructor() {
        super();
        this.state = {
                id: null,
                discussion: {
                    title: null,
                    replies: [
                        {
                            _id: "5f6f2e15af31dacb93316691",
                            user: {
                                _id: "5f6f2df5af31dacb93316689",
                                username: "haswf"
                            },
                            message: "hello",
                            parentId: null,
                            discussionId: "5f6f2e15af31dacb93316692",
                            createdAt: "2020-09-26T12:03:33.847Z",
                            updatedAt: "2020-09-26T12:03:33.847Z"
                        }
                    ]
                },
            }

    }
    async componentDidMount() {
        let response = await axios.get(`/discussions/${this.props.match.params.id}`);
        this.setState({discussion: response.data.data})
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper >
                                <p></p>
                                <p></p>
                                <p></p>
                            </Paper>

                        </Grid>
                        {/* Recent Deposits */}

                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                    <Box pt={4} >

                    </Box>
                </Container>
                <Typography variant="h3">
                    {this.state.discussion.title}
                </Typography>
                <DialogBox discussionId={this.state.discussion["_id"]} parentId={this.state.discussion.replies[0]._id}/>
                <List className={classes.root}>
                    {this.state.discussion.replies.map(reply => {
                            return <ListItem alignItems="flex-start" key={reply.id}>
                                <ListItemAvatar>
                                    <Avatar > {reply.user.username.substring(0,1).toUpperCase()} </Avatar>
                                </ListItemAvatar>
                                <TopicThumb reply={reply}/>
                            </ListItem>
                        }
                    )}
                </List>
            </div>
        );
    }
}

AlignItemsList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AlignItemsList);
