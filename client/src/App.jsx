/**
 * @file App.jsx
 * @author denglingbo
 *
 * Des
 */
import React from 'react';
import {
    BrowserRouter,
    Route,
} from 'react-router-dom';
import Editor from './pages/editor';
import Viewer from './pages/viewer';
import List from './pages/lists/App';

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
};

const supportsHistory = 'pushState' in window.history;

const App = () => (
    <BrowserRouter
        forceRefresh={!supportsHistory}
        getUserConfirmation={getConfirmation}
        keyLength={12}
    >
        <div>
            <Route exact path="/" component={List} />
            <Route exact path="/edit/:id" component={Editor} />
            <Route exact path="/new" component={Editor} />
            <Route exact path="/view/:id" component={Viewer} />
            <Route exact path="/lists" component={List} />
            <Route exact path="/lists/:type" component={List} />
            <Route exact path="/mobile/edit/:id" component={Editor} />
            <Route exact path="/mobile/new" component={Editor} />
        </div>
    </BrowserRouter>
)

export default App;
