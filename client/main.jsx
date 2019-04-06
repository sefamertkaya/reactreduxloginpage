import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '/imports/ui/App'
import Hello from '/imports/ui/Hello';
import {combineReducers, createStore} from "redux";
//reduxun create store adındaki metodunu import ettik.
import {Provider} from 'react-redux';
import {createBrowserHistory} from "history";
import userReducer from "./../imports/reducers/userReducer";
import loginReducer from "../imports/reducers/loginReducer";
import {Router, Route, Switch} from 'react-router-dom'

const RootReducers = combineReducers({
    control:userReducer,
    log:loginReducer
})

const store = createStore(RootReducers,{

},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());
store.subscribe(() => {console.log("degisti") });


Meteor.startup(() => {

    render(<Provider store={store}>

        <Router history={history}>
                    <Switch>
                        <Route exact path="/login" component={App}/>
                        <Route exact path="/welcome" component={Hello}/>
                    </Switch>

                </Router>
    </Provider>, document.getElementById('react-target'));
});
export const history = createBrowserHistory();