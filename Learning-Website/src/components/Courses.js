import React, { Fragment } from 'react'
import { Row, Col, Card, Image } from 'antd'
import { Link } from 'react-router-dom'
import './Courses.css'

const items = [
  {
    header: 'React Js ',
    description:
      'The React JS Course is a complete guide for React JS. Here, you will learn all the concepts required for becoming a front-end React JS developer',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
  },
  {
    header: 'Node JS',
    description:
      'Learning Node.js is a great way to get into backend web development, or expand your fullstack development practice. In this courses, you can learn the concepts and applications of this wildly useful JavaScript runtime.',
    image:'https://upload.wikimedia.org/wikipedia/commons/archive/d/d9/20170401104353%21Node.js_logo.svg',
  },
  {
    header: 'Angular',
    description:
      'Angular is one of the most popular frameworks for building client apps with HTML, CSS and TypeScript. If you want to establish yourself as a front-end or a full-stack developer, you need to learn Angular.',
    image:'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',

  },
  {
    header: 'Vue JS',
    description:
      'This bestselling course teaches the latest version of Vue (Vue.js 3) from the ground up and in great detail. We will cover all the core basics but we will not stop thereafter - this course also dives into advanced concepts like the Composition API introduced with Vue 3.',
    image:'https://upload.wikimedia.org/wikipedia/commons/archive/9/95/20170919082556%21Vue.js_Logo_2.svg',

  },
  {
    header: 'Laravel',
    description:
      'Laravel is the most popular choice among PHP developers these days. It is easiest to start with, most fun to use and very performant ecosystem of tools, that just lets you get the job done.Laravel can change the way you look at PHP in general.',
    image:'https://upload.wikimedia.org/wikipedia/commons/3/36/Logo.min.svg',

  },
  {
    header: 'PHP',
    description:
      'Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.',
    image:'https://upload.wikimedia.org/wikipedia/commons/archive/2/27/20100303222348%21PHP-logo.svg',

  },
]


export default function Courses() {
  const { Meta } = Card;

  return (
    <div>
      <div className="cards-container">
        <Row justify='center'>
          {
            items.map((course, index) => {
              return (
                <Col lg={8} sm={24}>
                  <Card
                  className='cardStyle'
                    style={{ width: 300,maxWidth:' 600' }}
                    cover={
                     
                      <img
                      className='cardCover'
                        alt="example"
                        src={course.image}
                      />
                    }
                    actions={[
                      <Link className='linklink'>Learn more</Link>
                    ]}
                  >
                    <Meta
                      title={course.header}
                      description={course.description}
                    />
                  </Card>
                  <br/>
                </Col>
              )
            })
          }

        </Row>
      </div >
    </div >
  )
}
