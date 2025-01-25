import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast  from 'react-hot-toast';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../../styles/AuthStyles.css"


export default function Register() {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [phone,setphone] = useState("");
    const [address,setaddress] = useState("");
    const [answer,setanswer] = useState("");

    const navigate = useNavigate()


    //form functionn 
    const handlesubmit = async  (e) => {
        e.preventDefault()
        try{
            const res = await axios.post('/api/v1/auth/register', {
                name,
                email,
                password,
                phone,
                address,
                answer
              });
              
            
            if(res.data &&  res.data.success){
                toast.success(res.data.message);
                navigate('/login');
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
            <h1>Register Page</h1>



        <form  onSubmit={handlesubmit}>
        <div className="form-container">
            <label htmlFor="exampleInputName">Name</label>
            <input
            type="text"
            value={name}
            onChange={(e)=> setname(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            required    
            />
        </div>
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
        <div className="form-container">
            <label htmlFor="exampleInputName">Phone</label>
            <input
            type="text"
            value={phone}
            onChange={(e)=> setphone(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            required
            />
        </div>
        <div className="form-container">
            <label htmlFor="exampleInputName">Address</label>
            <input
            type="text"
            value={address}
            onChange={(e)=> setaddress (e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            required
            />
        </div>
        <div className="form-container">
            <label htmlFor="exampleInputName">Answer</label>
            <input
            type="text"
            value={answer}
            onChange={(e)=> setanswer(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="what is your favourite sports"
            required    
            />
        </div>
        
        <button type="submit" className="btn btn-primary">
            Submit
        </button>
        </form>

        </div>
    </Layout>

  )
}
