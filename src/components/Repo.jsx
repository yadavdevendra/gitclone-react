import React, { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

export const Repo = ({ repo }) => {
  // const { state } = useLocation();
  const[users,setUsers] = useState([])

  useEffect(() => {
    fetch(repo)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  //  let { id } = useParams();
  //  console.log("param",);
  console.log(users);
  return (
    <>
      <div style={{ fontSize: "50px" }} className = "repocontainer">
         {users.map((item)=>{
          return (
            <div key={item.id} className="repourl">
              <p className="prepo">
                <span>{item.name}</span>
                <span>{item.updated_at}</span>
              </p>
            </div>
          );
         })}
      </div>
    </>
  );
};
