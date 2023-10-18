import React, { useEffect, useState } from 'react'
import { getMovieByTheatre } from '../../../api/api'
import { Tabs } from 'antd';
import moment from 'moment';



// https://ant.design/components/tabs
const onChange = (key) => {
    console.log(key);
};

moment().locale('vi')

export default function MovieTab() {
    const [danhSachHeThongRap, setDanhSachHeThongRap]=useState([]);

    useEffect(() => {
        getMovieByTheatre()
            .then((res)=> {
                setDanhSachHeThongRap(res.data.content);
                console.log("res:", res); 
            })
            .catch((err) => {
                console.log("err:", err);
            })
    }, []);
    
    let renderDsPhim=(dsPhim)=>{
        return(dsPhim.map((phim)=>{
            return (
                <div className='flex space-x-5 p-3 items-center'>
                    <img src={phim.hinhAnh} className='w-20 h-32 object-cover' alt="" />
                    <div className='grid grid-cols-4 gap-5'>
                        <p>{phim.tenPhim}</p>                        {/*list lịch chiếu - moment js */}
                        <div>
                            {phim.lstLichChieuTheoPhim.slice(0, 8).map((lichChieu) => { 
                                return (
                                    <span className='bg-red-500 text-white rounded shadow px-5 py-2'>
                                        {moment(lichChieu).format("L")}
                                    </span>)
                            })}
                        </div>
                    </div>
                </div>
            )
        }))
    };

    let handleHeThongRap=()=>{
        return danhSachHeThongRap.map((heThongRap, index)=>{
            return {
                key: index,
                label: <img className='w-16' src={heThongRap.logo} alt=""/>,
                children: 
                <Tabs 
                    style={{
                        height: 500,
                    }}
                    tabPosition='left'
                    items={heThongRap.lstCumRap.map((cumRap)=> {
                        return {
                            key: cumRap.maCumRap,
                            label: (
                                <div className='w-96 text-left whitespace-normal'>
                                    <p className='text-green-800 font-medium'>
                                        {cumRap.tenCumRap} 
                                    </p> 
                                    <p className='hover:text-green-800'>
                                        {cumRap.diaChi}
                                    </p>
                                </div>
                                
                            ),
                            children: 
                                <div 
                                    style={{
                                        height: 500,
                                        overflow: "scroll",
                                    }}
                                >
                                    {renderDsPhim(cumRap.danhSachPhim)}
                                </div>
                        };
                    })}
                />
            };
        });
    };

    return (
        <div className='container shadow p-3 rounded border-2 border-l-black'> 
            <Tabs 
                style={{
                    height: 500,
                }}
                tabPosition="left"
                defaultActiveKey="1" 
                items={handleHeThongRap()} 
                onChange={onChange} />
        </div>
    )
}

// 4 arrays: heThongRap > cumRap > phim > gioChieu
 