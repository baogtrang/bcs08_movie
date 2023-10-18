import React, { useEffect, useState } from 'react'
import { Carousel, message, ConfigProvider } from 'antd';
import { getDataSlider } from '../../../api/api';
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Slider() {
    const [banner, setBanner] = useState([]);
    
    // async function returns a promis
    let fetchData = async()=>{
        try{
            let response = await getDataSlider();
            setBanner(response.data.content);
        }catch{
            message.error("Error");
        }
        /*await only works inside async functions.It pauses the execution of an async function
        until a promise is either resolved or rejected.
        */
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Carousel: {
                    /* here is your component tokens */
                        dotHeight: 10,
                        dotWidth: 60,
                        dotActiveWidth: 100,
                    },
                },
            }}
        >
            <Carousel autoplay={true} effect="fade" afterChange={onChange}>
                {banner.map((item, index)=>{
                    return (
                        <img 
                            src={item.hinhAnh} 
                            key={index}  
                            alt="" 
                            className='h-40 sm:h-64 lg:h-96 xl:h-200 w-full object-cover'/>)
                    })
                }
            </Carousel>

        </ConfigProvider>
    );
}


