
class BaseText extends React.Component {
    render() {
        return <p style={styles.RegularText}>{this.props.text}</p>;
    }
}

class HeaderText extends React.Component {
    render() {
        return <h1 style={styles.MainHeader}>{this.props.text}</h1>;
    }
}

class TopBar extends React.Component {
    render() {
        return( <div style={styles.TopBarStyle}>
               <HeaderText text="findworker"/>
               <TextButton link="#" text="Kirjaudu"/>
               </div>
              );
    }
}

class Background extends React.Component {
    render() {
        return (
            <img style={styles.BackgroundImage} src='./bg.jpg'/>
        );
    }
}
               
class SelectorComponent extends React.Component {
    render() {
        const listItems = this.props.items.map((item) => 
                                                  <option value={item}>{item}</option>
                                              );
        return(
            <select style={styles.Selector} defaultValue={this.props.descriptionText}>
            <option selected disabled hidden>{this.props.descriptionText}</option>
            {listItems}</select>
        );
    }
}

class Button extends React.Component {
    constructor() {
        super();
        this.appearance = styles.ButtonStyle;
    }

    render() {
        return(
            <a href={this.props.link} style={this.appearance}>{this.props.text}</a>
        );
    }
}

class TextButton extends Button {
    constructor() {
        super();
        this.appearance = styles.TextButtonStyle;
    }
}

class App extends React.Component {
    render() {
        return (
        <div>
        <Background/>
        <TopBar/>
        <div style={styles.MainContainer}>
            <p style={styles.WelcomeText}>Löydä osaajia.</p>
            <div style={styles.MainSearchContainer}>
                <SelectorComponent items={categories.AvailableCities} descriptionText='Sijainti'/>
                <SelectorComponent items={categories.JobCategories} descriptionText='Työ'/>
                <Button link="#" text='Hae'/>
            </div>
        </div>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);