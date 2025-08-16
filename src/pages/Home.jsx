
import Header from "../components/Header.jsx";
import Card from '../components/card'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../components/Slider.jsx'
import BestDeal from "../components/bestdeals.jsx";
import Instance from "../Axios.jsx";

function Home() {

    const [category, setcategory] = useState([])
    const [product, setproduct] = useState([])

    const listproduct = async () => {
        try {
            const response = await Instance.get("/product/");
            console.log(response.data);
            setproduct(response.data)
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
            <div className='w-full  bg-gray-200 h-full' >
                <Header />
                <section className="w-full p-6">
                    <section className="bg-white  ">
                        <Slider {...settings}>
                            {product.map((i) =>
                                <ImageSlider key={i._id} images={i.images} />)}
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
            </div >
        </>
    )
}
export default Home