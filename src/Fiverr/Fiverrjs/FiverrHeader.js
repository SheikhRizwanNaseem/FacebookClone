import React from 'react'
import {Avatar , IconButton} from '@material-ui/core'
import './FiverHeader.css'

function FiverrHeader() {
    return (
        <div className="Fheader">
        
                <div className="header__logo">
                    <h4>fiverr</h4>
                </div>
                <div className="header__details">
                <div className="header__opt">
                    <h4>Dashboard</h4>
                </div>
                <div className="header__opt">
                <h4>Messages</h4>
                </div>
                <div className="header__opt">
                <h4>Earnings</h4>
                </div>
                <div className="header__opt">
                <h4>Analytics</h4>
                </div>
                <div className="header__opt">
                <h4>Orders</h4>
                </div>
                <div className="header__opt">
                <h4>Community</h4>
                </div><div className="header__opt">
                <h4>More</h4>
                </div>
                </div>
               

                <div className="header__profile">
                <div className="header__inf">
                <h4>Switch to Buying</h4>
                <Avatar></Avatar>
                
                </div>

                </div>
         </div>
 
    
    )
}

export default FiverrHeader
