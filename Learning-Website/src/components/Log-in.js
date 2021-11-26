import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd';

import './Log-in.css'
export default function LogIn() {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    return (
        <div >
            <Row>
                <Col xs={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }}>

                    <section className='login-container'>
                        <br />
 
                         <form className='form'>

                         <label className='label' for="username"><p className='star'>*</p> <p className='lableText'> Username:</p></label> <br />
                            <input className='input-box' autocomplete='off' type="text" id="username" name="username" required /><br /><br />
                            <label className='label' for="pwd"><p className='star'>*</p> <p className='lableText'> Password:</p></label><br />
                            <input className='input-box' type="password" minlength={8} id="pwd" name="pwd" 	required /><br /><br />
                            <Button className='login-button'  htmlType="submit" shape="round" size='large' onClick={onFinish}>
                                Log In
                            </Button>
                        </form>
                        <br />
                    </section>
                </Col> </Row>
        </div>
    )
}
