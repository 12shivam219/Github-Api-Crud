import { gql, useMutation } from "@apollo/client";
import React, { useState } from 'react'

const Pull_Request = gql`

mutation pull($input:CreatePullRequestInput!) {
    createPullRequest(input:$input) {
      pullRequest{
        id
        number
        title
        body
      }
    }
  }

`
export default function Create_Pull_Request() {
    const [title, setTitle] = useState(" ");
    const [body, setBody] = useState(" ");
    const [baseRefName, setBaseRefName] = useState('');
    const [headRefName, setHeadRefName] = useState('');

    const [createPullRequest, { loading, error, data }] = useMutation(Pull_Request)

    const handleSubmit = (e) => {
        e.preventDefault();
        createPullRequest({
            variables: {
                input: {
                    title: title,
                    body: body,
                    baseRefName: baseRefName,
                    headRefName, headRefName
                }
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Title"
                    required
                />
                <textarea
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                    placeholder="Description"
                    required
                />
                <input
                    type="text"
                    value={baseRefName}
                    onChange={(event) => setBaseRefName(event.target.value)}
                    placeholder="Base Branch"
                    required
                />
                <input
                    type="text"
                    value={headRefName}
                    onChange={(event) => setHeadRefName(event.target.value)}
                    placeholder="Head Branch"
                    required
                />
                <button type="submit">Create Pull Request</button>
            </form>
        </>
    )
}
