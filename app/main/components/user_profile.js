import React from "react";
import ProfilePic from "./user_profile_components/profile_pic";
import ProfileName from "./user_profile_components/profile_name";
import ProfileLink from "./user_profile_components/profile_link";

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <ProfilePic imageURL={this.props.user.image} />
                <ProfileName name={this.props.user.name} />
                <ProfileLink username={this.props.user.username} />
            </div>
        );
    }
}

export default UserProfile;