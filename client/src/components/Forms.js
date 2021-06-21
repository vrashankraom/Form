import React,{Fragment, useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';


const Forms = () =>{
    const [forms,setForms] = useState([])

    const formData = async()=>{
        try{
        const res = await axios.get('/user-form/success');
        console.log(res.data);
        setForms(res.data);
        
        }
        catch(err){
            console.error(err);
        }
    };

    useEffect(()=>{
        formData();
    },[])

    return (
      <div>
       <div class="buttons">
            <Link to="/user-form" class="btn btn-primary">Fill Form</Link>
            <Link to="/" class="btn btn-light">Back</Link>
          </div>
          <h1 className="large text-primary my-1">Form Details</h1>
          <div>
              {forms.map((form,index) =>{
                  return(
                   <div key={index}>
                   <table>
                   
                   <tr><td><h2>&nbsp;Date:-</h2></td><td><h2>&nbsp;<Moment format='DD/MM/YYYY'>{form.date}</Moment></h2></td></tr>
                   <tr><td><h2>&nbsp;Name:-</h2></td><td><h2>&nbsp;{form.name}</h2></td></tr>
                   <tr><td><h2>&nbsp;Email:-</h2></td><td><h2>&nbsp;{form.email}&nbsp;</h2></td></tr>
                   <tr><td><h2>&nbsp;Phone No:-</h2></td><td><h2>&nbsp;{form.phone}</h2></td></tr>
                   <tr><td><h2>&nbsp;Date of Birth:-&nbsp;&nbsp;&nbsp;</h2></td><td><h2>&nbsp;<Moment format='DD/MM/YYYY'>{form.dob}</Moment></h2></td></tr>
                    
                    
                    </table>
                    <br/>
                   </div>
                  );
              })}
          </div>
     </div>
    );
   
};

export default Forms;