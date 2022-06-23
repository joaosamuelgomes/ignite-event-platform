import { ApolloProvider } from "@apollo/client"
import {Router} from "./Router"
import { client } from "./lib/apollo"
import { EventPlatform } from "./pages/EventPlatform"
import { BrowserRouter } from "react-router-dom"

function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
