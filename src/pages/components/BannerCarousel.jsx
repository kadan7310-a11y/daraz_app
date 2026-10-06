import { Swiper,SwiperSlide } from "swiper/react";
import { Autoplay,Pagination,Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const BannerCarousel=()=>{
    const banners=[
"/image1.png",
"/image2.png",
"/image.png"
    ];
    return(
<div className="w-full">
<Swiper modules={[Autoplay,Pagination,Navigation]}
spaceBetween={0}
slidesPerView={1}
autoplay={{delay:3000,disableOnInteraction:false}}
pagination={{clickable:true}}
navigation={true}
loop={true}
className="rounded-lg"
>
    {banners.map((banner,index)=>(
    <SwiperSlide key={index}>
        <img 
        src={banner}
        alt={`banner-${index}`}
        className="w-full h- [250px] object-cover rounded-lg"/>
        </SwiperSlide>
    ))}
    </Swiper>
    </div>
    );
};
export default BannerCarousel;