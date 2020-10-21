import React from 'react'
import './MessageContainner.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';
import {Avatar , IconButton} from '@material-ui/core'


function MessageContainner() {
    return (
        <div className="messagecontainner">

            <div className="Input">
            <input placeholder="       Whats on your mind , Rizwan Naseem ?"  type="text" ></input>

            </div>
            <div className="Icons">
                <div className="VideoIcon">
                 <IconButton>
                 <VideocamIcon style={{color : "red"}}> 
                 </VideocamIcon>
                 </IconButton>
             <h4>Video</h4>
                </div>
                <div className="PhotoIcon">
                    <IconButton>
                    <PhotoIcon style={{color : "green"}}>  
                    </PhotoIcon>
                    </IconButton>
            <h4>Upload Photo</h4>
                </div>
                <div className="MoodIcon">
                    <IconButton>
                    <MoodIcon  style={{color : "green"}}>
                    </MoodIcon>
                    </IconButton>
             <h4>Activity</h4>
                </div>
             
            
             
            </div>
        </div>
    )
}

export default MessageContainner
