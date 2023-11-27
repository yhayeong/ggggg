import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import { Button } from "reactstrap";

const Header = () => {
    const style = {backgroundColor:'white', width:'100%', position:'fixed', left:0, top:0, zIndex:10, borderBottom: '1px solid #999999'};

    return(
        <div style={style}>
            <ul className='nav-items' style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{marginLeft: '100px'}}>
                    <li className='nav-item'>
                    <Link to={"/"} id="logo">MBTIsland<img src={"/desert-island.png"} alt='로고' width='30px' style={{marginLeft: '15px'}}/></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mbtWhy"}>MBT-WHY</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mBattleTi"}>M-Battle-TI</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/mbTmi"}>MB-TMI</Link>
                    </li>
                </div>
                <div style={{marginRight: '120px'}}>
                    <li className='nav-item'>
                        <Link to={"/login"}><Button>로그인</Button></Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/join"}><Button>회원가입</Button></Link>
                    </li>
                </div>
            </ul>
            
        </div>
    )

};

export default Header;
