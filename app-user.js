class App extends React.Component {
    
    logout() {
        window.location.href = "index.php?page=index";
    }
    
    render() {
        //User-objekti voidaan hakea esim. tietokannasta
        const user = {
            etunimi: "Erkki",
            sukunimi: "Esimerkki",
            palvelut: [0,1],
            alueet: [0,2]
        }
        
        const order = {
            alue: [0],
            asiakas: user,
            palvelu: [1],
            hinta: 25
        }
        const order2 = {
            alue: [0],
            asiakas: user,
            palvelu: [1],
            hinta: 100
        }
        let orders = [order, order2];
        /*Palvelut sisältää käyttäjän tarjoamien palveluiden indeksit JobCategories-listassa (jossa on siis kaikki tarjotut palvelut)*/
        let serviceList = user.palvelut.map(id => categories.JobCategories[id]).join(', ');
        let operatingAreas = user.alueet.map(id => categories.AvailableCities[id]).join(', ');
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
                        <BaseText text={"Nimi: " + user.etunimi + " " + user.sukunimi} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Palvelut: " + serviceList} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Toiminta-alueet: " + operatingAreas} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <Button text='Muokkaa'/>
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
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);