import axios from 'axios';
export const fetchMovies = async (movieID) => {
    try {
        const response = await axios.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieID}`);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};