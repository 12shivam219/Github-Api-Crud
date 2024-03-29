import { gql, useQuery } from "@apollo/client";
import React from 'react'
import { token_details} from "../../..";

const GET_USER_DETAILS = gql`
  query GET_USER_DETAILS($username: String!) {
    user(login: $username) {
      name
      bio
      location
      avatarUrl
      followers(first:100) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
      following(first:100) {
        totalCount
        nodes {
          login
          avatarUrl
        }
      }
    }
  }

`;


function User_Details() {


  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { username: token_details.userName },
  });



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const { name, bio, location, avatarUrl, followers, following } = data.user

  console.log(name)
  console.log(bio)
  console.log(location)

  return (
    <>

      <div className="user-details">
        <div className="user-img">
          <img src={avatarUrl} alt="" className="rounded-full" />
        </div>

        <div className="user-name mt-5 mb-4">
          <h1 className="text-white font-medium text-3xl">{name}</h1>
          <span className="text-[#3c3636] text-xl">{token_details.userName}</span>
        </div>

        <div className="user-bio">
          <p className="text-white">{bio}</p>
        </div>

        <div className="edit-btn block w-full bg-[#1b2322] rounded my-4">
                <button className="w-full text-[#a2b0af] font-semibold p-1.5">Edit Profile</button>
        </div>

        <div className="user-followers-following mb-5">
          <span className="text-[#c9d1d9]"><svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="fill-current inline-block mr-2">
            <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
          </svg>{followers["totalCount"]} follower</span>
          <span className="text-[#c9d1d9]"> {following["totalCount"]} following</span>
        </div>

        <div className="location">
          <span className="text-white"><svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" className="fill-current inline-block"><path fillRule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path></svg> {location}</span>
        </div>

      </div>
    </>
  );
}

export default User_Details