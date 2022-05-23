
class BaseText extends React.Component {
    
    constructor(props) {
        super(props);
        this.styleParams = styles.RegularText;
        this.styleParams.color = this.props.textColor;
    }
    
    render() {
        return <p style={this.styleParams}>{this.props.text}</p>;
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
               <TextButton onClick={this.props.onLoginClick} link="login.html" text="Kirjaudu"/>
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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <a onClick={this.handleClick} style={styles.ButtonStyle}>{this.props.text}</a>
        );
    }
}

class TextButton extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <a onClick={this.handleClick} style={styles.TextButtonStyle}>{this.props.text}</a>
        );
    }
    
}

class Dialog extends React.Component {
        
    render() {
        return(
            <div style={{visibility: this.props.show ? "visible" : "hidden"}}>
                <div style={styles.DialogStyle}>{this.props.children}</div>
            </div>
        );
    }
}

class TextField extends React.Component {
    render() {
        return(
            <input type={this.props.inputType} placeholder={this.props.tip} style={styles.TextFieldStyle}/>
        );
    }
}