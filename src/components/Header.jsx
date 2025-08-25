import flipkarthead from '../assets/flipkart.png'
import dpicon from '../assets/dpicon.svg'
import arrowicon from '../assets/arrowimage.svg'
import carticon from '../assets/carticon.svg'
import headericon from '../assets/headericons.svg'
import userprofile from '../assets/user profile.png'
import { Link } from 'react-router-dom'
import Instance from '../Axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const [Logging, setloggin] = useState(localStorage.getItem("UserId"))
    const navigate = useNavigate()

    const userlogout = async () => {
        try {
            const okay = confirm("you need to logout");
            if (okay) {
                const response = await Instance.delete("/user/logout")
                console.log(response.data);
                localStorage.removeItem("UserId")
                setloggin(null)
            }
            else {
                alert("ok")
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const profileedit = async () => {
        try {

            if (Logging) {
                navigate("/user/show");
            }
            else {
                alert("no user found")
            }
        }
        catch (err) {
            console.log(err);

        }
    }
    return (
        <header className='flex bg-white gap-5 h-20 w-full justify-center items-center'>
            <div><img src={flipkarthead} alt="refresh icon flipkart" /></div>
            <div><input type="text" className='rounded-md bg-gray-100 w-xl h-12' placeholder='  Search for Products, Brands and More'onChange={(e)=>setsearch(e.target.value)} /></div>
            <div className='flex gap-5 items-center'>
                {Logging ? <Link onClick={() => { userlogout() }} className='flex gap-2 hover:bg-red-600 p-4 rounded-lg group' to={"/"}><img src={dpicon} alt="" className='group-hover:invert' />
                    <h3>Logout</h3><img src={arrowicon} alt="" className='group-hover:rotate-180 g' /></Link> : <Link className='flex gap-2 hover:bg-blue-600 p-4 rounded-lg group' to={"/login"}><img src={dpicon} alt="" className='group-hover:invert' />
                    <h3>Login</h3><img src={arrowicon} alt="" className='group-hover:rotate-180' /></Link>}
                <Link to={"/user/cart"} className='flex gap-2 p-4'><img src={carticon} alt="" /><h3>Cart</h3></Link>
                <Link to={"/user/order"} className='flex gap-2 p-4'><img src={headericon} alt="" /><h3> Your Orders</h3></Link>
                <button onClick={profileedit} className='flex flex-col gap-1'><img className='w-9 h-9' src={userprofile} alt="Edituser" /> <p>Edituser</p></button>
            </div>
        </header>
    );
};