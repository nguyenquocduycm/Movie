import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Signin from "../components/signin";
import Signup from "../components/signup";

function RouterMovie() {
    return(
        <Router>
            <Route exect path ="/" render = {()=>{
                return <Switch>
                    <Route path ="/signup">
                        <Signup/>
                    </Route>

                    <Route exect path="/">
                        <Signin/>
                    </Route>
                    
                </Switch> 
            }
            }>
            </Route>
        </Router>
    );
}
export default RouterMovie;