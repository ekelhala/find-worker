class HelloText extends React.Component {
    
    constructor(props) {
        super(props);
        this.name = props.personName;
    }
    
    render() {
        return (
        <p>Hello {this.name}</p>
        );
    }
}

class Button extends React.Component {
    render() {
        return(
        <button>{this.props.buttonText}</button>
        );
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <HelloText personName='Person'/>
                <Button buttonText='Click me'/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);