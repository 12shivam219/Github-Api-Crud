import { gql } from "@apollo/client";
import React from 'react'
import { github_data } from "../Github_authentication/Github_authentication";
import { useQuery } from '@apollo/client';


const GET_USER_DETAILS = gql`
  query GET_USER_DETAILS($username: String!) {
    user(login: $username) {
      name
      bio
      location
    }
  }

`;


function User_Details() {
    const { loading, error, data } = useQuery(GET_USER_DETAILS, {
        variables: { username: github_data["userName"] },
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const {name,bio,location}=data.user 

    return (
        <>
            <ul>
                <li>{name}</li>
                <li>{bio}</li>
                <li>{location}</li>
            </ul>
        </>
    );
}

export default User_Details