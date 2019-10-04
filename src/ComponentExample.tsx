import * as React from 'react';

interface Props { }
interface IState {}

export class ComponentExample extends React.Component<Props, IState> {
    render() {
        return <div>Hello from a React Component!</div>;
    }
}