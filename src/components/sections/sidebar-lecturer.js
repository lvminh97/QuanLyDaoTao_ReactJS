import React from "react";

class SidebarLecturer extends React.Component {
    render() {
        return (
            <ul
                className="navbar-nav bg-gradient-danger sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="./index-lecturer.html"
                >
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div id="lecture-name" className="sidebar-brand-text mx-3"></div>
                </a>
                <hr className="sidebar-divider my-0" />
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="# "
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                    >
                        <i className="fas fa-fw fa-user"></i>
                        <span>Quản lý tài khoản</span>
                    </a>
                    <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="./lecturer-info.html">Thông tin cá nhân</a>
                            <a href="# " className="collapse-item">Đăng xuất</a>
                        </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        href="# "
                        data-toggle="collapse"
                        data-target="#collapseUtilities"
                        aria-expanded="true"
                        aria-controls="collapseUtilities"
                    >
                        <i className="fas fa-fw fa-building"></i>
                        <span>Quản lý lớp học</span>
                    </a>
                    <div
                        id="collapseUtilities"
                        className="collapse"
                        aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar"
                    >
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="./classNamelist-lecturer.html">Danh sách lớp học</a>
                        </div>
                    </div>
                </li>
                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        );
    }
}

export default SidebarLecturer;