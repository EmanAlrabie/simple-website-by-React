
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import {ThemeContext} from '../App.js'

export default function Home() {
  const [activeItem, setActiveItem]= useState('home' )

  const handleItemClick = (e, { name }) => setActiveItem(name) 

  
    const userName = useContext(ThemeContext)

    return (
      <div className='home-bar'>
        <Menu pointing secondary inverted>
       
          <Menu.Item  as={Link} to='/'
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
       
          <Menu.Item  as={Link} to='/lecturers'
            name='Lecturers'
            active={activeItem === 'Lecturers'}
            onClick={handleItemClick}
          />
         
          <Menu.Item as={Link} to='/courses'
            name='Courses'
            active={activeItem === 'Courses'}
            onClick={handleItemClick}
          />
          
          
        </Menu>

<br/>
      
      </div>
    )
  }
