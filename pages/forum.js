import React from 'react'
import Feed from '../Components/Forum/Feed'
import Sidebar from '../Components/Sidebar/Sidebar'
const Forum = () => {
  return (
    <div className='forum_app'>
      <Sidebar></Sidebar>
      <Feed></Feed>
    </div>
  )
}

export default Forum
