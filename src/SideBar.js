import React, { useEffect, useState } from 'react'
import './SideBar.css'
import SideNavItem from './SideNavItem';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PeopleIcon from '@material-ui/icons/People';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase'
import { useStateValue } from './stateProvider';


function SideBar() {

    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();
    console.log(user);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapShot => {
            setChannels(
                snapShot.docs.map(doc => (
                    {
                        name: doc.data().name,
                        id: doc.id
                    }
                ))
            )
        })
    }, []);

    console.log(channels)
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>web mall</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                {/* notes icons */}
                <CreateIcon />
            </div>
            {/* sidenNav items */}
            <SideNavItem Icon={InsertCommentIcon} title="Comments" />
            <SideNavItem Icon={InboxIcon} title="Mentions and Reactions" />
            <SideNavItem Icon={DraftsIcon} title="Saved Items" />
            <SideNavItem Icon={BookmarkIcon} title="Channel Browser" />
            <SideNavItem Icon={PeopleIcon} title="People & user groups" />
            <SideNavItem Icon={AppsIcon} title="Apps" />
            <SideNavItem Icon={FileCopyIcon} title="File Browser" />
            <SideNavItem Icon={ExpandLessIcon} title="Show Less" />
            <hr />
            <SideNavItem Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SideNavItem Icon={AddIcon} title="Add channel" addChannelOption={true}/>
            {
                channels.map(channel => (
                    <SideNavItem id={channel?.id} title = {channel?.name} key = {channel?.id}/>
                ))
            }

            {/* <SideNavItem title="channel"/> */}
        </div>
    )
}

export default SideBar
