import React, {useEffect} from 'react'
import './Home.css'
import Home_img from '../Home/assets/prime.jpeg'
import books_img from '../Home/assets/books.jpg'
import beauty_img from '../Home/assets/beauty.jpg'
import toys_img from '../Home/assets//toys.jpg'
import Products from '../Products/Products'
import IMG1 from '../Home/assets/watch (2).jpg'
import IMG2 from '../Home/assets/ipad.jpg'
import IMG3 from '../Home/assets/monitor.jpg'
import IMG4 from '../Home/assets/phone.jpg'
import IMG5 from '../Home/assets/javascript.webp'
import IMG6 from '../Home/assets/lap.jpg'
import IMG7 from '../Home/assets/anime1.webp'
import IMG8 from '../Home/assets/anime2.webp'
import IMG9 from '../Home/assets/head.jpg'
import IMG10 from '../Home/assets/earbuds.webp'
import IMG11 from '../Home/assets/react.webp'
import SecondHeader from '../SecondHeader/SecondHeader'
const Home = () => {
    useEffect(() => Slider(0), []);
    return (
        <>
            <div className='Home'>
                <div className='Home_container'>
                    <div className='HomeSliderContainer'>
                        <div className='HomeSlide'>
                            <img src={Home_img}
                                alt="Home_img"
                                className='home_img'/>
                        </div>
                        <div className='HomeSlide'>
                            <img src={books_img}
                                alt="Home_img"
                                className='home_img'/>
                        </div>
                        <div className='HomeSlide'>
                            <img src={beauty_img}
                                alt="Home_img"
                                className='home_img'/>
                        </div>
                        <div className='HomeSlide'>
                            <img src={toys_img}
                                alt="Home_img"
                                className='home_img'/>
                        </div>
                    </div>
                </div>
               
                <div className='home_row'>
                    <Products title="OUPINKE Mens Watches Automatic Skeleton Tourbillon Self Winding Luxury Sapphire Crystal Business Dress Wristwatch"
                        price={368.00}
                        rating={4.5}
                        id={1}
                        image={IMG1}
                        dollar="$"/>
                    <Products title="Apple iPad (10th Generation): with A14 Bionic chip, 10.9-inch Liquid Retina Display, 64GB, Wi-Fi 6Touch ID, All-Day Battery Life – Blue"
                        price={385.48}
                        rating={5}
                        id={2}
                        image={IMG2}
                        dollar="$"/>
                    <Products title="JavaScript: The Comprehensive Guide to Learning Professional JavaScript Programming (The Rheinwerk Computing)" author="" dollar="$"
                        price={55.75}
                        rating={5}
                        id={5}
                        image={IMG5}/>

                    <Products title="xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable," dollar="$"
                        price={129.00}
                        rating={3.5}
                        id={4}
                        image={IMG4}/>

                </div>
                <div className='home_row'>
                    <Products title="KOORUI 24 Inch Computer Monitor -FHD 1080P Gaming Monitor 165Hz VA 1ms, AdaptiveSync Technology, LED Monitors with Ultra-Thin, HDMI X2 /DP, VESA Compatible, Tilt Adjustable, Eye Care 24E4" dollar="$"
                        price={115.99}
                        rating={4.5}
                        id={3}
                        image={IMG3}/>
                    <Products title="ASUS ROG Strix G16 (2023) Gaming Laptop, 16” Nebula Display 16:10 QHD 240Hz, GeForce RTX 4070, Intel Core i9-13980HX, 32GB DDR5, 1TB PCIe SSD, Wi-Fi 6E, Windows 11 Pro, G614JI-XS96,Eclipse Gray" author="" dollar="$"
                        price={2099}
                        rating={4}
                        id={6}
                        image={IMG6}/>
                </div>
                <SecondHeader/>
                <div className='home_row'>
                    <Products title="Men's T-Shirt 3D Printed Anime Unisex T-Shirt Summer Street Fashion Short Sleeves" author="" dollar="$"
                        price={20.99}
                        rating={5}
                        id={7}
                        image={IMG7}/>

                    <Products title="
                     Roll over image to zoom in
                     OneOdio Wired Over Ear Headphones Studio Monitor & Mixing DJ Stereo Headsets with 50mm Neodymium Drivers and 1/4 to 3.5mm Jack for AMP Computer
                     " author="by Paul McFedries (Author)" dollar="$"
                        price={31.99}
                        rating={4}
                        id={9}
                        image={IMG9}/>
                    <Products title="Men's and Women's Anime T-Shirts, Youth 3D Printed Cosplay Sweatshirts." author="" dollar="$"
                        price={19.99}
                        rating={5}
                        id={8}
                        image={IMG8}/>

                </div>
                <div className='home_row'>
                    <Products title="Wireless Earbuds Bluetooth Headphones 48hrs Play Back Earphones LED Display Buds Built-in Mic Headset Workout Black BMANI-VEAT00L " author="" dollar="$"
                        price={39.99}
                        rating={2}
                        id={10}
                        image={IMG10}/>
                    <Products title="The Road to React: Your journey to master plain yet pragmatic React.js" author="" dollar="$"
                        price={29.99}
                        rating={3}
                        id={11}
                        image={IMG11}/>
                </div>

            </div>
        </>
    )

}

function Slider(Counter) {
    const slides = document.querySelectorAll('.home_img');
    slides.forEach((slides, index) => {
        if (index !== Counter) {
            slides.style.visibility = `hidden`;
            slides.classList.add(`img-${index}`)
        }
    })

    carousel(Counter, slides, slides.length)
}
function carousel(Counter, slides, len) {
    if (slides) {
        if (Counter >= len - 1) {
            Counter = 0;
        } else {
            Counter += 1;
        }
    }
    slides.forEach((slides, index) => {
        if (index === Counter) {
            slides.style.visibility = `visible`;

        } else {
            slides.style.visibility = `hidden`;
        }
    })
    setTimeout(() => {
        carousel(Counter, slides, len);
    }, 3000)
}
export default Home
