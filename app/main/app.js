import React from "react";
import UserProfile from "./components/user_profile";
import TopBarNavigation from "./components/navbar";

var USER_DATA = {
    name: "Jarkko Saikkonen",
    username: "Jakewell",
    image: "http://lorempixel.com/200/200/city"
}

class MainApplication extends React.Component {
    render() {
        return (
            <div>
                <TopBarNavigation />
                <UserProfile user={USER_DATA} />
            </div>
        );
    }
}

export default MainApplication;