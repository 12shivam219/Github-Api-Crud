import { gql, useQuery } from "@apollo/client";
import React from 'react'
import { github_data } from "../../Github_authentication/Github_authentication";

const repositories = gql`
query repositories($username:String!) {
    user(login:$username) {
        name 
        repositories (first:50) {
            nodes {
                id
                name
                url
            }
        }
    }
}

`



export default function User_Repositories() {
    const { loading, error, data } = useQuery(repositories,
        { variables: { username: github_data["userName"] } })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const {nodes}=data.user.repositories
    return (
        
        <ul>
        {
            nodes.map((data)=>(
                <li key={data.name}>{data.id}</li>
            ))
        }
        </ul>
    )
}
