import "./Photographs.scss"

// SWIPER IMPORTS 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ImageCard } from '../ImageCard/ImageCard';
import { Link } from 'react-router-dom';

// IMAGE IMPORTS 
import img1 from "../../assets/images/Otov.jpg"
import img2 from "../../assets/images/Qoya-tosh.jpg"
import img3 from "../../assets/images/Toshlar.jpg"
import img4 from "../../assets/images/zinapoya.jpg"
import img5 from "../../assets/images/chol-toshi.jpg"
import img6 from "../../assets/images/tuproq-shisha.jpg"
import img7 from "../../assets/images/tuproq.jpg"
import img8 from "../../assets/images/abdulajon.jpg"
import img9 from "../../assets/images/qoya.jpg"
import img10 from "../../assets/images/kabutar.jpg"
import img11 from "../../assets/images/suv-tomchi.jpg"
import img12 from "../../assets/images/artof-muhit.jpg"
import img13 from "../../assets/images/choldagi-shisha.jpg"
import img14 from "../../assets/images/chol.jpg"
import img15 from "../../assets/images/taniat-muhovazasi.jpg"
import img16 from "../../assets/images/ish-qilib-zerikgan-bola.jpg"

export const Photographs = () => {

    const dataTemp = [
        {
            id: 1,
            title: "O'tov",
            desc: "Muallif: Digital Generation",
            img: img1,
            link: "art/photographs:1"
        },
        {
            id: 2,
            title: "Qoya tosh",
            desc: "Muallif: Digital Generation",
            img: img2,
            link: "art/photographs:2"
        },
        {
            id: 3,
            title: "Toshlar",
            desc: "Muallif: Digital Generation",
            img: img3,
            link: "art/photographs:3"
        },
        {
            id: 4,
            title: "Zinapoya",
            desc: "Muallif: Digital Generation",
            img: img4,
            link: "art/photographs:4"
        },
        {
            id: 5,
            title: "Cho'l toshi",
            desc: "Muallif: Digital Generation",
            img: img5,
            link: "art/photographs:5"
        },
        {
            id: 6,
            title: "Tuproq va shisha",
            desc: "Muallif: Digital Generation",
            img: img6,
            link: "art/photographs:6"
        },
        {
            id: 7,
            title: "Tuproq",
            desc: "Muallif: Digital Generation",
            img: img7,
            link: "art/photographs:7"
        },
        {
            id: 8,
            title: "Abdullajon",
            desc: "Muallif: Digital Generation",
            img: img8,
            link: "art/photographs:8"
        },
        {
            id: 9,
            title: "Qoya",
            desc: "Muallif: Digital Generation",
            img: img9,
            link: "art/photographs:9"
        },
        {
            id: 10,
            title: "Kabutar",
            desc: "Muallif: Digital Generation",
            img: img10,
            link: "art/photographs:10"
        },
        {
            id: 11,
            title: "Suv Tomchi",
            desc: "Muallif: Digital Generation",
            img: img11,
            link: "art/photographs:11"
        },
        {
            id: 12,
            title: "Atrof Muhit",
            desc: "Muallif: Digital Generation",
            img: img12,
            link: "art/photographs:12"
        },
        {
            id: 13,
            title: "Cho'ldagi Shisha",
            desc: "Muallif: Digital Generation",
            img: img13,
            link: "art/photographs:13"
        },
        {
            id: 14,
            title: "Cho'l",
            desc: "Muallif: Digital Generation",
            img: img14,
            link: "art/photographs:14"
        },
        {
            id: 15,
            title: "Tabiat Muhofazasi",
            desc: "Muallif: Digital Generation",
            img: img15,
            link: "art/photographs:15"
        },
        {
            id: 16,
            title: "Ish Qilib Zerikgan Bola",
            desc: "Muallif: Digital Generation",
            img: img16,
            link: "art/photographs:16"
        },
    ]

	return (
		<>
			<section className='photographs'>
                <h2 className='photographs-title'>Fotosuratlar</h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    // breakpoints={{
                    // 	600: {
                    // 		slidesPerView: 2,
                    // 		spaceBetween: 20,
                    // 	},
                    //     1000: {
                    //         slidesPerView: 3,
                    // 		spaceBetween: 20,
                    //     },
                    // }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className='mySwiper'
                >
                    {dataTemp.map((item, i) => (
                        <SwiperSlide key={i}>
                            <ImageCard obj={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
				<div className='container'>

                    <div className='photographs-link-box'>
                        <Link className='photographs-link' to="/">3D xonada tomosha qilish</Link>
                        <Link className='photographs-link' to="selected-by-categories/photograph">Bo'limni ko'rish</Link>
                    </div>
				</div>
			</section>
		</>
	);
};
