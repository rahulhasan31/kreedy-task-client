import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthProvider';
import useToken from '../hook/UseToken';


const Login = () => {
  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
    const {loginUser, googleLogin, facebookLogin}=useContext(AuthContext)
    const [loginUserEmail, setLoginUserEmail] = useState('')
    
    const [token] = useToken(loginUserEmail);
    const navigate= useNavigate()

    if(token){
      navigate('/home')
    }


    const handleUserLogin=(event)=>{
       
     event.preventDefault()
     const form =event.target
     const email=form.email.value
     const password= form.password.value
     loginUser(email, password)
     .then(result=>{
        const user=result.user
        console.log(user)
        setLoginUserEmail(user.email) 
        form.reset()
        Swal.fire(
          'Login Succesfull',
          'You clicked the button!',
          'success',
          
        )

     })
     .catch(e=>{
      const msg=e.message
      
      if (msg) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${msg}`,
         
        })
      }
     })
    }

    const handleGogleLogin=()=>{
      googleLogin(provider)
      .then(result=>{
        const user=result.user
        Swal.fire(
          'Login Succesfull',
          'You clicked the button!',
          'success',
          
        )
        console.log(user)
        navigate('/home')
      })
      .catch(e=>{
        console.log(e);
      })
    }
   const  handlefacebook=()=>{
    facebookLogin(fbProvider)
    .then(result=>{
      const user=result.user
      Swal.fire(
        'Login Succesfull',
        'You clicked the button!',
        'success',
        
      )
      console.log(user);
      navigate('/home')
    })
    .catch(e=>{
      console.log(e);
    })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    <img src='https://i.ibb.co/PjZcwd8/44e79a4fc1ae11b021629dcdfc68503d-removebg-preview.png'alt=''></img>
      <p className=""></p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUserLogin}>
      <div className="card-body ">
        <div className="form-control">
        <h1 className="text-3xl font-bold">Welcome Login Now</h1>
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
          
            <Link to="/register" className="label-text-alt link link-hover  text-blue-400">Dont Have Account Signup Now</Link>
            <br></br>
           
          </label>
          

          
        </div>
        <div className="form-control mt-6 ">
       
          <button onClick={handleGogleLogin} className="btn btn-outline  text-black">google Login</button>
        </div>
        <div className="form-control mt-6 ">
       
          <button onClick={handlefacebook} className="btn   text-black btn-outline">facebook Login</button>
        </div>
        <div className="form-control mt-6 ">
       
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;