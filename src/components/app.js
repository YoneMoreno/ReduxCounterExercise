import React, {Component} from 'react';
import ShowCounter from "../containers/ShowCounter";
import AddButton from "../containers/AddButton";

export default class App extends Component {
    render() {
        return (
            <div>
                <ShowCounter/>
                <AddButton/>
            </div>
        );
    }
}
