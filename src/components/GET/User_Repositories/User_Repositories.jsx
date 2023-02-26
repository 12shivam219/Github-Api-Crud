import { gql, useQuery } from "@apollo/client";
import React from 'react'
import { token_details } from "../../..";


const popularRepositories = gql`
query{
    search(query: "user:12shivam219 language:JavaScript ", type: REPOSITORY, first: 10) {
      nodes {
        ... on Repository {
            name
            url
            description
            visibility
            primaryLanguage{
              name
              color
            }
        }
      }
    }
  }
  
`

export default function User_Repositories() {

    // const { loading, error, data } = useQuery(repositories,
    //     { variables: { username: userName } })

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :</p>;

    // const { nodes } = data.user.repositories
    // console.log(nodes[0].name)
    // console.log(nodes[0].primaryLanguage.color)
    // console.log(nodes[0].primaryLanguage.name)
    // console.log(nodes[0].visibility)

    const { loading, error, data } = useQuery(popularRepositories)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return (
        <>
            <div className="heading ">
                <h1 className="text-[#b4c1cd] text-lg">Popular repositories</h1>
            </div>
            <div className="flex flex-wrap justify-between">
                {
                    data.search.nodes.map((r) => (
                        <div className="flex flex-col justify-between w-[48%] bg-[#16181bbd] border border-solid border-[#736f6f] p-2.5 rounded-lg my-3" key={r.name} >
                            <div className="flex justify-between">
                                <a href={r.url}> <h1 className="text-[#58a6ff]">{r.name}</h1></a>
                                <span className="flex items-center justify-center w-[58px] rounded-lg border border-solid border-[#736f6f] text-[#938c8c] text-xs font-semibold">{r.visibility}</span>
                            </div>
                            <div className="text-[#90969b] my-3">
                                <p>{r.description}</p>
                            </div>
                            <div className=""><span className={`bg-[${r.primaryLanguage.color}] w-[15px] h-[15px] inline-block rounded-full`}></span> <span className="text-[#90969b]">{r.primaryLanguage.name}</span></div>
                        </div>
                    ))
                }
            </div>

        </>

    );
}
