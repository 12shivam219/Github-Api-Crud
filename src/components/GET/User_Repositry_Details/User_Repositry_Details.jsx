import { gql, useQuery } from "@apollo/client";
import React from 'react';
import { token_details } from "../../..";
// const userRepoDetailsAndContributors = gql`
//   query userRepoDetailsAndContributors($owner: String!, $name: String!) {
//     repository(owner:$owner, name:$name) {
//       name
//       description
//       url
//       forkCount
//       stargazerCount
//       forks(first: 1){
//         totalCount
//         nodes{
//           name
//           allowUpdateBranch
//           nameWithOwner
//           url
//         }
//       }
//       collaborators(first:10) {
//         nodes{
//           name
//         }
//       }
//     }
//   }
// `;


const repositories = gql`
query repositories($username:String!) {
    user(login:$username) {
        name 
        repositories (first:50) {
            nodes {
                id
                name
                url
                primaryLanguage{
                    name
                    color
                }
                visibility
            }
        }
    }
}
`


export default function User_Repositry_Details({ owner, name }) {
  // const { loading, error, data } = useQuery(userRepoDetailsAndContributors, {
  //   variables: { owner, name }
  // });

  const { loading, error, data } = useQuery(repositories,
    { variables: { username: token_details.userName } })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // const { description, url, forkCount, stargazerCount, forks, collaborators } = data.repository;
  return (
    <>
      <div className="repo-search-bar flex justify-between pt-5">
        <input type="search" placeholder="Find a repository..." className="w-3/5 p-2 rounded-md bg-[#a38e8e38]" />
        <div className="filters flex w-[250px] justify-around">
          <div className="type w-[60px] border-2 border-solid border-red-300 text-center">
            type
          </div>
          <div className="languages w-[100px] border-2 border-solid border-red-300 text-center">
            language
          </div>
          <div className="sort  w-[60px] border-2 border-solid border-red-300 text-center">
            Sort
          </div>
        </div>
        <div className="new-repo-create">
          <button>new</button>
        </div>
      </div>
    </>
  );
}
