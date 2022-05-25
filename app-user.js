class App extends React.Component {
    render() {
        //User-objekti voidaan hakea esim. tietokannasta
        const user = {
            etunimi: "Erkki",
            sukunimi: "Esimerkki",
            palvelut: [0,1],
            alueet: [0,2]
        }
        /*Palvelut sisältää käyttäjän tarjoamien palveluiden indeksit JobCategories-listassa (jossa on siis kaikki tarjotut palvelut)*/
        let serviceList = user.palvelut.map(id => categories.JobCategories[id]).join(', ');
        let operatingAreas = user.alueet.map(id => categories.AvailableCities[id]).join(', ');
        return(
        <div>
            <TopBar>
                <BaseText text='Oma sivu' textColor={styles.ColorScheme.textColor}/>
                <Button text='Kirjaudu ulos'/>
            </TopBar>
            <div style={styles.MainContainer}>
                <ContentContainer>
                    <Card>
                        <BaseText text='Käyttäjätiedot' textColor={styles.ColorScheme.primaryColor} textSize="20px"/>
                        <BaseText text={"Nimi: " + user.etunimi + " " + user.sukunimi} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Palvelut: " + serviceList} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <BaseText text={"Toiminta-alueet: " + operatingAreas} textColor={styles.ColorScheme.textColorDark} textSize="15px"/>
                        <Button text='Muokkaa...'/>
                    </Card>
                    <Card>
                        <DarkText text='Ei uusia tarjouksia!'/>
                    </Card>
                </ContentContainer>
            </div>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);