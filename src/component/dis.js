import Button from "./Button";
import React from "react";
import {useDiscussion} from "../api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
export default function Dis() {

    const { loading, discussion, error } = useDiscussion();
    //console.log(discussion);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return(
        <div>
            {discussion.map(dis => (
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {dis.author.username}
                            {dis.message}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>

    );
}

function print() {

}