import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const Register = () => {

  const [regisuccess,setregisuccess] = useState('');
  const [regierror,setregierror] = useState('')

  const navigate = useNavigate();

    const {createuser} = useContext(AuthContext)

    const handleregister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password)

        if(password.length < 6){
          return setregierror(toast('password should be more than 6 characters'))
        }
       else if(!/[A-Z]/.test(password)){
          return setregierror(toast('password should have a capital letter'))
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
          return setregierror(toast('password should have a special charecter'))
        }

        createuser(email,password)
        .then(result=>{
            console.log(result.user)
         setregisuccess(toast('registration successfull'))
            navigate('/')
            
        })
        .catch(error=>{
            console.error(error)
            setregierror(toast(error.message))
        })
    }
    return (
        <div>
                   <div className="hero min-h-screen bg-black">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold text-white">Register now!</h1>
    </div>
    <div className="card flex-shrink-0 w-[400px] h-[550px] shadow-2xl bg-base-100">
      <form onSubmit={handleregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />
        </div>
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
          <button className="btn ">Register</button>
        </div>
        <div>
            <p className="font-medium text-base">Already Have An Account? Please <Link to='/login'><button className="btn">Login</button></Link> </p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;