import axios from 'axios';
import { ToastContainer,toast,Zoom,Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Link, Redirect} from 'react-router-dom';



export const form = async ({name,email,dob,phone},history) => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
          }
    }
    const body = JSON.stringify({name,email,dob,phone});
    
    try {
     await axios.post('/user-form',body,config);
     toast.success("Data successfully entered!");
     setTimeout(function(){ history.push('/user-form/success'); }, 3000);
    } catch(err) {
      
      const errors = err.response.data.errors;
      const ageerror = err.response.data.ageerror;
      const phoneerror = err.response.data.phoneerror;
      
        if (errors) {
          errors.forEach(error =>toast.error(error.msg));
        }
        if(ageerror){
            toast.error(ageerror);
        }
        if(phoneerror){
            toast.error(phoneerror);
        }
      }
      

    };






         
         
      