const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
            </tr>
        )
    }
}

export default Employee;