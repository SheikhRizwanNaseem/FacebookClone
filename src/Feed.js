import React from 'react'
import './Feed.css'
import MessageContainner from './MessageContainner'

import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel></StoryReel>
            <MessageContainner></MessageContainner>
        </div>
    )
}

export default Feed
