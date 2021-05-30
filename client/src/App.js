import Paperbase from './components/Dashboard/Paperbase';
import { BrowserRouter, } from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>
            <Paperbase />
        </BrowserRouter>

    //     <div className="App container">
    //     <h1>Welcome to my app</h1>
    //     <Switch>
    //       <UnauthenticatedRoute
    //         path="/login"
    //         component={Login}
    //         appProps={{ isAuthenticated }}
    //       />
    //       <AuthenticatedRoute
    //         path="/todos"
    //         component={Todos}
    //         appProps={{ isAuthenticated }}
    //       />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </div>
    ) 
}

export default App;