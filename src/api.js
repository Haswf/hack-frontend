import { useState, useEffect } from "react";
import axios from "./axios";
// TODO - update this to be your url
const BASE_URL = "https://healthnextdoortest.herokuapp.com";

/*login check used to validate the input with data from the database and let the user log in*/
export function lookup(key) {
    console.log(key);
    //const endpoint = BASE_URL + `/login`;
    /*
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    }).then(res =>{
        if(res.ok){
            //store current login status
        }
        else{
        }
    });*/
}

export function resetPassword(user) {
  const {email, password, confirmed_password, username} = user;

}
export async function loginCheck(user) {
  const {email, password} = user;
  console.log("log in");
  let response = await axios.post(
      '/auth/login/',
      null,
      {
        params: {
          email: email,
          password: password,
        }
      }
  );
  const user_data = response.data.data;
  localStorage.setItem('user', JSON.stringify(user_data));
  return user_data;
}

/*sign up check used to validate the input and let the user sign up*/
export async function signupCheck(user) {
  const {email, password, confirmed_password, username} = user;
  if (username === "") {
    alert("please input a username!");
  }
  if (email === "") {
    alert("please input a username!");
  }
  if (password === "") {
    alert("please input a password!");
  }
  if (confirmed_password === "") {
    alert("please confirm your password!");
  }

  if (password !== confirmed_password) {
    alert("password and confirmed password does not match");
  }
  console.log(email);
  console.log(password);
  console.log(confirmed_password);
  console.log(username);
  let response = await axios.post(
      '/users/',
      null,
      {params:{
        email:email,
        password: password,
        username: username,
        }}
  );
  const datacode = response.statusCode();
  console.log(datacode);
  //localStorage.setItem('user', JSON.stringify())
  /*
  const endpoint = BASE_URL + `/signup`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password,
      identity
    })
  }).then(res =>{
    if(res.ok){
      window.sessionStorage.setItem("username", username);
      if (identity==="caregiver") {
        //redirect to user page after user create an account
        //window.sessionStorage.setItem("username", username);
        //window.location.href = `user-management/${username}`;
        window.location.href = `AddCaregiver`;
      } else {
        window.location.href ="AddPatient";
      }
    }
    else{
      alert("This username has already been taken!");
      window.location.href = `SignUp/`;
    }
  });*/

}

function getUsers() {
  const endpoint = BASE_URL + `/user`;
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function useUser() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
        .then(users => {
          setUsers(users);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setError(e);
          setLoading(false);
        });
  }, []);

  return {
    loading,
    users,
    error
  };
}

//reset the user password
export function updateUser(user) {
  const { username, password} = user;
  if (!password) {
    alert("must include a password");
    return;
  }
  console.log(password);
  const endpoint = BASE_URL + `/user/${username}`;
// return fetch query
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      password
    })
  }).then(res =>{
    window.location.assign(`https://healthnextdoor.herokuapp.com/user-management/${window.sessionStorage.getItem("username")}`)

  });
}

//return all the user
export function getDiscussion() {
  const endpoint = "https://codebrew.haswf.com/api/discussions";
  return fetch(endpoint).then(res => {
    console.log(res);
    return res.json();
  });
}

export function useDiscussion() {
  const [loading, setLoading] = useState(true);
  const [discussion, setDiscussion] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDiscussion()
        .then(discussion => {
          setDiscussion(discussion.data.discussions);
          setLoading(false);
        })
        .catch(e => {
          console.log(e);
          setError(e);
          setLoading(false);
        });
  }, []);

  return {
    loading,
    discussion,
    error
  };
}

export function updateimage(url) {
  const username = window.sessionStorage.getItem("username");
  const endpoint = BASE_URL + `/findCaregiver/${username}`;
  return fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "username":username,
      "image": url

    })
  }).then(res =>{
    if(res.ok){
      window.location.assign(`https://healthnextdoor.herokuapp.com/CaregiverInformation/${username}`)
      //window.location.href = `CaregiverInformation/${username}`;
    }
  });
}