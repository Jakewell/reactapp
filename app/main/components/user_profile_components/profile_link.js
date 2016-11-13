var React = require("react");

class ProfileLink extends React.Component {
    render() {
        return (
            <div>
                <a href={"https://www.github.com/" + this.props.username}>{this.props.username}</a>
            </div>
        );
    }
}

module.exports = ProfileLink;