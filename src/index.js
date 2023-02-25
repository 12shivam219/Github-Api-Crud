import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { github_data } from './components/Github_authentication/Github_authentication';


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          user:{
            keyArgs:[],
            merge(existing=[],incoming){
              return { ...existing, ...incoming }
            }
          }
        }
      }
    }
  }),
  headers: {
    Authorization: `Bearer ${github_data["token"]}`,
  },
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

