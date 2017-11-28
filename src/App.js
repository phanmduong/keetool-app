import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/index';
import {Main} from './navigator/appRouter';
import Test from './modules/test/testScreen';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
export default App;