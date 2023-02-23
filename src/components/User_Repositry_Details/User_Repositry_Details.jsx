import { gql } from "@apollo/client";
import React from 'react'
import { useQuery } from '@apollo/client';

const use_User_Repo_Details =gql`
query use_User_Repo_Details($owner:String!,$name:String!) {
    repository(owner:$owner, name:$name) {
        name
        description
        url
        forkCount
        stargazerCount
        forks(first: 1){
            totalCount
            nodes{
              name
              allowUpdateBranch
              nameWithOwner
              url
            }
          }
      }
}

`

export default function User_Repositry_Details({owner,name}) {

   const {loading,error,data}= useQuery(use_User_Repo_Details,{
        variables:{owner,name}
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    const {description ,url,forkCount,stargazerCount,forks}=data.repository 
    console.log(data)

  return (
    <>
    
    <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{url}</li>
        <li>{forkCount}</li>
        <li>{stargazerCount}</li>
        <li>{forks.totalCount}</li>
    </ul>
    </>
  )
}
