
class BaseText extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.textColor||"15px",
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
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
                fontFamily: "Arial",
                fontSize: "17px",
                padding: "10px 25px",
                textDecoration: "none",
                textAlign: "center",
                color: ColorScheme.textColor,
                backgroundColor: ColorScheme.secondaryColor,
                boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)",
                cursor: "pointer"
        }
        if(this.props.type !== undefined) {
            if(this.props.type == "positive") {
                this.state.backgroundColor = styles.ColorScheme.positiveButtonColor;
            }
            else if(this.props.type == "negative") {
                this.state.backgroundColor = styles.ColorScheme.negativeButtonColor;
            }
        }
    }

    handleClick() {
        this.props.onClick();
    }
    
    render() {
        return(
            <a onClick={this.handleClick} style={this.state}>{this.props.text}</a>
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
    
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }
    
    onValueChange(event) {
        this.props.onChangeListener(event);
    }
    
    render() {
        return(
            <input type={this.props.inputType} placeholder={this.props.tip} defaultValue={this.props.defaultText} value={this.props.value} onChange={this.onValueChange} name={this.props.name} style={styles.TextFieldStyle}/>
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

class TextContentContainer extends React.Component {
    render() {
        return(
            <div style={styles.TextContentContainerStyle}>{this.props.children}</div>
        );
    }
}

class Card extends React.Component {
    render() {
        return(
            <div style={styles.CardStyle}>
                <div>{this.props.children}</div>
            </div>
        );
    }
}

class Order extends React.Component {
    render() {
        let area = categories.AvailableCities[this.props.order.alue];
        let job = categories.JobCategories[this.props.order.palvelu];
        let etunimi = this.props.order.asiakas.etunimi;
        let sukunimi = this.props.order.asiakas.sukunimi;
        let hinta = this.props.order.hinta;
        return(
            <TextContentContainer>
            <Divider/>
            <div style={styles.OrderStyle}>
                <BaseText text={"Työ: " + job} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Alue: " + area} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Asiakas: " + etunimi + " " + sukunimi} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <BaseText text={"Tarjottu hinta: " + hinta + "€"} textColor={styles.ColorScheme.textColorDark} textSize="17px"/>
                <div style={styles.HorizontalContentContainer}>
                    <Button text="Hyväksy" type='positive'/>
                    <Button text="Hylkää" type='negative'/>
                </div>
            </div>
            </TextContentContainer>
        );
    }
}

class Divider extends React.Component {
    render() {
        return(
            <div style={styles.DividerStyle}></div>
        );
    }
}

class SearchList extends React.Component {
    render() {
        return(
            <Card>
                <TextContentContainer>
                    <BaseText text={'Hakutulokset (' + this.props.children.length + ')'} textSize='20px' textColor={styles.ColorScheme.primaryColor}/>
                </TextContentContainer>
                    {this.props.children}
            </Card>
        );
    }
}

class SearchResultItem extends React.Component {
        
    render() {
        return(
            <ContentContainer>
            <Divider/>
            <TextContentContainer>
            <BaseText text={this.props.name} textSize='20px' textColor={styles.ColorScheme.secondaryColor}/>
            <BaseText text={"Palvelu: " + this.props.service} textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
            <BaseText text={"Alue: " + this.props.area} textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
            <BaseText text={"Lisätiedot: " + this.props.additionalInfo} textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
            <BaseText text={"Pyydetty hinta: " + this.props.ask + '€'} textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
            </TextContentContainer>
            <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', marginBottom: '10px'}}>
            <Button text='Tee tarjous' onClick={this.props.onButtonClick}/>
            </div>
            </ContentContainer>
        );
    }
}

class LoginDialog extends React.Component {
    render() {
        return(
            <Dialog show={this.props.show}>
                <BaseText text='Kirjaudu sisään, ole hyvä' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                <TextField inputType='text' tip='Sähköposti'/>
                <TextField inputType='password' tip='Salasana'/>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                    <Button text="Peruuta" onClick={this.props.onNegativeButtonClick}/>
                    <Button text="OK" onClick={this.props.onPositiveButtonClick}/>
                </div>
            </Dialog>
        );
    }
}

class UserInfoForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            etunimi: this.props.user.etunimi,
            sukunimi: this.props.user.sukunimi,
            sahkoposti: this.props.user.sahkoposti,
            matkapuhelin: this.props.user.matkapuhelin,
            alueet: this.props.user.alueet,
            palvelut: this.props.user.palvelut,
            showCityDialog: false,
            showJobDialog: false
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onSelectedAreasChanged = this.onSelectedAreasChanged.bind(this);
        this.onSelectedJobsChanged = this.onSelectedJobsChanged.bind(this);
    }
    
    onInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        
        this.setState({
            [name]: value
        });
    }
    
    onFormSubmit() {
        this.props.onSubmit(this.state);
    }
    
    onSelectedAreasChanged(areas) {
        let oldState = this.state;
        oldState.alueet = areas.map((element) => categories.AvailableCities.indexOf(element));
        this.setState(oldState);
    }
    
    onSelectedJobsChanged(jobs) {
        let oldState = this.state;
        oldState.palvelut = jobs.map((element) => categories.JobCategories.indexOf(element));
        this.setState(oldState);
    }
        
    render() {
        return(
            <div>
                <ContentContainer>
                    <form id='form1'>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Etunimi' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <TextField type='text' name='etunimi' value={this.state.etunimi} onChangeListener={this.onInputChange}/>
                        </div>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Sukunimi' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <TextField type='text' name='sukunimi' value={this.state.sukunimi} onChangeListener={this.onInputChange}/>
                        </div>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Toiminta-alueet' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <Button text='Muokkaa' onClick={() =>{let s = this.state; s.showCityDialog = true; this.setState(s);}}/>
                        </div>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Palvelut' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <Button text='Muokkaa' onClick={() =>{let s = this.state; s.showJobDialog = true; this.setState(s);}}/>
                        </div>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Sähköposti' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <TextField type='email' name='sahkoposti' value={this.state.sahkoposti} onChangeListener={this.onInputChange}/>
                        </div>
                        <div style={styles.HorizontalContentContainer}>
                        <BaseText text='Puhelin' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <TextField type='tel' name='matkapuhelin' value={this.state.matkapuhelin} onChangeListener={this.onInputChange}/>
                        </div>
                    </form>
                </ContentContainer>
                <div style={styles.HorizontalContentContainer}>
                    <Button text='Tallenna' onClick={this.onFormSubmit}/>
                    <Button text='Peruuta' type='negative' onClick={this.props.onCancel}/>
                </div>
            
            <Dialog show={this.state.showCityDialog}>
                <CheckList items={categories.AvailableCities} selected={this.props.user.alueet.map((itemIndex) => categories.AvailableCities[itemIndex])} onSelectedItemsChangedListener={this.onSelectedAreasChanged}/>
                <div style={styles.HorizontalContentContainer}>
                    <Button text='Sulje' onClick={() =>{let s = this.state; s.showCityDialog = false; this.setState(s);}}/>
                </div>
            </Dialog>

            <Dialog show={this.state.showJobDialog}>
                <CheckList items={categories.JobCategories} selected={this.props.user.palvelut.map((itemIndex) => categories.JobCategories[itemIndex])} onSelectedItemsChangedListener={this.onSelectedJobsChanged}/>
                <div style={styles.HorizontalContentContainer}>
                    <Button text='Sulje' onClick={() =>{let s = this.state; s.showJobDialog = false; this.setState(s);}}/>
                </div>
            </Dialog>

            </div>
        );
    }
}

class CheckBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.onValueChange = this.onValueChange.bind(this);
    }
    
    onValueChange(event) {
        const values = {
            name: this.props.label,
            checked: event.target.checked
        }
        this.props.onValueChangeListener(values);
    }
    
    render() {
        return(
            <div style={{display: 'flex', flexFlow: 'row wrap', alignItems: 'center', columnGap: '10px'}}>
            <BaseText text={this.props.label} textSize='17px' textColor={styles.ColorScheme.primaryColor}/>
            <div className='checkBoxContainer'>
                <input type='checkbox' onChange={this.onValueChange} defaultChecked={this.props.isChecked ? 'checked' : ''}/>
                <div className='checkbox'></div>
            </div>
            </div>
        );
    }
}

class CheckList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            selectedItems: this.props.selected
        }
        this.onItemChanged = this.onItemChanged.bind(this);
    }
    
    onItemChanged(event) {
        let name = event.name;
        let value = event.checked;
        let currentlySelected = this.state.selectedItems;
        
        if(currentlySelected.includes(name)) {
            if(!value) {
                let index = currentlySelected.indexOf(name);
                currentlySelected.splice(index, 1);
            }
        }
        else {
            if(value) {
                currentlySelected.push(name);
            }
        }
        
        this.setState({
            selectedItems: currentlySelected
        });
        this.props.onSelectedItemsChangedListener(this.state.selectedItems);
    }
    
    render() {
        const items = this.props.items.map((item) => <CheckBox label={item} onValueChangeListener={this.onItemChanged} isChecked={this.state.selectedItems.includes(item)}/>);
        return(
        <div>
        <TextContentContainer>{items}</TextContentContainer>
        </div>
        );
    }
}