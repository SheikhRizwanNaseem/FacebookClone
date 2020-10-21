import React from 'react'
import './Sidebar.css'

import SearchIcon from '@material-ui/icons/Search';
 import TextFieldsIcon from '@material-ui/icons/TextFields';
 import HomeIcon from '@material-ui/icons/Home';
 import FlagIcon from '@material-ui/icons/Flag';
 import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
 import StorefrontIcon from '@material-ui/icons/Storefront';
 import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Avatar , IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import MessageIcon from '@material-ui/icons/Message';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


function sidebar() {
    return (
        <div className="sidebar">
          
          <div className ="Row">
            <Avatar></Avatar>
            <h4>Rizwan</h4>

            </div>


        <div className ="Row">
        <IconButton style ={{color : "blue"}}>
            <LocalHospitalIcon></LocalHospitalIcon>
            </IconButton>
            <h5>Covid 19 Information center</h5>

            </div>

            <div className ="Row">
            <IconButton style ={{color : "blue"}}>
            <FlagIcon></FlagIcon>
            </IconButton>
            <h5>Pages</h5>

            </div>

            <div className ="Row">
            <IconButton style ={{color : "blue"}}>
            <SupervisorAccountIcon></SupervisorAccountIcon>
            </IconButton>
            <h5>Friends</h5>

            </div>

            <div className ="Row">
            <IconButton style ={{color : "blue"}}>
            <MessageIcon></MessageIcon>
            </IconButton>
            <h5>Messanger</h5>

            </div>

            <div className ="Row">
            <IconButton style ={{color : "blue"}}>
            <ForumIcon></ForumIcon>
            </IconButton>
            <h5>MerketPlace</h5>

            </div>
             
            <div className ="Row">
            <IconButton style ={{color : "blue"}}>
            <VideoLibraryIcon></VideoLibraryIcon>
            </IconButton>
            <h5>Videos</h5>

            </div>
        
        
        </div>
    )
}

export default sidebar
