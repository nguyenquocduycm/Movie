import React from 'react';
import { render } from 'react-dom';
import './index.css';
import RouterMovie from "./router/router";

class App extends React.Component {
    render() {
        return (   
            <div>
                <RouterMovie/>
            </div>
        )
    };
}

render(<App />, window.document.getElementById('app'));