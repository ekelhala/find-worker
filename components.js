
class BaseText extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.textColor,
            fontFamily: "Arial",
            fontSize: this.props.textSize
        };
    }
    
    render() {
        return <p style={this.state}>{this.props.text}</p>;
    }
}

class DarkText extends React.Component {
    render() {
        return <p style={styles.BlackText}>{this.props.text}</p>
    }
}

class HeaderText extends React.Component {
    render() {
        return <h1 style={styles.MainHeader}>{this.props.text}</h1>;
    }
}

class TopBar extends React.Component {
    render() {
        return( <div style={styles.TopBarStyle}>{this.props.children}</div>
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
            <div className={this.props.show ? "dialog-visible" : "dialog-hidden"}>
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

class ContentContainer extends React.Component {
    render() {
        return(
            <div style={styles.ContentContainerStyle}>{this.props.children}</div>
        );
    }
}

class Card extends React.Component {
    render() {
        return(
            <div style={styles.CardStyle}>
                <ContentContainer>{this.props.children}</ContentContainer>
            </div>
        );
    }
}

/*
class List extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listItems: this.props.items
        };
    }
    
    render() {
        const list = 
        return(
            
        );
    }
}

class ListItem extends React.Component {
    render() {
        return(
            
        );
    }
}

*/