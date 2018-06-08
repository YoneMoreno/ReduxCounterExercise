import React, {Component} from 'react';
import ShowCounter from "../containers/ShowCounter";
import AddButton from "../containers/AddButton";
import MinusButton from "../containers/MinusButton";

export default class App extends Component {
    render() {
        return (
            <div>
                <ShowCounter/>
                <AddButton/>
                <MinusButton/>
            </div>
        );
    }
}
