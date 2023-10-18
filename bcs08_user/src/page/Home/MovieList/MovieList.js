import React, { useEffect, useState } from 'react'
import { getMovieList } from '../../../api/api';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { NavLink } from 'react-router-dom';

//api LayDanhSachPhim
export default function MovieList(props) {
  console.log("props:", props)

  const [movieArr, setmovieArr] = useState([]);
  
  useEffect(()=>{
    // API call
    getMovieList()
      .then((res)=>{
        console.log(res);
        setmovieArr(res.data.content);
      })
      .catch((err)=>{
        console.error(err);
      })
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-10">
      {movieArr.slice(0, 12).map((item,index)=>{
        return (
          // https://ant.design/components/card
          <Card
            hoverable
            // style={{ width: 240 }}
            cover={<img className="h-48 object-cover" alt="example" src={item.hinhAnh} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
            <button className='px-20 py-5 bg-red-500 rounded'>
              <NavLink to={`/movie/${item.maPhim}`} className="text-white">Mua vé</NavLink>  
            </button>
          </Card>
        )
      })}
    </div>
  )
}
