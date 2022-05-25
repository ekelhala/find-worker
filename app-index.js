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
                <MainPageTopBar onLoginClick={this.showDialog}/>
                <div style={styles.MainContainer}>
                <ContentContainer>
                <Card>
                    <p style={styles.WelcomeText}>Löydä osaajia.</p>
                    <div style={styles.MainSearchContainer}>
                        <SelectorComponent items={categories.AvailableCities} descriptionText='Sijainti'/>
                        <SelectorComponent items={categories.JobCategories} descriptionText='Työ'/>
                        <Button link="#" text='Hae'/>
                    </div>
                </Card>
                <Card>
                    <BaseText text='Hei!' textColor={styles.ColorScheme.primaryColor} textSize="25px"/>
                    <BaseText text='Me olemme  findworker, ensimmäinen kevytyrittäjille suunnattu työnvälityspalvelu. Sivustomme on vielä kehitysvaiheessa mutta suunnitelmamme on julkaista se yleiseen käyttöön pian.' textColor={styles.ColorScheme.textColorDark} textSize='15px'/>
                </Card>
                </ContentContainer>
                </div>
                <Dialog show={this.state.showLoginDialog}>
                    <BaseText text='Kirjaudu sisään, ole hyvä' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                    <TextField inputType='text' tip='Sähköposti'/>
                    <TextField inputType='password' tip='Salasana'/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                        <Button text="Peruuta" onClick={this.hideDialog}/>
                        <Button text="OK"/>
                    </div>
                </Dialog>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);