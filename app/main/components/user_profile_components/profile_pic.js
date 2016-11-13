var React = require("react");

class ProfilePic extends React.Component {
    render() {
        return <img src={this.props.imageURL} />;
    }
}

module.exports = ProfilePic;