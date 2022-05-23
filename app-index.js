class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {showLoginDialog: false};
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }
    
    showDialog() {
        this.setState({
           showLoginDialog: true 
        });
    }
    
    hideDialog() {
        this.setState({
            showLoginDialog: false
        });
    }
    
    render() {
        return(
            <div>
                <Background/>
                <TopBar onLoginClick={this.showDialog}/>
                <Dialog show={this.state.showLoginDialog}>
                    <BaseText text='Kirjaudu sisään, ole hyvä' textColor={styles.ColorScheme.secondaryColor}/>
                    <TextField inputType='text' tip='Käyttäjätunnus'/>
                    <TextField inputType='password' tip='Salasana'/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                        <Button text="Peruuta" onClick={this.hideDialog}/>
                        <Button text="OK"/>
                    </div>
                </Dialog>
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