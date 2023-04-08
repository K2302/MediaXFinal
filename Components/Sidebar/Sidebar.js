import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";


function Sidebar() {

  return (
    <div className="sidebar">

      <SidebarOption Icon={HomeIcon} text="SportVerse" />
      <SidebarOption Icon={SearchIcon} text="TechVerse" />
      <SidebarOption Icon={NotificationsNoneIcon} text="PoliVerse" />
      <SidebarOption Icon={MailOutlineIcon} text="MusiVerse" />
      <SidebarOption Icon={BookmarkBorderIcon} text="LitVerse" />
      

      {/* Button -> Tweet */}
      {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>
        
      </Button> */}
    </div>
  );
}

export default Sidebar;
