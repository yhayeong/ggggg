import { Nav, NavItem, NavLink, Table, Input } from "reactstrap";

import "./AdminNotice.css";
import React from "react";
import {Link} from "react-router-dom";

const AdminNoticeForm = () => {
    return (
        <>
        <div className='adminPage'>관리자 페이지
        <img src={"/gear_adminPage.png" } alt="" className="adminPageImg"/>
        </div>
        <div className='container' style={{paddingTop: '80px'}}>

            <Nav className="adminNav">
                <NavItem className="ml-auto">
                    <NavLink tag={Link} to="/menu1" className="navLink navActive">공지사항 목록</NavLink>
                </NavItem>
                <NavItem  className="ml-auto">
                    <NavLink tag={Link} to="/menu2" className="navLink">공지 등록/수정</NavLink>
                </NavItem>
                <NavItem  className="ml-auto">
                    <NavLink tag={Link} to="/menu3" className="navLink">신고 게시글</NavLink>
                </NavItem>
                <NavItem  className="ml-auto">
                    <NavLink tag={Link} to="/menu4" className="navLink">정지 회원</NavLink>
                </NavItem>
                <NavItem  className="ml-auto">
                    <NavLink tag={Link} to="/menu5" className="navLink">문의 답변</NavLink>
                </NavItem>
            </Nav>

            <section className='section'>
                <div className="sectionTitle">공지사항 목록</div>
                
            </section>
        </div>
        </>
    );
}
export default AdminNoticeForm;