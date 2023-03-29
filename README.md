# GitHub API Demo Project

This is a demo project that showcases various scenarios that can be implemented using the GitHub API. The project also includes a user interface (UI) that allows users to interact with the API and view the results.


## Getting Started

# Prerequisites

To run this project, you will need the following:

. Node.js installed on your machine
. GitHub API token

## Installing

1. Clone the repository to your local machine.
2. Install the dependencies using the following command:

# npm install

3.Create a .env file in the root directory of the project and add the following:

REACT_APP_GITHUB_API_TOKEN=<your GitHub API token>
Replace <your GitHub API token> with your actual token.

# Running the App

### `npm start`

This will start the app in development mode and open it in your default browser. If it doesn't open automatically, navigate to [http://localhost:3000] in your browser.

# Scenarios

The following scenarios are implemented in this project:

1. List all repositories of a user
2. List all repositories of an organization
3. Filter repositories based on a keyword
4. Sort repositories by stars or forks
5. Paginate through the results
6. View detailed information of a repository
7. View pull requests of a repository
8. Create a new issue in a repository
9. Edit an existing issue in a repository
10. Delete an issue from a repository


# UI
The user interface of the app is designed to be simple and intuitive. Users can interact with the app by entering keywords in the search box, selecting options from the dropdown menus, and clicking on buttons.

# Routing
The app uses React Router to handle routing. When a user clicks on a repository in the list, they are taken to a detailed view of that repository. The URL is updated to reflect the current page, making it easy for users to share the link or navigate back to it later.

# Authentication
This app does not require authentication, but if you want to use the GitHub API for your own projects, you will need to authenticate your requests. You can do this by creating a personal access token in your GitHub account settings and adding it to your requests using the Authorization header.

# Built With
. React - The JavaScript library for building user interfaces
. React Router - The routing library for React
. GraphQl
. Github Api


# Authors

Shivam tiwari - [https://githubclonec.netlify.app/]
