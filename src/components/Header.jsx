import flipkarthead from '../assets/flipkart.png'
import dpicon from '../assets/dpicon.svg'
import arrowicon from '../assets/arrowimage.svg'
import carticon from '../assets/carticon.svg'
import headericon from '../assets/headericons.svg'
import menudots from '../assets/menuicon.svg'
export default function Header() {
    return (
        <header className='flex bg-white gap-5 h-20 w-full justify-center items-center'>
            <div><img src={flipkarthead} alt="refresh icon flipkart" /></div>
            <div><input type="text" className='rounded-md bg-gray-100 w-xl h-12' placeholder='  Search for Products, Brands and More' /></div>
            <div className='flex gap-5 items-center'>
                <a href="#" className='flex gap-2 hover:bg-blue-600 p-4 rounded-lg group'><img src={dpicon} alt="" className='group-hover:invert' />
                <h3>Login</h3><img src={arrowicon} alt="" className='group-hover:rotate-180' /></a>
                <a href="#" className='flex gap-2 p-4'><img src={carticon} alt="" /><h3>Cart</h3></a>
                <a href="#" className='flex gap-2 p-4'><img src={headericon} alt="" /><h3>Become a Seller</h3></a>
                <a href="#" className='flex gap-2 p-4'><img src={menudots} alt="" /></a>
            </div>
        </header>
    );
};