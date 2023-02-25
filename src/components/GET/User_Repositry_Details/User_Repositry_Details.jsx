import { gql, useQuery } from "@apollo/client";
import React from 'react';

const userRepoDetailsAndContributors = gql`
  query userRepoDetailsAndContributors($owner: String!, $name: String!) {
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
      collaborators(first:10) {
        nodes{
          name
        }
      }
    }
  }
`;

export default function User_Repositry_Details({ owner, name }) {
  const { loading, error, data } = useQuery(userRepoDetailsAndContributors, {
    variables: { owner, name }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { description, url, forkCount, stargazerCount, forks, collaborators } = data.repository;
  return (
    <>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{url}</li>
        <li>{forkCount}</li>
        <li>{stargazerCount}</li>
        <li>{forks.totalCount}</li>
        <li>{collaborators.nodes.map((node) => node.name).join(', ')}</li>
      </ul>
    </>
  );
}
