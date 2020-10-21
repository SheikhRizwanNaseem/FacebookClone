import React from 'react'
import './Story.css'
import {Avatar , IconButton} from '@material-ui/core'


function Story({ img, ProfileSrc , tittle}) {
    return (
        <div className="story">
             <Avatar className="avatar" src= {ProfileSrc}></Avatar>
             <img  src={img}  style={{width :"150px" , height: "250px"  }}></img>
              <h4>{tittle}</h4>
        </div>
    )
}

export default Story
