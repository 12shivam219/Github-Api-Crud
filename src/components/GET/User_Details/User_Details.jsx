import { gql, useQuery } from "@apollo/client";
import React from 'react'
// import { github_data } from "../../Github_authentication/Github_authentication";
import { userName } from "../../..";

const GET_USER_DETAILS = gql`
  query GET_USER_DETAILS($username: String!) {
    user(login: $username) {
      name
      bio
      location
      avatarUrl
    }
  }

`;


function User_Details() {


  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { username: userName },
  });



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { name, bio, location, avatarUrl } = data.user
  console.log(avatarUrl);
  return (
    <>

      <div className="user-details">
        <div className="user-img">
          <img src={avatarUrl} alt="" className="rounded-full"/>
        </div>
        <div className="user-name">
          <h1>{name}</h1>
        </div>
        <div className="user-bio">
          <p>{bio}</p>
        </div>
        <div className="location">
          <span>{location}</span>
        </div>
      </div>
    </>
  );
}

export default User_Details