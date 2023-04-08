import React from 'react'
import Feed from '../Components/Forum/Feed'
import Sidebar from '../Components/Sidebar/Sidebar'
import Widgets from '../Components/Widget/Widgets'

const Forum = () => {
  return (
    <div className='forum_app'>
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Widgets/>
    </div>
  )
}

export default Forum
