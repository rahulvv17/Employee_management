import React, { Component } from 'react';
import HeaderComponents from './HeaderComponents';
import FooterComponents from './FooterComponents';
import { useNavigate } from 'react-router-dom';
import { withRouter } from '../withRouter';
import EmployeeService from '../services/EmployeeService';
// import { useParams } from 'react-router-dom';
// export function ithRouter(Children) {
//     return (props) => {
//         const match = { params: useParams() };
//         return <Children {...props} match={match} />
//     }
// }

class UpdateEmployeeComponent extends Component {
    
    constructor(props){
        super(props)
        console.log(this.props);
        

            this.state={
                
                id: this.props.match.params.id,
                firstname: '',
                lastname: '',
                email: ''
            }
            
            this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this);
            this.changeLastNameHandler= this.changeLastNameHandler.bind(this);
            this.updateEmployee= this.updateEmployee.bind(this);
        }
        componentDidMount(){
            console.log(this.state.id);
            EmployeeService.getEmployeeById(this.state.id).then((res)=>{
                let employee=res.data;
                this.setState({firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email});
            });
        }

        updateEmployee=(e)=> {
           e.preventDefault();
           let employee={firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email};
           console.log('employee =>'+JSON.stringify(employee));
           EmployeeService.updateEmployee(employee,this.state.id).then(res=>{
                this.props.navigate('/employees');
           });
        }


        changeFirstNameHandler= (event)=> {
            this.setState({firstname: event.target.value});

        }
        changeLastNameHandler= (event)=> {
            this.setState({lastname: event.target.value});

        }
        changeEmailIdHandler= (event)=> {
            this.setState({email: event.target.value});

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
                {/* <HeaderComponents />  */}
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {/* <HeaderComponents /> */}
                            <h3 className='text-center'>Update Employee</h3>
                             
                            <div className='card body'>
                                <form>
                                <div className='form-group'>
                                    <label>First Name</label>
                                    <input placeholder='First Name' name='firstname' className='form-control' value={this.state.firstname} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label>Last Name</label>
                                    <input placeholder='Last Name' name='lastname' className='form-control' value={this.state.lastname} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label>Email Id</label>
                                    <input placeholder='Email Id' name='email' className='form-control' value={this.state.email} onChange={this.changeEmailIdHandler}/>
                                </div>

                                 <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                                 <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"180px"}}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponents />    
            </div>
        );
    }
}

// export default UpdateEmployeeComponent;
export default withRouter(UpdateEmployeeComponent);
