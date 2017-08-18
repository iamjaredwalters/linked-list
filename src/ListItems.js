import React, { Component } from 'react';

const Item = (props) => {
    return <li>{props.item}</li>;

};

const ListItems = (props) => {
    // Start at head of List
    const node = props.list.head;
    console.log(props.list.head);

    let display;

    // while (node.value.next) {
    //
    //     display.push(node.value)
    // }
    // return (
    //     <li>hi</li>
    // )
    // while (head.value) {
    //     console.log(head.value);
    // }
    return <li>test</li>;
};

export {
    Item,
    ListItems,
};
