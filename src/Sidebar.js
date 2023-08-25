import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  AddSharp,
  CreateSharp,
  ExpandMoreSharp,
  FiberManualRecordSharp,
} from "@mui/icons-material";
import { InsertCommentSharp } from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { InboxSharp } from "@mui/icons-material";
import { DraftsSharp } from "@mui/icons-material";
import { BookmarkBorderSharp } from "@mui/icons-material";
import { PeopleAltSharp } from "@mui/icons-material";
import { AppsSharp } from "@mui/icons-material";
import { FileCopySharp } from "@mui/icons-material";
import { ExpandLessSharp } from "@mui/icons-material";

import db from "./firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    // Run this code once when the sidebar component loads
    onSnapshot(collection(db, "rooms"), (snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>VESIT</h2>
          <h3>
            <FiberManualRecordSharp />
            {user?.displayName}
          </h3>
        </div>
        <CreateSharp />
      </div>
      <SidebarOption Icon={InsertCommentSharp} title="threads" />
      <SidebarOption Icon={InboxSharp} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsSharp} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderSharp} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltSharp} title="People & user groups" />
      <SidebarOption Icon={AppsSharp} title="Apps" />
      <SidebarOption Icon={FileCopySharp} title="File browser" />
      <SidebarOption Icon={ExpandLessSharp} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreSharp} title="Channels" />
      <hr />
      <SidebarOption Icon={AddSharp} addChannelOption title="Add Channel" />

      {/* Connect to DB and list all the channels  */}
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
