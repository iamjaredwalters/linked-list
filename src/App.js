import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LinkedList from './LinkedList/LinkedList';
import { Test, ListItems } from './ListItems';

class App extends Component {
    linkedList() {
        const List = new LinkedList();
        const seed = [
            'Ticking', 'away', 'the', 'moments', 'that', 'makeup', 'a', 'dull', 'day',
        ];

        // See the LinkedList with some data
        seed.map((value) => List.add(value));

        return List;
    }

    test() {
        // const display = ['this', 'is', 'test'].map((item) => {
        //     return <listItems key={item} value={item} />
        // });

        // return display;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <ListItems list={this.linkedList()}/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
