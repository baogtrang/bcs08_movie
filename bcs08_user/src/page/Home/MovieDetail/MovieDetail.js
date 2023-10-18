import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../../../api/api';
import { Progress } from 'antd';

export default function MovieDetail() {
    // gọi API lấy chi tiết phim dựa vào ID
    // useParams: hook provided by "react-router-dom" to access URL parameters
    let params = useParams();
    // the state of movie details
    const [detail, setDetail] = useState({});
    
    useEffect(()=> {
        getMovieDetail(params.id)
        .then((res)=>{
            console.log(res);
            setDetail(res.data.content);
        })
        .catch((err)=>{
            console.log(err);
        });
    }, [])
    
    // Progress antd
    return (
        <div className='container flex justify-between items-center'>
            <img className='w-1/3 aspect-square' src={detail.hinhAnh} alt="" />
            <Progress 
                size={400}
                format={(percent) => (
                    <span className='text-red-600 font-medium animate-bounce block '>
                        {percent/10} Điểm
                    </span>)}
                type="circle" percent={detail.danhGia*10}
                strokeWidth={20}
                strokeColor={"red"}
            />
        </div>
    )
}


