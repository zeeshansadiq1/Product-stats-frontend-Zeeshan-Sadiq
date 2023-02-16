import React, { useState } from 'react';
import trends from '../img/trends.jpg';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  if ((email !== 'test_user@meistery.net' || password !== 'trial_application') && 
      (email !== 'test_user2@meistery.net' || password !== 'trial_application')) {
        
        setError(alert('Either your password or login is incorrect'));
        } 
        else {
        alert('login Successfully');
      // Perform successful login action
    }
  }

  return (
  
    <div>
      <form className='center-form' onSubmit={handleSubmit}>

        {/* Logo at top of the form  */}

       
        <img src={trends} alt='logo' 
        style= {{ width:"150px", height:"30px",marginLeft:"32%", marginTop:"40px" }} />

        <br/><br/><br/>
        {/* <!-- Email input --> */}
        
        <div className="form-outline mb-4" style={{width:"300px", marginLeft:"50px"}}>
          <input type="email" id="form2Example1" className="form-control"  placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}  />
        </div>

        {/* <!-- Password input --> */}

        <div className="form-outline mb-4" style={{width:"300px", marginLeft:"50px"}}>
          <input type="password" id="form2Example2" className="form-control" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        </div>


        {/* error showed if the input credentails are not correct */}
        
        {error && <p style={{ color: 'red', marginLeft:"50px" }}>{error}</p>}

        {/* <!-- Submit button --> */}

        <button type="submit" className="btn btn-primary btn-block mb-4" style={{width:"300px", marginLeft:"50px"}}>
        Login</button>
      
      </form>
    </div>

 );
}

export default LoginPage;