import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { Repo } from "./Repo";
import {
  Groups,
  LocationOn,
  AttachEmail,
  Attachment,
  Twitter,
  LocationCity,
  AccessTimeFilled,
} from "@mui/icons-material";

export const Profile = () => {
  const [repo, setRepo] = useState(false);
  const [repo1, setRepo1] = useState(false);
  const [repo2, setRepo2] = useState(false);
  const [repo3, setRepo3] = useState(false);
  const [repo4, setRepo4] = useState(false);
  const [repo5, setRepo5] = useState(false);
  const { state } = useLocation();
  // console.log("state", state);
  return (
    <div className="containerprofile">
      <div className="profilecard">
        <Avatar
          alt="data"
          src={state.avatar_url}
          sx={{ width: 200, height: 200 }}
        />
        <p className="pdata">{state.login}</p>
        <p className="pdata">
          <Button>Following</Button>{" "}
        </p>

        <p className="pdata">
          <Groups /> {state.followers} Followers {state.following} Following
        </p>
        <p className="pdata">
          <LocationCity />
          {state.company}
        </p>
        <p className="pdata">
          <LocationOn />
          {state.location}
        </p>
        <p className="pdata">
          <AttachEmail />
          {state.email || NaN}
        </p>
        <p className="pdata">
          <Twitter />
          {state.twitter_username}
        </p>
        <p className="pdata">
          <Attachment />
          {state.url}
        </p>
        <p className="pdata">
          <AccessTimeFilled />
          {state.created_at}
        </p>
        
      </div>
      <div className="link">
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(true);
            setRepo1(false);
            setRepo2(false);
            setRepo3(false);
            setRepo4(false);
            setRepo5(false);
          }}
        >
          Overview
        </button>
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(false);
            setRepo1(true);
            setRepo2(false);
            setRepo3(false);
            setRepo4(false);
            setRepo5(false);
          }}
        >
          Repositries
        </button>
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(false);
            setRepo1(false);
            setRepo2(true);
            setRepo3(false);
            setRepo4(false);
            setRepo5(false);
          }}
        >
          Projects
        </button>
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(false);
            setRepo1(false);
            setRepo2(false);
            setRepo3(true);
            setRepo4(false);
            setRepo5(false);
          }}
        >
          Packages
        </button>
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(false);
            setRepo1(false);
            setRepo2(false);
            setRepo3(false);
            setRepo4(true);
            setRepo5(false);
          }}
        >
          Stars
        </button>
        <button
          className="repoprofile"
          onClick={() => {
            setRepo(false);
            setRepo1(false);
            setRepo2(false);
            setRepo3(false);
            setRepo4(false);
            setRepo5(true);
          }}
        >
          Sponsering
        </button>
        {repo == true ? <h3>Overview</h3> : ""}
        {repo1 == true ? <Repo repo={state.repos_url}/>: ""}
        {repo2 == true ? <h3>Project</h3> : ""}
        {repo3 == true ? <h3>Package</h3> : ""}
        {repo4 == true ? <h3>Star</h3> : ""}
        {repo5 == true ? <h3>Sponsering</h3> : ""}
      </div>
    </div>
  );
};
