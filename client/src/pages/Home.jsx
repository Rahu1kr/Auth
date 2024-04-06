import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { baselink } from '../link'

const Home = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    useEffect(() => {
        const verifyCookie = async () => {
            if(!cookies.token){
                navigate("/login");
            }
            const { data } = await axios.post(
                "https://auth-backend-9z6u.onrender.com",
                {},
                { withCredentials: true }
            );
            const { status, user } = data;
            setUsername(user);
            return status
                ? toast(`Hello ${user}`, {
                    position: "top-right",
                })
                : (removeCookie("token"), navigate("/Login"));
        };
        verifyCookie();
    }, [cookies, navigate, removeCookie]);
    const Logout = () => {
        removeCookie("token");
        navigate("/signup");
    };

  return (
    <>
        <div className="home_page">
            <h4>
                {" "}
                Welcome <span>{username}</span>
            </h4>
            <button onClick={Logout} id='btn'>LOGOUT</button>
        </div>
        <ToastContainer/>
    </>
  );
};

export default Home;