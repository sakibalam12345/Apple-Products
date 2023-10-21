import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";



const Login = () => {

  const [loginsuccess,setloginsuccess] = useState('');
  const [loginerror,setloginerror] = useState('');

  const {signin,googlesignin} = useContext(AuthContext);
  const location = useLocation();
  console.log(location)
  const Navigate = useNavigate();

  const handlegooglelogin =()=>{
    googlesignin()
    .then(result=>{
      console.log(result.user)
      setloginsuccess(toast('Login successfully'))
    })
    .catch(error=>{
      console.error(error)
      setloginerror(toast(error.message))
    })
  }

    const handlelogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signin(email,password)
        .then(result=>{
          console.log(result.user)
          setloginsuccess(toast('Login successfully'))

          Navigate(location?.state  ?  location.state : '/')


        })
        .catch(error=>{
          console.error(error)
          setloginerror(toast(error.message))
        })
    }
    return (
        <div >
           <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-white">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-[400px] h-[400px] shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn ">Login</button>
        </div>
        <div>
            <p className="font-medium text-base">Do Not Have An Accout? Please <Link to='/register'><button className="btn">Register</button></Link>  </p>
        </div>
        <div >
            <p className="text-center ">Login With  <button onClick={handlegooglelogin} className="btn">Google </button> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;