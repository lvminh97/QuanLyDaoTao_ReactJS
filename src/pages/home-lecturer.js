import React from "react";

class HomeLecturer extends React.Component {
    render() {
        return(
            <div id="page-top">
                <div id="wrapper">
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
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <form
                                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                                >
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 small"
                                            placeholder="Tìm kiếm"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item dropdown no-arrow d-sm-none">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="# "
                                            id="searchDropdown"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fas fa-search fa-fw"></i>
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                            aria-labelledby="searchDropdown"
                                        >
                                            <form className="form-inline mr-auto w-100 navbar-search">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control bg-light border-0 small"
                                                        placeholder="Tìm kiếm"
                                                        aria-label="Search"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-primary" type="button">
                                                            <i className="fas fa-search fa-sm"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </li>
                                    <div className="topbar-divider d-none d-sm-block"></div>
                                </ul>
                            </nav>
                            <div className="container-fluid"></div>
                        </div>
                        <footer className="sticky-footer bg-white">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright &copy; QLDT 2022</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <div
                    className="modal fade"
                    id="logoutModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Select "Logout" below if you are ready to end your current session.
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <a className="btn btn-primary" href="# ">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLecturer;
