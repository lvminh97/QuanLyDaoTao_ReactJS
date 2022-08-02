import React from "react";
import AddClassModal from "../../components/modals/add-class-modal";
import EditClassModal from "../../components/modals/edit-class-modal";
import JoinClassModal from "../../components/modals/join-class-modal";
import LogoutModal from "../../components/modals/logout-modal";
import Footer from "../../components/sections/footer";
import SearchBar from "../../components/sections/searchbar";
import SidebarStudent from "../../components/sections/sidebar-student";

class StudentClasslist extends React.Component {
    constructor(props){
        super(props);
        this.deleteClass = this.deleteClass.bind(this);
    }

    deleteClass() {
        var cf = window.confirm('Bạn muốn rời lớp này?');
        if (!cf) return;
    }

    render() {
        return(
            <div id="page-top">
                <div id="wrapper">
                    <SidebarStudent />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <SearchBar />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12">
                                        <button className="btn btn-success" style={{width: "200px"}} data-toggle="modal" data-target="#registerModal"><i className="fa fa-plus"></i> Đăng ký lớp học</button>
                                    </div>
                                    <div className="col-md-12" style={{marginTop: "40px"}}>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th width="5%">Mã lớp</th>
                                                    <th width="30%">Môn học</th>
                                                    <th width="20%">Học kỳ</th>
                                                    <th width="20%">Phòng</th>
                                                    <th width="10%"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="class01">
                                                    <td><a href="class-detail-student.html">103175</a></td>
                                                    <td>Kỹ thuật lập trình</td>
                                                    <td>20222</td>
                                                    <td>D3-201</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.deleteClass}><i className="fa-solid fa-right-from-bracket"></i></button>
                                                    </td>
                                                </tr>
                                                <tr id="class02">
                                                    <td><a href="class-detail-student.html">103175</a></td>
                                                    <td>Kỹ thuật lập trình</td>
                                                    <td>20222</td>
                                                    <td>D3-201</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.deleteClass}><i className="fa-solid fa-right-from-bracket"></i></button>
                                                    </td>
                                                </tr>
                                                <tr id="class03">
                                                    <td><a href="class-detail-student.html">103175</a></td>
                                                    <td>Kỹ thuật lập trình</td>
                                                    <td>20222</td>
                                                    <td>D3-201</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.deleteClass}><i className="fa-solid fa-right-from-bracket"></i></button>
                                                    </td>
                                                </tr>
                                                <tr id="class04">
                                                    <td><a href="class-detail-student.html">103175</a></td>
                                                    <td>Kỹ thuật lập trình</td>
                                                    <td>20222</td>
                                                    <td>D3-201</td>
                                                    <td>
                                                        <button className="btn btn-danger" onClick={this.deleteClass}><i className="fa-solid fa-right-from-bracket"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <JoinClassModal />
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

export default StudentClasslist;
