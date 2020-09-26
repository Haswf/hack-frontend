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
    state = {
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
        data: [
            {
                id: 1,
                author: "Ms. Rebecca DuBuque",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/craigelimeliah/128.jpg",
                comment:
                    "Sed voluptatem minus impedit nostrum quidem eum nam sint aut. Aut quia culpa. Ut pariatur consequatur optio aliquam in rerum amet eos corporis."
            },
            {
                id: 2,
                author: "Selmer Mayert",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/alevizio/128.jpg",
                comment: "rerum"
            },
            {
                id: 3,
                author: "Lolita Ziemann",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/operatino/128.jpg",
                comment: "eaque voluptate unde"
            },
            {
                id: 4,
                author: "Kraig Farrell",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/trueblood_33/128.jpg",
                comment: "Necessitatibus qui optio sint reiciendis.\nQui ipsam quos."
            },
            {
                id: 5,
                author: "Reuben White",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/baluli/128.jpg",
                comment: "Reprehenderit est itaque quia."
            },
            {
                id: 6,
                author: "Abigale Kovacek",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/renbyrd/128.jpg",
                comment:
                    "Occaecati ratione eligendi ut et ex nam delectus culpa libero."
            },
            {
                id: 7,
                author: "Minerva Kohler",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/renbyrd/128.jpg",
                comment: "dolorem"
            },
            {
                id: 8,
                author: "Nelda Nicolas",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg",
                comment: "commodi"
            },
            {
                id: 9,
                author: "Eula Orn",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/xiel/128.jpg",
                comment:
                    "Error repellendus rerum iusto reiciendis voluptas omnis. Suscipit nostrum atque ipsum ad nobis. Recusandae et vel laboriosam. Reiciendis non ut quasi exercitationem libero ut aut quibusdam. Et consequuntur sit vero. Deserunt fugit ut rerum at minima.\n \rConsectetur maxime praesentium beatae illo unde quo. Fuga nemo et eaque sunt ratione. Soluta natus et odit. Aspernatur illo ratione dolore deserunt et tempora excepturi doloribus. Eos ipsam expedita pariatur fuga.\n \rEum nam id. Blanditiis enim et non id dolores quod. Dignissimos saepe rerum et quas asperiores. Non aut rerum expedita ea qui qui fugit quos veniam. Veniam inventore quisquam explicabo temporibus voluptatem."
            },
            {
                id: 10,
                author: "Gisselle Gutkowski",
                title: "you will die",
                avatarURL:
                    "https://s3.amazonaws.com/uifaces/faces/twitter/nelshd/128.jpg",
                comment: "eaque temporibus aspernatur"
            }
        ]
    };

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
                <Typography>
                    {this.state.discussion.title}
                </Typography>
                <DialogBox />
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
