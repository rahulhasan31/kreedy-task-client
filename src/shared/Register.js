import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';
import useToken from '../hook/UseToken';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const [createUserEmail, setCreateUserEmail ]=useState('')
    const [token]=useToken(createUserEmail)
    const navigate=useNavigate()
     
    if(token){
      navigate('/home')
    }

    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target
        const userName=form.user.value
        const email=form.email.value
        const password=form.password.value
        console.log(userName,email,password);
        const userData={
            userName,
            email,
            password
        }
        createUser(email, password)
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(e=>console.log(e))
        fetch('https://new-task-server-plum.vercel.app/register', {
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(userData)
        })
        .then(res=>res.json())
        .then(data=>{
          setCreateUserEmail(email)
          form.reset()
          Swal.fire(
            'Signup Succesfull',
            'You clicked the button!',
            'success',
            
          )
       
          console.log(data)})
    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          
    <img src='https://i.ibb.co/PjZcwd8/44e79a4fc1ae11b021629dcdfc68503d-removebg-preview.png'alt=''></img>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}>
            <div className="card-body">
            <h1 className="text-3xl font-bold">Welcome Signup Now</h1>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">User</span>
                </label>
                <input type="text" placeholder="user"  name='user' className="input input-bordered" />
              </div>

              <div className="form-control">
              
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <Link to="/" className="label-text-alt link link-hover text-blue-500">Already have an Account Login </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">signup</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;