const React = require("react");
const ReactDOM = require("react-dom");
const client = require("./client");

class Employee extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}

export default Employee;