import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {changeCount} from "../reducers/repoReducer";

const App = () => {
    const {count} = useSelector(state => state.repo)
    const dispatch = useDispatch()

    return (
        <div className={'app'}>
            React is Working
            <button onClick={() => dispatch(changeCount())}>Change counter</button>
            <div>
                <h1>Count: {count}</h1>
            </div>
        </div>
    );
};

export default App;
