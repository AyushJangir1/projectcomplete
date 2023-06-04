import React,{useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import './StudentDashboard.scss';
import Axios from 'axios';
const Account=()=>{
     const [student, setStudent] = useState("");
        const data =()=>{ Axios.post("http://localhost:3001/studentprofile",{
            email:localStorage.getItem('email'),
            password:localStorage.getItem('password')
            }).then((response)=>{
                setStudent(response.data[0]);
                // console.log(response.data[0].email);
                }
            )
        };
        const state = {
            userRollNo: '20UECC8004',
            userFirstName: 'Aditya',
            userMiddleName: 'Singh',
            userLastName: 'Shekhawat',
            userAddress: 'Guha Park,Kolkata',
            userMobileNumber: '8777071047',
            userCategory: 'General',
            userEmailId: localStorage.getItem('email'),
            userCity: 'Kolkata',
            userState: 'West-Bengal',
            userMartialStatus: 'Single',
            userYear: 'IV',
        };
        useEffect(() => {
            data();
            // eslint-disable-next-line
          },[]);
            return (
                <div className='componentColor'>
                    <div style={{ backgroundColor: '#99cc99' }}>
                        <div>
                            <marquee behavior="scroll" direction="left" scrollamount="4,0">
                                <font size="5"><b> (1)</b></font>&nbsp;<span style={{ color: '#000080', fontSize: '20px', fontStyle: 'oblique' }}>
                                    <strong>The respective informations and updates on the Hostel Allotment Dates and the respective rank lists will be displayed on the dashboard of the applicable students. In addition to that, the fee withdrawal procedures are neglected for now !!!!!</strong>
                                </span>
                            </marquee>
                        </div>
                        <div style={{ display: 'flex', gap: '7%', marginTop: '2px', backgroundColor: '#99cc99', height: '40px', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
                            <Link to="/studentDashboard"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Home</button></Link>
                            <Link to="/faqs"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>FAQs</button></Link>
                            <Link to="/messAndLodging"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Mess</button></Link>
                            <Link to="/account"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Account</button></Link>
                            <Link to="/hostelForm"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Hostel Form</button></Link >
                            <Link to="/helpDesk"><button style={{ backgroundColor: '#004488', color: 'yellow', border: '0.5px', borderRadius: '20%' }}>Help Desk</button></Link >
    
                        </div >
                    </div>
                    <Row className='m-0'>
                        <Col>
                            <br />
                            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <h4><u>Account Details</u></h4>
                            </div>
                            <br />
                            <div className='AccountList'>
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}>Roll No. :</span>
                                    <Input type="text" value={student.rollno} size="sm" style={{ width: '200px' }} disabled />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}>First Name :</span>
                                    <Input type="text" value={student.firstname} size="sm" style={{ width: '200px' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}>Middle Name :</span>
                                    <Input type="text" value={student.middlename} size="sm" style={{ width: '200px' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Last Name :</span>
                                    <Input type="text" value={student.lastname} size="sm" style={{ width: '200px' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Mobile Number :</span>
                                    <Input type="number" value={student.mobilenumber} size="sm" style={{ width: '200px' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Category :</span>
                                    <Input type="text" value={student.category} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Marital Status :</span>
                                    <Input type="text" value={student.maritalstatus} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Year :</span>
                                    <Input type="text" value={student.year} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Email Id :</span>
                                    <Input type="text" value={student.email} size="sm" style={{ width: '200px' }} />
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> State :</span>
                                    <Input type="text" value={student.state} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> City :</span>
                                    <Input type="text" value={student.city} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                    <span style={{ color: 'black' }}> Address :</span>
                                    <Input type="textarea" value={student.address} size="sm" style={{ width: '200px' }}>
                                    </Input>
                                </div>
                                <br />
                                <div style={{ display: 'flex', gap: '5%', justifyContent: 'center' }}>
                                {/* <Button color="success">Save</Button>
                                <Button color="danger">Reset</Button> */}
                                </div>
    
                            </div>
                
                            <br /><br /><br />
                        </Col>
                    </Row>
    
                </div >
            );
    };
    
        

export default Account;