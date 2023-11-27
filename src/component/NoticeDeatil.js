import "./Notice.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";

const NoticeDetail = () => {
    const [open,setOpen]=useState(false);

    return (
        <>
        <div className='container' style={{paddingTop: '80px'}}>

            <section className='section' style={{minHeight: '990'}}>

                <div className="boardTitle" >공지사항</div>
                
                <div className="postBox">
                    <div className="postTitleArea">
                        <div className="postTitle">신고제와 신고된 게시물, 회원의 제재처리 안내</div>
                        <div>
                            <img src={"/popover-icon.png" } alt="..." className="popoverIcon" onClick={()=>setOpen(!open)} id="Popover1"/>
                            <Popover  className="popover" placement="bottom" isOpen={open} target="Popover1" toggle={()=>setOpen(!open)}>
                                <PopoverBody className="popoverItem">숨김/해제</PopoverBody>
                                <PopoverBody className="popoverItem">수정</PopoverBody>
                                <PopoverBody className="popoverItem">삭제</PopoverBody>
                            </Popover><br/><br/><br/>
                        </div>
                    </div>
                    <div className="writeDateAndView">2023년 11월 19일  19:41<img src={"/view-icon.png" } alt="view" className="viewIcon"/>22</div>
                    <div className="postContent">
                    게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트?<br/>
                    게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트<br/><br/><br/>

                    게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트게시글 내용 텍스트 줄바꿈처리줄바꿈처리줄바꿈처리
                    </div>

                </div>

            </section>

        </div>
        </>
    );
}
export default NoticeDetail;