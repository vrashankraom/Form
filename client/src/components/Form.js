import React,{useState} from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { ToastContainer,toast,Zoom,Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { form } from '../apihelper/form';

const Form =({history})=> {

    const[formData,setFormData] = useState({
        name:'',
        email:'',
        dob:'',
        phone:''
    });
  
    const {name,email,dob,phone} =formData;
    const onChange = (e) =>setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        form({name,email,dob,phone},history);
        
      };

    return(
      <div>
        <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
        <div class="buttons">
            <Link to="/user-form/success" class="btn btn-success">Get Forms</Link>
          </div>
        <h1 className="large text-primary">Please fill the Form</h1>
        <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onChange(e)} />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email} onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            value={dob} onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone} onChange={e=>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
      </div>
    );
}
export default withRouter(Form);