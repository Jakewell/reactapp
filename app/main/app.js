import React from "react";
import UserProfile from "./components/user_profile";

var USER_DATA = {
    name: "Jarkko Saikkonen",
    username: "Jakewell",
    image: "http://lorempixel.com/200/200/city"
}

class MainApplication extends React.Component {
    render() {
        return (
            <UserProfile user={USER_DATA} />
        );
    }
}

export default MainApplication;