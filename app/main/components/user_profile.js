var React = require("react");
var ProfilePic = require("./user_profile_components/profile_pic");
var ProfileName = require("./user_profile_components/profile_name");
var ProfileLink = require("./user_profile_components/profile_link");

class Profile extends React.Component {
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

module.exports = Profile;