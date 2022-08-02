import React from "react";
import AddAccountModal from "../../components/modals/add-account-modal";
import LogoutModal from "../../components/modals/logout-modal";
import Footer from "../../components/sections/footer";
import SearchBar from "../../components/sections/searchbar";
import SidebarAdmin from "../../components/sections/sidebar-admin";

class AdminAccountlist extends React.Component {
    constructor(props){
        super(props);
        this.deleteAccount = this.deleteAccount.bind(this);
    }

    deleteAccount() {
        var cf = window.confirm('Bạn muốn xóa tài khoản này?');
        if (!cf) return;
    }

    render() {
        return(
            <div id="page-top">
                <div id="wrapper">
                    <SidebarAdmin />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <SearchBar />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <button
                                            className="btn btn-success"
                                            style={{width: "200px"}}
                                            data-toggle="modal"
                                            data-target="#addAccountModal"
                                        >
                                            <i className="fa fa-plus"></i> Thêm tài khoản mới
                                        </button>
                                    </div>
                                    <div className="col-md-12" style={{marginTop: "40px"}}>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th width="10%">UID</th>
                                                    <th width="30%">Họ tên</th>
                                                    <th width="20%">Username</th>
                                                    <th width="20%">Vai trò</th>
                                                    <th width="10%"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="class01">
                                                    <td><a href="class-detail.html">20211234</a></td>
                                                    <td>Trần Văn Nam</td>
                                                    <td>nam.tv211234</td>
                                                    <td>Sinh viên</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.deleteAccount}>
                                                            <i className="fa fa-fw fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <AddAccountModal />
                        </div>
                        <Footer />
                    </div>
                </div>
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <LogoutModal />
            </div>
        );
    }
}

export default AdminAccountlist;
