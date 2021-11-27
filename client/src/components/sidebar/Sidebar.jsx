import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import { Link } from "react-router-dom";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <a href='https://bit.ly/3D5EaBW' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <RssFeed htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Tech News</span>
            </a>
          </li>
          <li className="sidebarListItem">
          <a href='/messenger' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <Chat htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
            </a>
          </li>
          <li className="sidebarListItem">
          <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <PlayCircleFilledOutlined htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
            </a>
          </li>
          <li className="sidebarListItem">
          <a href='https://www.microsoft.com/en-in/microsoft-teams/log-in' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <Group htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">MSFT Teams</span>
            </a>
          </li>
          <li className="sidebarListItem">
          <a href='https://www.figma.com' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <Bookmark htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Figma</span>
            </a>
          </li>
          <li className="sidebarListItem"> 
          <a href='https://www.quora.com' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <HelpOutline htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </a>
          </li>
          <li className="sidebarListItem">
          <a href='https://www.linkedin.com/jobs/research-jobs/?originalSubdomain=in' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <WorkOutline htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </a>
          </li>
          <li className="sidebarListItem"> 
          <a href='https://www.meetup.com/find/?source=EVENTS&categoryId=546' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <Event htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </a>
          </li>
          <li className="sidebarListItem">
            <a href='https://www.udemy.com' target="_blank" rel="noopener noreferrer" style={{color:'black',textDecoration: 'none',}}>
            <School htmlColor="#682adb" className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
            </a>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <span classname="titleright"><b> Suggested Friends</b> </span>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
