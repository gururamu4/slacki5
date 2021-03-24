import React from 'react'
import './SideNavItem.css'
import { useHistory } from 'react-router-dom';
import db from './firebase';

function SideNavItem({ Icon, title, id, addChannelOption }) {
    const history = useHistory();
    const onChannelSelected = () => {
        if(id) {
            console.log({id})
            history.push(`/room/${id}`);
        } else {
            history.push(title)
        }
    }
    const addChannel = () => {
        const channelName = prompt(`enter your channel name`);
        console.log(channelName);
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    return (
        <div className="sideBarOptions" onClick={addChannelOption ? addChannel : onChannelSelected}>
            {Icon &&
                <Icon className="sideBarOptions__icon" />
            }
            {Icon ?
                (<h3 className="channelName-title">{title}</h3>
                ) : (
                    <h3 className="sideBarOptions__channel">
                        <span className="sideBarOptions__hash">#</span>
                        {title}
                    </h3>
            )}
        </div>
    )
}

export default SideNavItem
