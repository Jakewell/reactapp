var React = require("react");

class ProfileName extends React.Component {
    render() {
        return <div>{this.props.name}</div>;
    }
}

module.exports = ProfileName;