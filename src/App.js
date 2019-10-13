import React from 'react';
import './App.scss';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import routes from './router';
import Head from './layout/head';
export default function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <div className="app-head">
                    <Head></Head>
                </div>
                <div className="app-content">
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}