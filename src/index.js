import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { github_data } from './components/Github_authentication/Github_authentication';

export const userName="12shivam219";
export const token="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" ;

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
    Authorization: `Bearer ${token}`,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

