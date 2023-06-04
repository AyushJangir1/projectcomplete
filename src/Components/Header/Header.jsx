import {React,useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Row, Col } from "reactstrap";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import './Header.scss';
import Avatar from '@mui/material/Avatar';
// import StringAvatar from '@mui/material/StringAvatar'

export default function Header(props) {
  const [loginStatus, setLoginStatus] = useState(props.value1);
  // const [registerStatus, setRegisterStatus] = useState(false);
  useEffect(()=>{
      setLoginStatus(props.value1);
      console.log(localStorage.getItem('username'));
  },[props.value1]);
  
  return (
    <>
      <div className='navbar'>
        <div className="div1">
          <img alt="MBM Logo" className="img1" src="https://www.mbmalumni.org/images/mbmlogo.jpg" />
        </div>
        <div className="div2">
          <span>&nbsp;MBM Engineering College Hostels</span><br />
          <span3>&nbsp;&nbsp;Arora Circle, Ratanada, Jodhpur-342 011<br />
            <hr style={{ color: 'white', height: '1px' }} />
            <span3>&nbsp;&nbsp;Email: mbmhostel@yahoo.com, connect@mbmhostelauthority.org<br />
              <span3>&nbsp;&nbsp;Mobile:&nbsp;8777071047&nbsp;&nbsp;Phone:&nbsp;033-24567890
              </span3></span3></span3>
        </div>
        {(loginStatus==false )?
        <div className="div3" >
        <div className="link">
          <Link to="/sign-in-page" title="Open Login Form, Members will be able to view all links only after login">
            Log IN
          </Link>
          <br />
          <Link to="/sign-in-page" title="Open New Member Registration form">REGISTER</Link>		
        </div>
      </div>
      :<div>
        <Avatar>{localStorage.getItem('username')[0]}</Avatar>
        <Link to="/sign-in-page" title="Open Login Form, Members will be able to view all links only after login" style={{ color: 'white' }}>
            Log Out
          </Link>
          </div>
      }

    </div>
        
    </>
  );
}