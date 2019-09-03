import Employee from "./Employee.js";

const React=require("react");
const ReactDOM=require("react-dom");
const client=require("./client");

class App extends React.Component{
    constructor(props){
       super(props);
       this.state={employees:[]};
    }
    componentDidMount(){
     fetch("https://3000-d2a8f940-c18a-423b-8cf5-78aafc526c83.ws-ap0.gitpod.io/api/employees")
     //.then(res=>res.json())
     .then(async (res)=>{
         return await res.json()
     }).then((data)=>
     {
         console.log(data._embedded);
         this.setState({employees:data._embedded.employees})
     })
         .catch(console.log)



    }
    render(){
       /** return(
            <EmployeeList employees={this.state.employees}/>
        )**/
        console.log(this.state.employees);
           let employeeList =  this.state.employees==null || this.state.employees.length==0? <tr><td>Loading</td></tr>:
   this.state.employees.map(e=> {
//console.log(e);
        return  <Employee key={e._links.self.href} name={e.name} description={e.description}/>
        });



    return (
        <table>
<thead>
<tr>
	<th>Name</th>
						<th>Description</th>
</tr>
</thead>
        <tbody>
        {employeeList}
        </tbody>
        </table>
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