import axios from "axios"
import { BASE_URL, configHeaders } from "./config"

// makes an API call to fetch a list of movies
export let getMovieList =()=>{
    return axios({
        url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim?maNhom=GP09`,
        method: "GET",
        headers: configHeaders(),
    });
}

export let getMovieDetail =(id)=>{
    return axios({
        url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
        method: "GET",
        headers: configHeaders(),
    });
}

export let getMovieByTheatre=()=>{
    return axios({
        url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
        method: "GET",
        headers: configHeaders(),
    });
}
export let getDataSlider=()=>{
    return axios({
        url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
        method: "GET",
        headers: configHeaders(),
    });
}


