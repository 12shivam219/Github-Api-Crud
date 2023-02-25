import { gql, useQuery } from "@apollo/client";
import React from 'react'
import { userName } from "../../..";

const Get_avatarUrl = gql`
query GetAvatar($userName:String!) {
    user(login:$userName) {
        avatarUrl
    }
}

`

export default function UserAvatar() {

    const { loading, error, data } = useQuery(Get_avatarUrl, { variables: { userName: userName } })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

    const avatarurl = data.user.avatarUrl;
    return (
        <>
            <img src={avatarurl} alt={userName} className="w-7 rounded-full"/>
        </>
    )
}
