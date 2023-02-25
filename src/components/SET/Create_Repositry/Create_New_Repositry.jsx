import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const createRepositry = gql`
mutation Create($name:String!,$description:String!,$visibility:RepositoryVisibility!){
createRepository(input : {name:$name,description:$description,visibility:$visibility}) {
repository {
name
url
}
}
}
`
//onChange={(e) => { setPublicRepo(e.target.checked) }}


export default function Create_New_Repositry() {


    const [name, setName] = useState(' ');
    const [description, setDescription] = useState(" ");

    const [create_repositry, { loading, error, data }] = useMutation(createRepositry)

    const handleSubmit = (e) => {
        e.preventDefault();
        create_repositry({ variables: { name: name, description: description, visibility: "PUBLIC" } })
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log(data)

    if (data?.createRepository?.repository) {
        return (
          <div>
            <p>Repository created successfully!</p>
            <a href={data.createRepository.repository.url}>View on GitHub</a>
          </div>
        );
      }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >
                        Name:
                        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </label>
                </div>

                <div>
                    <label >
                        Description:
                        <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    </label>
                </div>


                {/* <div>
                    <label >
                        PUBLIC:
                        <input type="checkbox" checked={publicRepo} value={""}  /> 
                    </label>
                </div> */}

                <button type="submit">Create repository</button>
            </form>

        </>

    )
}
