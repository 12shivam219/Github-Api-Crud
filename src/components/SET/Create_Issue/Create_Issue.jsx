import { gql, useMutation } from "@apollo/client";
import React, { useState } from 'react'

const create_Issue = gql`
mutation CreateIssue($repositoryId: ID!, $title: String!, $body: String, $assigneeIds: [ID!], $labelIds: [ID!], $projectIds: [ID!]) {
    createIssue(input: { repositoryId: $repositoryId, title: $title, body: $body, assigneeIds: $assigneeIds, labelIds: $labelIds, projectIds: $projectIds }) {
      issue {
        title
        body
      }
    }
  }

`

export default function Create_Issue({ id }) {
    const [title, setTitle] = useState(" ");
    const [body, setBody] = useState(" ");

    const [createIssue] = useMutation(create_Issue, {
        onCompleted: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createIssue({
            variables: {
                repositoryId: id,
                title: title,
                body: body
            }
        })
            .then(() => {
                console.log('Issue created successfully!');
            })
            .catch((error) => {
                console.error('Error creating issue:', error);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <br />
                <label>
                    Body:
                    <textarea value={body} onChange={(event) => setBody(event.target.value)} />
                </label>
                <br />
                <button type="submit">Create Issue</button>
            </form>
        </>
    )
}
