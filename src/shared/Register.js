import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        
          console.log(data)})
    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp}>
            <div className="card-body">
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
                  <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
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