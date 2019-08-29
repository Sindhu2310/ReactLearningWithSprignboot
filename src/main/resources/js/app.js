import EmployeeList from "./EmployeeList.js";

const React=require("react");
const ReactDOM=require("react-dom");
const client=require("./client");

class App extends React.Component{
    constructor(props){
       super(props);
       this.state={employees:[]};
    }
    componentDidMount(){
      client({method: 'GET', path: '/api/employees'}).done(response => {
			this.setState({employees: response.entity._embedded.employees});
		});
    }
    render(){
        return(
            <EmployeeList employees={this.state.employees}/>
        )
    }
   /** render(){
        return (
           <div> <b> Welcome to first react App using Spring boot </b></div>
        )
    }**/
}
ReactDOM.render(
	<App />,
	document.getElementById('react')
)