import { useEffect } from 'react';
import './Hero.scss';
import { Link, useNavigate } from 'react-router-dom';

// IMAGE IMPORTS 
import Brandingimg2 from "../../assets/images/Brending-2.jpg";
import DrawHandimg1 from "../../assets/images/mult-film.jpg";
import Photographsimg15 from "../../assets/images/taniat-muhovazasi.jpg"
import DigitalDesignimg16 from "../../assets/images/yusupaliyeva.jpg"
import Brandingimg5 from "../../assets/images/Brending-5.jpg";
export const Hero = () => {
    const navigate = useNavigate();

    const heroImgData = [
        {
            id: 1,
            title: "Rase",
            desc: "Muallif: Digital Generation",
            img: Brandingimg2,
            link: "art/branding:2"
        },
        {
            id: 2,
            title: "Multfilm",
            desc: "Muallif: Digital Generation",
            img: DrawHandimg1,
            link: "art/h-draw:1"
        },
        {
            id: 3,
            title: "Tabiat Muhofazasi",
            desc: "Muallif: Digital Generation",
            img: Photographsimg15,
            link: "art/photographs:15"
        },
        {
            id: 4,
            title: "YUSUPALIYEVA MARG`UBA",
            desc: "Muallif: Digital Generation",
            img: DigitalDesignimg16,
            link: "art/d-design:16"
        },
        {
            id: 5,
            title: "Eximil",
            desc: "Muallif: Digital Generation",
            img: Brandingimg5,
            link: "art/branding:5"
        },
    ]

    useEffect(() => {

        var radius = 560;
        var autoRotate = true;
        var rotateSpeed = -60;
        var imgWidth = 270;
        var imgHeight = 370;
    
        function updateGeometries() {
            if (window.innerWidth < 768) {
                radius = 260;
                rotateSpeed = -60;
                imgWidth = 100;
                imgHeight = 170;
            } else if (786 <= window.innerWidth <= 1930) {
                radius = 380;
                rotateSpeed = -60;
                imgWidth = 260;
                imgHeight = 380;
            } else {
                radius = 400;
                rotateSpeed = -60;
                imgWidth = 360;
                imgHeight = 480;
            }
        }
    
        window.addEventListener('resize', (event) => {
            updateGeometries();
        });
        updateGeometries();
    
        setTimeout(init, 1000);
    
        var odrag = document.getElementById('drag-container');
        var ospin = document.getElementById('spin-container');
        var aImg = ospin.getElementsByTagName('img');
        var aVid = ospin.getElementsByTagName('video');
        var aEle = [...aImg, ...aVid];
    
        ospin.style.width = imgWidth + "px";
        ospin.style.height = imgHeight + "px";
    
        var ground = document.getElementById('ground');
        ground.style.width = radius * 3 + "px";
        ground.style.height = radius * 3 + "px";
    
        function init(delayTime) {
            for (var i = 0; i < aEle.length; i++) {
                aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
                aEle[i].style.transition = "transform 1s";
                aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
            }
        }
    
        function playSpin(yes) {
            ospin.style.animationPlayState = (yes ? 'running' : 'paused');
        }
    
        var sX, nX, desX = 0,
            desY = 0,
            tX = 0;
    
        if (autoRotate) {
            var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
            ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
        }
    
    
    }, []);
	return (
		<>
			<section className='hero'>
				<div className='container'>
                    <h1 className='hero-title visually-hidden'>
                        Digital Gallery
                    </h1>
                    <div id='drag-container'>
                        <div id='spin-container'>
                            {heroImgData.map((item, i) => (
                                <img className='hero-img' key={i} src={item.img} onClick={() => {
                                    navigate(item.link)
                                }}/>
                            ))}
                        </div>
                        <div id='ground'></div>
                    </div>
				</div>
			</section>
		</>
	);
};
