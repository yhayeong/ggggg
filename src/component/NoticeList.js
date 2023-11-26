import { Table } from "reactstrap";

import "./Notice.css";
import React from "react";
import {Link} from "react-router-dom";

const Notice = () => {
    return (
        <>
        <div className='container' style={{paddingTop: '80px'}}>

            <section className='section'>

                <div className="boardTitle" >공지사항</div>

                <div className='row1st' style={{display:'flex', justifyContent:'space-between'}}>
                    총 101건 현재1/11페이지
                    <div className='searchBar'>
                        <input type="text"/>
                        <img src={"/searchIcon.png" } alt="검색" className="searchBtn" />
                    </div>
                </div>

                <Table className="table">
                    <tbody>
                        <tr>
                            <td>[공지]</td>
                            <td>MBT-WHY(Q&A) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>MB-TMI(자유) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>M-Battle-TI(밸런스게임) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>신고제와 신고된 게시물, 회원의 제재처리 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>신고제와 신고된 게시물, 회원의 제재처리 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>MBT-WHY(Q&A) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>MB-TMI(자유) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>M-Battle-TI(밸런스게임) 게시판 이용수칙 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>신고제와 신고된 게시물, 회원의 제재처리 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>[공지]</td>
                            <td>신고제와 신고된 게시물, 회원의 제재처리 안내</td>
                            <td>2023-11-16</td>
                            <td>17</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='paging'>
                    <span>&lt;</span>
                    <span className="active" style={{background:'#f8f8f8'}}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span>10</span>
                    <span>&gt;</span>
                </div>
            </section>

        </div>
        </>
    );
}
export default Notice;