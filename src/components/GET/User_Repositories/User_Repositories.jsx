import { gql, useQuery } from "@apollo/client";
import React from 'react'
import { userName } from "../../..";

const repositories = gql`
query repositories($username:String!) {
    user(login:$username) {
        name 
        repositories (first:50) {
            nodes {
                id
                name
                url
                primaryLanguage{name}
                visibility
            }
        }
    }
}

`



export default function User_Repositories() {
    const { loading, error, data } = useQuery(repositories,
        { variables: { username: userName} })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const { nodes } = data.user.repositories
    return (

        <ul>
            {
                nodes.map((data) => (
                    <a href={data.url} className="text-white">{data.name}</a>
                ))
            }
        </ul>
    )
}
