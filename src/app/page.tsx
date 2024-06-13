"use client"

import {ThemeProvider } from '@mui/material/styles';
import theme from "./components/theme";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './app';


export default function Home () {


const client = new ApolloClient({
  uri: 'http://localhost:4000/', 
  cache: new InMemoryCache(),
});



  return (
    <main>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
         <App/>
        </ThemeProvider>
      </ApolloProvider>
    </main>
  );
}
