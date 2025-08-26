
import Header from "../components/Header.jsx";
import Card from '../components/card'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../components/Slider.jsx'
import BestDeal from "../components/bestdeals.jsx";
import Instance from "../Axios.jsx";
import ProductListing from "../components/ProductListing.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";


//Slider images 
import sli1 from '../assets/1.jpg'
import sli2 from '../assets/2.jpg'
import sli3 from '../assets/3.jpg'
import sli4 from '../assets/4.jpg'

const slideraaray = [{ image: sli1 }, { image: sli2 },
{ image: sli3 }, { image: sli4 },]

function Home() {

    const [category, setcategory] = useState([])
    const [product, setproduct] = useState([])

    const listproduct = async () => {
        try {
            const response = await Instance.get("/product/");
            setproduct(response.data)
            console.log(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        listproduct();
    }, [])

    //settings
    var settings = {
        dots: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <>
            <div className='w-full  bg-gray-200 ' >
                <Header />
                <section className="w-full p-6">
                    <section className="bg-white  ">
                        <Slider {...settings}>
                            {slideraaray.map((i, index) =>
                                <Link to={"/"}><ImageSlider key={index} image={{ src: i.image, alt: "slider" }} /></Link>
                            )}
                        </Slider>
                    </section>
                </section>
                {/* <section className="w-full flex gap-4 p-6">
                        <section className="  bg-white w-10/12">
                            <h2 className='font-bold p-6 text-2xl'>Best Deals On SmartPhones</h2>
                            <div className="flex px-10 gap-20 ">
                                {array1.map((i, index) =>
                                    <BestDeal key={index} image={i.image} name={i.name} price={i.price} />)}
                            </div>
                        </section>
                        <div className="w-2/12 ">
                            <img src={staticimage} alt="" />
                        </div>
                    </section> */}
                <ProductListing />
                <Footer />
            </div >
        </>
    )
}
export default Home