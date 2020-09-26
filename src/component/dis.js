import Button from "./Button";
import React from "react";
import {useDiscussion} from "../api";
export default function Dis() {

    const { loading, discussion, error } = useDiscussion();
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong: {error.message}</p>;
    }

    return(
        <div>
            {discussion.map(dis => (
                <div>{dis}</div>
            ))}
        </div>

    );
}

function print() {

}