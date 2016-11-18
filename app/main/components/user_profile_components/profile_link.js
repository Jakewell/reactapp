import React from "react";

class ProfileLink extends React.Component {
    render() {
        return (
            <div>
                <a href={"https://www.github.com/" + this.props.username}>{this.props.username}</a>
            </div>
        );
    }
}

export default ProfileLink;