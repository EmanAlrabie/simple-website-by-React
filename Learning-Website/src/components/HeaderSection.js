import React from 'react'
import { Row, Col, Button } from 'antd';
import HearerImage from '../images/onlineStudy.png'
import './HeaderSection.css'
import { Link } from 'react-router-dom';


export default function HeaderSection() {
    return (
        <div>
            <Row>

               
                <Col className='header-image' lg={10} md={7} sm={24} xs={24}>  <img src={HearerImage} className='header-img' />
                </Col>
                <Col className='header-title' lg={14} md={10} sm={24} xs={23}>Hello And Welcome Here!<br />
                    <p className='header-content'>Here you can learn new and most programming languages for free! </p>
                   
                    <Button className='header-button' shape="round" size='large'>
                     <Link to='/log-in'>Get Start </Link>   
                    </Button>
                </Col>
            </Row>

        </div>
    )
}
