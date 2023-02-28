import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
  const{lougoutUser,user}=useContext(AuthContext)
  
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there <br>
      </br>{user?.email}</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {
        user?.email?<><button onClick={lougoutUser} className="btn btn-primary">logout</button></>:<><Link to={'/'}><button  className="btn btn-primary">login</button></Link></>
      }
      
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;