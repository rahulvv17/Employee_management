import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';
import { Link } from 'react-router-dom';
import { withRouter } from '../withRouter';
import Search from './Search';

class ListmployeeComponent extends Component {
    constructor(props) {
       
        super(props);
       

        this.state={
            id:this.props.match.params.id,
            searchQuery: '',
            employees: [],
            searchResults: [],
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }
    handleSearchInputChange = (event) => {
        // event.preventDefault();
        const searchQuery = event.target.value;
        console.log(searchQuery);
        if(searchQuery != ""){
        EmployeeService.getEmployeeByNameLike(searchQuery).then(res => {
          console.log(res.data, 'jjjjj')
        //   this.setState({ searchResults: res.data });
        this.setState({ employees: res.data });
        })
        }
    
    };
    
    searchEmployees = () => {

        const { searchQuery, employees } = this.state;
       
        const filteredEmployees = employees.filter((employee) =>
          employee.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        this.setState({ searchResults: filteredEmployees });
    
        
    };
      
    nameClick = (id) => {
        console.log("clicked >>> "+id);
        this.props.navigate('/viewemployee/' +id);
        

     }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res=>{
            this.setState({employees:this.state.employees.filter(employee=> employee.id!==id)});
        });
    }
    viewEmployee(id){
        this.props.navigate('/viewemployee/'+id);

    }
    editEmployee(id){

        this.props.navigate('/addemployee/'+id);

    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            
            this.setState({ employees: res.data});
            console.log('employee',this.state.employees);
            
        });
    }
    addEmployee(){
       
        
       this.props.navigate('/addemployee/_add');
    }
    render() {
        const { searchResults,employees } = this.state;

        const mystyle = {
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            
            <div>
                <div>
                 {/* <HeaderComponents />  */}
                    <h2 className='text-center'>Employee-List</h2>
                    <div className='row'>
                    {/* <span><a href='/addemployee/_add'>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; <button className='"btn btn-primary'>Add Employee</button></a></span> */}
                    <table style={{textAlign: "center"}}>
                    <span><a href='/addemployee/_add'> <button className='"btn btn-primary'>Add Employee</button></a></span>
                    {/* <a href='/sr'> <button  className='"btn btn-primary'>Search Employee</button></a> */}
                    <input type="text" style={{marginLeft: '15px'}} value={this.searchQuery} onChange={this.handleSearchInputChange} placeholder="Search employee name..."/>
                    <br />
                    {/* <ul style={{ fontSize: 13 }}>
                        {searchResults.map((employee,index) => (
              
                        <li key={employee.firstname} onClick={()=>this.nameClick(employee.id) }>{employee.firstname}</li>
              // <li key={employee.id}>{employee.id}-{employee.firstname}-{employee.name}</li>

                    ))}
                    </ul> */}
                    </table>
                    </div>
                    <div> &nbsp; </div>
                        <div className='row'>
                            {/* <table style={{mystyle}} className='table table-stripped table-bordered'> */}
                            <table style={{textAlign: "center"}} className='table table-stripped bordered-table'>
                                <thead>
                                    <tr>
                                        <th>Employee First Name</th>
                                        <th>Employee Last Name</th>
                                        <th>Employee Email Id</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead> 
                        <tbody>
                        {
                           
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstname}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button onClick={()=>this.editEmployee(employee.id)} className='btn-btn-info'>Update</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className='btn-btn-danger'>Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(employee.id)} className='btn-btn-info'>View</button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                            </table>
                          </div>

                    <FooterComponents />
                    </div>
            </div>
        );
    }
}

// export default ListmployeeComponent;
export default withRouter(ListmployeeComponent);