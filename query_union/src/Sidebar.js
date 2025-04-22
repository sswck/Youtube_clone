import logo from "./logo.svg";
import test_icon from "./assets/icons/test_icon.png";
import React from "react";
import { List, ListItem, ListItemText, Divider, ListItemIcon } from "@mui/material";

const SidebarButton = ({ icon, text, onClick }) => {
  return (
    <ListItem button onClick={onClick}>
      {icon && (
        <ListItemIcon>
          <img src={icon} alt={text} />
        </ListItemIcon>
      )}
      <ListItemText primary={text} />
    </ListItem>
  );
};
const Sidebar = () => {
  console.log(typeof logo);
  return (
    <div style={{ width: "300px", height: "100vh", overflowY: "auto", position: "fixed" }}>
      <List>
        <SidebarButton icon={logo} text="Home" onClick={() => {}} />
        <SidebarButton icon={test_icon} text="Explore" onClick={() => {}} />
        <SidebarButton icon={test_icon} text="Subscriptions" onClick={() => {}} />
        <Divider />
        <SidebarButton icon={test_icon} text="Library" onClick={() => {}} />
        <SidebarButton icon={logo} text="History" onClick={() => {}} />
        <SidebarButton icon={logo} text="Your Videos" onClick={() => {}} />
        <SidebarButton icon={logo} text="Watch Later" onClick={() => {}} />
        <SidebarButton icon={logo} text="Liked Videos" onClick={() => {}} />
        <Divider />
        <text style={{ color: "grey", fontSize: "14px" }}>SUBSCRIPTIONS</text>
        <Divider />
        <text style={{ color: "grey", fontSize: "14px" }}>MORE FROM YOUTUBE</text>
        <SidebarButton icon={logo} text="Youtube Premium" onClick={() => {}} />
        <SidebarButton icon={logo} text="Gaming" onClick={() => {}} />
        <SidebarButton icon={logo} text="Live" onClick={() => {}} />
        <SidebarButton icon={logo} text="Sports" onClick={() => {}} />
        <Divider />
        <SidebarButton icon={logo} text="Settings" onClick={() => {}} />
        <SidebarButton icon={logo} text="Report history" onClick={() => {}} />
        <SidebarButton icon={logo} text="Help" onClick={() => {}} />
        <SidebarButton icon={logo} text="Send feedback" onClick={() => {}} />
        <Divider />
      </List>
    </div>
  );
};

export default Sidebar;
