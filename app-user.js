class App extends React.Component {
    
    constructor(props) {
        super(props);
        //User-objekti voidaan hakea esim. tietokannasta 
        let user = {
            etunimi: "Erkki",
            sukunimi: "Esimerkki",
            sahkoposti: "erkki.esimerkki@mail.com",
            matkapuhelin: "123456",
            palvelut: [0,1],
            alueet: [0,2]
        };
        this.state = {
            showEditorDialog: false,
            userData: user
        }
        this.cancelDataEditor = this.cancelDataEditor.bind(this);
        this.openDataEditor = this.openDataEditor.bind(this);
        this.saveData = this.saveData.bind(this);
    }
    
    logout() {
        window.location.href = "index.php?page=index";
    }
    
    cancelDataEditor() {
        this.setState({
            showEditorDialog: false
        });
    }
    
    openDataEditor() {
        this.setState({
            showEditorDialog: true
        });
    }
    
    saveData(data) {
        this.setState({
            userData: {
                etunimi: data.etunimi,
                sukunimi: data.sukunimi,
                sahkoposti: data.sahkoposti,
                matkapuhelin: data.matkapuhelin,
                palvelut: data.palvelut,
                alueet: data.alueet
            },
            showEditorDialog: false
        });
    }
    
    render() {       
        const order = {
            alue: [0],
            asiakas: this.state.userData,
            palvelu: [1],
            hinta: 25
        }
        const order2 = {
            alue: [0],
            asiakas: this.state.userData,
            palvelu: [1],
            hinta: 100
        }
        let orders = [order, order2];
        /*Palvelut sisältää käyttäjän tarjoamien palveluiden indeksit JobCategories-listassa (jossa on siis kaikki tarjotut palvelut)*/
        let serviceList = this.state.userData.palvelut.map(id => categories.JobCategories[id]).join(', ');
        let operatingAreas = this.state.userData.alueet.map(id => categories.AvailableCities[id]).join(', ');
        let newOrders = orders.map(obj => <Order order={obj}/>);
        return(
        <div>
            <TopBar>
                <BaseText text='Oma sivu' textColor={styles.ColorScheme.textColor}/>
                <Button text='Kirjaudu ulos' onClick={this.logout}/>
            </TopBar>
            <div style={styles.MainContainer}>
                <ContentContainer>
                <div style={styles.HorizontalContentContainer}>
                    <Card>
                    <TextContentContainer>
                        <BaseText text='Käyttäjätiedot' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <BaseText text={"Nimi: " + this.state.userData.etunimi + " " + this.state.userData.sukunimi} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Puhelinnumero: " + this.state.userData.matkapuhelin} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Sähköposti: " + this.state.userData.sahkoposti} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Palvelut: " + serviceList} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Toiminta-alueet: " + operatingAreas} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <Button text='Muokkaa' onClick={this.openDataEditor}/>
                    </TextContentContainer>
                    </Card>
                    <Card>
                    <TextContentContainer>
                        <BaseText text={"Tarjoukset (" + orders.length + ")"} textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        {newOrders}
                        <Button text='Historia'/>
                    </TextContentContainer>
                    </Card>
                    </div>
                </ContentContainer>
            </div>
            <Dialog show={this.state.showEditorDialog}>
                <div style={{overflowY: "auto"}}>
                <ContentContainer>
                    <ContentContainer>
                        <UserInfoForm user={this.state.userData} onCancel={this.cancelDataEditor} onSubmit={this.saveData}/>
                    </ContentContainer>
                                   
                </ContentContainer>
                </div>
            </Dialog>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);