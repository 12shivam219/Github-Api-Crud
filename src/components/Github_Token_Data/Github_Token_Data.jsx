import { gql, useQuery } from '@apollo/client'
import React from 'react'

const getFiles = gql`

query ($owner: String!, $name: String!, $expression: String!) {
  repository(owner: $owner, name: $name) {
    object(expression: $expression) {
      ... on Tree {
        entries {
          name
          type
          size
          object{
            ... on Tree{
              entries {
                name
                type
                size}
              }
            }
          }
        }
      }
    }
  }
  
  `

  export default function Github_Token_Data() {

  const { loading, error, data } = useQuery(getFiles, {
    variables: {
      owner: "12shivam219", name: "Store", expression: "HEAD:"
    }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  // const names = data.repository.object.entries;

  const entries = data?.repository?.object?.entries;
console.log(entries)
  return (
    <ul>
  {entries.map(entry => {
    const { type, name } = entry;
    const isFolder = type === 'tree';
    const isFile = type === 'blob';

    return (
      <li key={name} className="text-white">
        <span className={isFolder ? 'folder' : 'file'}>{name}</span>
      </li>
    );
  })}
</ul>
  );
  
}
