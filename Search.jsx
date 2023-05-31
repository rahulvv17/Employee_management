

import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';

class EmployeeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.match.params.id,
      searchQuery: '',
      employees: [

      ],
      searchResults: [],

    };
  }

  handleSearchInputChange = (event) => {
    // event.preventDefault();
    const searchQuery = event.target.value;
    console.log(searchQuery);
    EmployeeService.getEmployeeByNameLike(searchQuery).then(res => {
      console.log(res.data, 'jjjjj')
      this.setState({ searchResults: res.data });
    })

  };

  searchEmployees = () => {

    const { searchQuery, employees } = this.state;
   
    const filteredEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ searchResults: filteredEmployees });

    
  };
  cancel() {

    //const navigate= new useNavigate();
    console.log(this.props);

    //  this.props.history.push('/employees');
    this.props.navigate('/employees');

  }

  nameClick = (id) => {
    console.log("clicked >>> "+id);
    this.props.navigate('/viewemployee/' +id);

  }
  
  render() {
    const { searchResults,employees } = this.state;

    return (
      
      <div >
        
        <div>
        {/* <HeaderComponents/> */}
        <table style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <input
            type="text"
            value={this.searchQuery}
            onChange={this.handleSearchInputChange}
            placeholder="Search employee name..."
          />
          <br />
          <ul style={{ fontSize: 13 }}>
            {searchResults.map((employee,index) => (
              
              <li key={employee.firstname} onClick={()=>this.nameClick(employee.id) }>{employee.firstname}</li>
              // <li key={employee.id}>{employee.id}-{employee.firstname}-{employee.name}</li>

            ))}
          </ul>
          
          <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "30px" }}>Cancel</button>
          </table>
        
        </div>
        <FooterComponents />
      </div>
    );
  }
}

export default withRouter(EmployeeSearch);
