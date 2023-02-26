import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { github_data } from './components/Github_authentication/Github_authentication';

// export const userName="12shivam219";
// export const token="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" ;

export let token_details=localStorage.getItem("data")
if(token_details==null) {
  token_details={}
}
else {
  token_details=JSON.parse(token_details)
}

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
    Authorization: `Bearer ${token_details.token}`,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

