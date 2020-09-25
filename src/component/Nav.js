import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Nav() {
    if(window.sessionStorage.getItem("username")){
        return (
            <div className={"whole_nav"}>
                <div id={"logo_part"}>
                </div>
                <div id={"nav_part"}>
                <nav id="head">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </nav>
                </div>

            </div>

        );
    }
    return (
        <div className={"whole_nav"}>
            <div id={"logo_part"}>

            </div>
            <div id={"nav_part"}>
            <nav id="head">
                <NavLink exact to="/">
                    Home
                </NavLink>

            </nav>
            </div>
        </div>

    );
}

function showUser(){
    var username = window.sessionStorage.getItem("username");

    if(username){
        return(
            window.location.assign(`https://healthnextdoor.herokuapp.com/user-management/${window.sessionStorage.getItem("username")}`)
        );
    }
}
/*
function showUser(){
    var username = window.sessionStorage.getItem("username");

    if(username){
        return(
            window.location.href = `user-management/${window.sessionStorage.getItem("username")}`
        );
    }
}*/
function toList(){
    window.location.assign(`https://healthnextdoor.herokuapp.com/toList/${window.sessionStorage.getItem("username")}`);
}