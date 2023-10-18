import { Breadcrumb } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from "use-react-router-breadcrumbs";

let IconDashboard = () => {
    return <span>
        <i classname="fa fa-home"></i>Trang chủ
    </span>
}

let routes = [
    { path: "/", breadcrumb: IconDashboard },
    { path: "/user", breadcrumb: "User management" },
    { path: "/movie", breadcrumb: "Movie management" },

]

export default function BreadCrumbNav() {
    const breadcrumbs = useBreadcrumbs(routes);
    // breadcrumbs is an array

    return (
        <Breadcrumb className="p-5">
            {breadcrumbs.map(({ breadcrumb, match }, index) => {
                console.log(match);
                return <Breadcrumb.Item key={index}>
                    <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                </Breadcrumb.Item> 
            })}
        </Breadcrumb>
    );
}

