import React from "react";
import AddStudentModal from "../../components/modals/add-student-modal";
import EditStudentModal from "../../components/modals/edit-student-modal";
import InputMarkModal from "../../components/modals/input-mark";
import LogoutModal from "../../components/modals/logout-modal";
import Footer from "../../components/sections/footer";
import SearchBar from "../../components/sections/searchbar";
import SidebarLecturer from "../../components/sections/sidebar-lecturer";

class LecturerClassDetail extends React.Component {
    constructor(props){
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent(){
        var cf = window.confirm('Bạn muốn xóa sinh viên này ra khỏi lớp?');
        if (!cf) return;
    }

    render() {
        return (
            <div id="page-top">
                <div id="wrapper">
                    <SidebarLecturer />
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <SearchBar />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 mb-4">
                                        <h3>103175 - KỸ THUẬT LẬP TRÌNH</h3>
                                        <hr/>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-block btn-success" data-toggle="modal" data-target="#addStudentModal"><i className="fa fa-plus"></i> Thêm sinh viên</button>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-block btn-primary" data-toggle="modal" data-target="#importMarkModal"><i className="fa fa-file-import"></i> Nhập điểm</button>
                                    </div>
                                    <div className="col-md-3">
                                        <button className="btn btn-block btn-warning"><i className="fa fa-file-excel"></i> Xuất Excel</button>
                                    </div>
                                    <div className="col-md-12" style={{marginTop: "40px"}}>
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th width="5%">STT</th>
                                                    <th width="20%">Họ tên sinh viên</th>
                                                    <th width="10%">Mã sinh viên</th>
                                                    <th width="10%">Điểm giữa kỳ</th>
                                                    <th width="10%">Điểm cuối kỳ</th>
                                                    <th width="10%"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="student01">
                                                    <td>1</td>
                                                    <td>Nguyễn Văn C</td>
                                                    <td>20211140</td>
                                                    <td>7.5</td>
                                                    <td>8.0</td>
                                                    <td>
                                                        <button className="btn btn-warning" data-toggle="modal" data-target="#editStudentModal" ><i className="fa fa-fw fa-edit"></i></button>
                                                        <button className="btn btn-danger" onClick={this.deleteStudent}><i className="fa fa-fw fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr id="student01">
                                                    <td>2</td>
                                                    <td>Nguyễn Văn C</td>
                                                    <td>20211140</td>
                                                    <td>7.5</td>
                                                    <td>8.0</td>
                                                    <td>
                                                        <button className="btn btn-warning" data-toggle="modal" data-target="#editStudentModal" ><i className="fa fa-fw fa-edit"></i></button>
                                                        <button className="btn btn-danger" onClick={this.deleteStudent}><i className="fa fa-fw fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                                <tr id="student01">
                                                    <td>3</td>
                                                    <td>Nguyễn Văn C</td>
                                                    <td>20211140</td>
                                                    <td>7.5</td>
                                                    <td>8.0</td>
                                                    <td>
                                                        <button className="btn btn-warning" data-toggle="modal" data-target="#editStudentModal" ><i className="fa fa-fw fa-edit"></i></button>
                                                        <button className="btn btn-danger" onClick={this.deleteStudent}><i className="fa fa-fw fa-trash"></i></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <AddStudentModal />
                            <EditStudentModal />
                            <InputMarkModal />
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

export default LecturerClassDetail;