 import React from 'react'
 import './Header.css'
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

 function Header() {
     return (
         <div className="header">
                <div className="header__left">
                    <img src ="data:image/png;base64,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">
                    </img>
                    <div className="header__input">
                        <SearchIcon></SearchIcon>
                        <input placeholder="Search Here" type="text"></input>
                    </div>
                </div>
                <div className="header__middle">
                <div className="header__option">
                    <HomeIcon style={{color : "blue"}}></HomeIcon>
                </div>
                <div className="header__option">
                    <FlagIcon style={{color : "blue"}}></FlagIcon>
                </div>
                <div className="header__option">
                    <SubscriptionsIcon style={{color : "blue"}}></SubscriptionsIcon>
                </div>
                <div className="header__option">
                    <StorefrontIcon style={{color : "blue"}}></StorefrontIcon>
                </div>
                <div className="header__option">
                    <AccountCircleIcon style={{color : "blue"}}s></AccountCircleIcon>
                </div>
                </div>
               

                <div className="header__right">
                <div className="header__info">
                <Avatar></Avatar>
                <h4>Rizwan</h4>
                </div>
                <IconButton>
                <AddIcon style={{color : "blue"}}></AddIcon>
                </IconButton>
                <IconButton>
                <ForumIcon style={{color : "blue"}}></ForumIcon>
                </IconButton>
                <IconButton>
                <NotificationsIcon style={{color : "blue"}}></NotificationsIcon>
                </IconButton>
                <IconButton>
                <ExpandMoreIcon style={{color : "blue"}}></ExpandMoreIcon>
                </IconButton>


                </div>
         </div>
     )
 }
 
 export default Header
 