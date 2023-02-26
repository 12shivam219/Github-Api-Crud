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

export default function Create_New_Repositry() {


    const [name, setName] = useState('');
    const [description, setDescription] = useState("");
    const [visibility, setVisibility] = useState('PUBLIC')

    const [create_repositry, { loading, error, data }] = useMutation(createRepositry)

    if (loading) return <p>Loading...</p>;
    if (error) return <p className='text-white'>Error: {error.message}</p>;
    console.log(data)

    const handleSubmit = (e) => {
        e.preventDefault();
        create_repositry({ variables: { name: name, description: description, visibility: visibility } })
    };



    if (data?.createRepository?.repository) {
        return (
            setTimeout(() => {
                
            <div>
                <p>Repository created successfully!</p>
                <a href={data.createRepository.repository.url}>View on GitHub</a>
            </div>
              }, 3000)
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-4 rounded-lg">
                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="appearance-none bg-gray-900 border border-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-600"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="appearance-none bg-gray-900 border border-gray-700 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-800 focus:border-gray-600"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-white font-bold mb-2" htmlFor="visibility">
                        Visibility:
                    </label>
                    <div>
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500 h-5 w-5"
                                checked={visibility === 'PUBLIC'}
                                onChange={() => setVisibility(visibility === 'PUBLIC' ? 'PRIVATE' : 'PUBLIC')}
                            />
                            <span className="ml-2 text-white">{visibility === 'PUBLIC' ? ' Public' : ' Private'}</span>
                        </label>
                    </div>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Create repository
                </button>
            </form>


        </>

    )
}
