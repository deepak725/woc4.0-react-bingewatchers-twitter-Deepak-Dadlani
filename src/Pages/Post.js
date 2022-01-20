import { Avatar } from '@material-ui/core'
import { BsFillChatRightDotsFill } from "react-icons/bs";
import {MdVerified} from "react-icons/md";
import React, {forwardRef} from 'react'


const  Post = forwardRef(
    ({
        displayName,
        verified, 
        text, 
        avatar
}, ref) => {
    return (
        <div className = "post" ref={ref}>
            <div className = "post__avatar">
                <Avatar 
                    src = {avatar}
                />
            </div>
            <div className = "post__body">
                <div className = "post__header">
                    <div className = "post__headerText">
                            <span className = "post__headerSpecial">
                                {verified && <MdVerified />}
                               <a href='/' className='displayname' > @{displayName} </a>
                            </span>
                    </div>
                    <div className = "post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                
                <div className = "post__footer">
                    <BsFillChatRightDotsFill />
                </div>
            </div>    
        </div>
    )
})

export default Post