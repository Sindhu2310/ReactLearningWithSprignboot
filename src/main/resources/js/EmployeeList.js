import Employee from "./Employee.js";


const React=require("react");
const ReactDOM=require("react-dom");
const client=require("./client");

class EmployeeList extends React.Component{
render(){
const employees=this.props&&this.props.employees.length>0?(this.props.employees.map(employee=>

    <Employee key={employee._links.self.href} employee={employee}/>

)):<tr></tr>;


return (
    <table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Description</th>
					</tr>
					{employees}
				</tbody>
</table>
)
}
}

export default EmployeeList;