import React from 'react';
import './App.css';
import {removeTaskAC, removeTaskACThunk} from "./features/TodolistsList/TasksReducer";
import {useDispatch} from "react-redux";
import {Todolist} from "./features/TodolistsList/Todolist/Todolist";
import {useAppSelector} from "./app/store";

function App() {
    // We are not needing to get state here now
    // and then to put it by props
    // so, we are transferring it to Todolist.tsx

    let dispatch = useDispatch() // we be usefully here

    function removeTask(id: string) {
        dispatch(removeTaskACThunk(id))
    }

    let isError = useAppSelector<string | null>(state => state.app.isError)


    return (
        <div className="App">


        </div>
    );
}

export default App;
