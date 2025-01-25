import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast  from 'react-hot-toast';
import axios from "axios"
import {useNavigate,useLocation} from "react-router-dom"
import { useAuth } from "../../context/auth";
import "../../styles/AuthStyles.css"


export default function Register() {

    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [auth, setAuth] = useAuth();
    

    const navigate = useNavigate()
    const location =useLocation()


    //form functionn 
    const handlesubmit = async  (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('/api/v1/auth/login', {
                email,
                password
              });
              
            
            if(res.data &&  res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                  });
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate(location.state || '/');
            }
            else{
                toast.success(res.data.message)
            }
            }

        catch(err){
            console.log(err)
            toast.error('Something went wrong')
        }
    }

  return (
    <Layout >

        <div className="register">
            <h1>Login Page</h1>

        <form  onSubmit={handlesubmit}>
        <div className="form-container">
            <label htmlFor="exampleInputName">Email</label>
            <input
            type="email"
            value={email}
            onChange={(e)=> setemail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            required
            />
        </div>
        <div className="form-container">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
            type="password"
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            />
        </div>
            <div className="mb-3">
                <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
                    Forgot Password
                </button>
            </div>
            <button type="submit" className="btn btn-primary">
                Log in
            </button>
    </form>

        </div>

    </Layout>

  )
}
