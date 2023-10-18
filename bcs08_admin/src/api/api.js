import axios from "axios";
import { BASE_URL, configHeaders, https } from "./config";


// anything related to user will be in this file
export let userServ = {
  getList: () => {
    return https.get("/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
  },
  delete: (taiKhoan) =>
    https.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`),
};
