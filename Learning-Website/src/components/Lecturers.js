import React, { Fragment, useState, useEffect } from 'react';
import { Avatar, Card, Skeleton, Row, Col } from 'antd'
import { EllipsisOutlined, LoadingOutlined, MessageOutlined  } from '@ant-design/icons';
import axios from 'axios';



export default function Users() {

    const { Meta } = Card;
    const [loading, setLoading] = useState(true)  
    const [userInfo, setuserInfo] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setuserInfo(response.data)
            })
            .catch((error) => {
                console.log('error', error)

            })
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])


    return (
        <div  style={{'height':'auto', 'backgroundColor':'black'}} >
                <Row justify="center" > 
                    {userInfo.length > 0 ?

                        userInfo.map((user, index) => {
                            let url = `https://joeschmoe.io/api/v1/` + index
                            return (
                                <Fragment>

                                    <Col lg={8} md={8}sm={24}>
                                        <Card
                                            style={{ width: 300, marginTop: 16 }}
                                            actions={[
                                                <MessageOutlined key="message" />,
                                                <EllipsisOutlined key="ellipsis" />,
                                            ]}
                                        >
                                            <Skeleton loading={loading} avatar active>
                                                <Meta
                                                    avatar={<Avatar src={url} />}
                                                    title={user.name  } 
                                                    description={user.email}
                                                />
                                            </Skeleton>
                                        </Card>
                                    </Col>

                                </Fragment>
                            )

                        })

                        : <LoadingOutlined style={{ fontSize: '50px', top:'50vh' }} />}
                </Row>
            
        </div>
    )
}

