import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [searchdata, setSearchdata] = useState([]);
  const [single, setSingle] = useState({});
  const [type, setType] = useState("");
  // const [users,setUsers] = useState([])
  // const[login , setLogin] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setSearchdata(data);
      });
  }, []);
  console.log(type);
  // console.log(single);
  useEffect(() => {
    fetch(`https://api.github.com/users/` + type)
      .then((response) => response.json())
      .then((data) => {
        setSingle(data);
        // console.log(data);
      });
  }, [type]);

  // console.log(single);

  const search = (value) => {
    if (value == "") {
      setSingle({});
      return;
    }

    const searchedItem = searchdata?.filter((item) => {
      if (item?.login !== null) {
        return item?.login.toLowerCase().indexOf(value.toLowerCase()) == -1
          ? false
          : true;
      } else return false;
    });
    setType(searchedItem[0].login);
  };
  return (
    <div className="home">
      <div className="mainsearch">
        <input
          className="search"
          type="search"
          placeholder="Search...."
          onChange={(e) => {
            search(e.target.value);
            // setType(e.target.value);
          }}
        />
      </div>
      {single && (
        <div className="card">
          <Avatar
            alt="data"
            src={single.avatar_url}
            sx={{ width: 200, height: 200 }}
          />
          <div className="visit"
            onClick={() => {
              navigate(`/profile/${single.id}`, { state: single });
            }}
          >
            Visit Profile
          </div>
          <p className="follow">{single.followers} Followers</p>
          <p className="follow">{single.following} Following</p>
          <p className="follow">{single.public_repos} Repo</p>
        </div>
      )}
    </div>
  );
};
