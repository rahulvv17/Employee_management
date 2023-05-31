import React, { Component } from 'react';
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from '../withRouter';
class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
        this.state={
            id:this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            this.setState({employee:res.data});
        })
    }
    cancel(){
            
        //const navigate= new useNavigate();
        console.log(this.props);

        //  this.props.history.push('/employees');
        this.props.navigate('/employees');
        
    }

    render() {
        return (
            <div>
                {/* <HeaderComponents /> */}
                <br></br>
                
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-centre'>View Employee Details</h3>
                    <div className='row'>
                        <label>Employee First Name:</label>
                        <div>{this.state.employee.firstname}</div>
                    </div>
                    <div className='row'>
                        <label>Employee Last Name:</label>
                        <div>{this.state.employee.lastname}</div>
                    </div>
                    <div className='row'>
                        <label>Employee EmailId:</label>
                        <div>{this.state.employee.email}</div>
                    </div>
                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} >Cancel</button>
                </div>
                <FooterComponents />
                
            </div>
            
        );
    }
}

export default withRouter(ViewEmployeeComponent);