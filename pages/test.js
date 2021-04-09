import React from 'react';
import { render } from 'react-dom';

export default class Test extends React.Component {
    render() {
        // No need to wrap list items in an extra element!
        return <ul>
            <List />
        </ul>
      }
}

function List() {

        return [
            // Don't forget the keys :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
        ];
}