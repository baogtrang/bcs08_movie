import React, { useEffect, useState } from "react";
import { userServ } from "../../api/api";
import { Button, Table, Tag, message, theme } from "antd";
import Spinner from "../../components/Spinner";

export default function TableUser() {
  const [listUser, setListUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  /**
   * 1. tạo button delete trong thead và tbody
   * 2. viết service delete user
   * 3. gắn vào button
   * 4. fetch get list sau khi xoá thành công
   *
   */

  function fetchListUser() {
    setIsLoading(true);
    userServ
      .getList()
      .then((res) => {
        // console.log(res);
        setIsLoading(false);
        setListUser(res.data.content);
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
      });
  }
  useEffect(() => {
    fetchListUser();
  }, []);
  let handleDelete = (taiKhoan) => {
    userServ
      .delete(taiKhoan)
      .then((res) => {
        fetchListUser();

        message.success("Xoá thành công");
      })
      .catch((err) => {
        message.error(err.response.data.content);
      });
    // gọi api xoá
  };
  let columnsHeader = [
    {
      title: "Username",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Type",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => {
        if (text == "KhachHang") {
          return <Tag color="green">Khách hàng</Tag>;
        } else {
          return <Tag color="red">Quản trị</Tag>;
        }
      },
    },
    {
      title: "Action",
      render: (_, user) => {
        console.log("😀 - TableUser - user", user);
        return (
          <Button
            onClick={() => {
              handleDelete(user.taiKhoan);
            }}
            className="bg-red-500"
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={listUser} columns={columnsHeader} />;
    </div>
  );
}
// table antd
