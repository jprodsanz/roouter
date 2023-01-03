import React from 'react'
import { Container } from 'react-bootstrap';
// import { Button, Card, Accordion,Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
// import notes, { } from "../../data/notes";
import TodoList from '../../components/TodoList';

const Lists = () => {
    return (
        <MainScreen title='Welcome Back...'>
            <div className="App">
                <TodoList />
            </div>
    </MainScreen>
        
);
};

export default Lists;