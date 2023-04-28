import React from 'react';
import Image from 'next/image'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css'
import Service1Icon from '../public/img/services/service-icon1.svg'
import Service2Icon from '../public/img/services/service-icon2.svg'
import Service3Icon from '../public/img/services/service-icon3.svg'


const services = [
  {
    image: Service1Icon,
    name: 'Pharmacy',
    description: 'Lorem ipsum dolor sit amet, citor. Nam molestie auctor accumsan. Morbi mattis viverra ex, velt in. Viamet elementum. Aenean eu nunc scelerisque, eleifend sapien vel, facilisis erat. Phasellus  ac massa ullamcorper bibendum. Sed laoreet faucibus augue nec egestas.',
    btnText:'Explore',
  },
  {
    image: Service2Icon,
    name: 'Breed-specific Haircuts',
    description: 'Lorem ipsum dolor sit amet, Vivamus varius quis urna sit amet elementum. Aenean eu nunc scelerisque, eleifenpharetra nisi urna, vel congue erat mollis at. Nullam pretium lacus ac massa ullamcorper bibendum. Sed laoreet faucibus augue nec egestas.',
    btnText:'Explore',
  },
  {
    image: Service3Icon,
    name: 'Cloths',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing, facilisis erae nec egestas.',
    btnText:'Explore',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={30}
    navigation={true}
    modules={[Navigation]}
    breakpoints={{
      768:{
        slidesPerView: 2,
      }
    }}
    className='serviceSlider min-h-[680px]'
    >
      {
        services.map((service, index)=>{
          return (
            <>
              <SwiperSlide key={index} className='border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8'>
                <Image src={service.image} alt='item' className='mb-9'/>
                <div className='text-[36px] font-medium mb-4'>{service.name}</div>
                <div className='text-[20px] mb-8'>{service.description}</div>
                <button className='btn btn-primary'>{service.btnText}</button>
              </SwiperSlide>
            </>
          )
        })
      }
      
    </Swiper>
  );
};

export default ServiceSlider;
