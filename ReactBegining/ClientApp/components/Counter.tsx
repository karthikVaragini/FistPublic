import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Counter extends React.Component<RouteComponentProps<{}>> {

    state = { counter: 0 };

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });

        //To Avoid Race Condition use this
        //this.setState((prevState) => ({
        //    counter: prevState.counter + 1

        //}));

    };

    render() {
        return <button onClick={this.handleClick}>{this.state.counter}</button>

        
    }

};

//interface CounterState {
//    currentCount: number;
//}

//export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
//    constructor() {
//        super();
//        this.state = { currentCount: 0 };
//    }

//    public render() {
//        return <div>
//            <h1>Counter</h1>

//            <p>This is a simple example of a React component.</p>

//            <p>Current count: <strong>{ this.state.currentCount }</strong></p>

//            <button onClick={ () => { this.incrementCounter() } }>Increment</button>
//        </div>;
//    }

//    incrementCounter() {
//        this.setState({
//            currentCount: this.state.currentCount + 1
//        });
//    }
//}
