class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {showLogin: false};
        this.showDialog = this.showDialog.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
    }
    
    showDialog() {
        this.setState({
            showLogin: true
        });
    }
    
    hideDialog() {
        this.setState({
            showLogin: false
        });
    }
    
    loginComplete() {
        window.location.href = "index.php?page=order";
    }
        
    render() {
        //Tämä objekti saadaan palvelimelta
        const result1 = {
            user: {
                etunimi: "Erkki",
                sukunimi: "Esimerkki",
                palvelut: [0,1],
                alueet: [0,2]
                },
            askPrice: 20,
            searchedService: 0,
            searchedArea: 0,
            additionalInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit volutpat dolor, non cursus dolor varius eu. Phasellus cursus metus vitae justo rutrum, id euismod nulla aliquam."
        }
        const result2 = {
            user: {
                etunimi: "Matti",
                sukunimi: "Meikäläinen",
                palvelut: [0,1],
                alueet: [0,2]
                },
            askPrice: 25,
            searchedService: 0,
            searchedArea: 0,
            additionalInfo: " "
        }
        const result3 = {
            user: {
                etunimi: "Matti",
                sukunimi: "Meikäläinen",
                palvelut: [0,1],
                alueet: [0,2]
                },
            askPrice: 25,
            searchedService: 0,
            searchedArea: 0,
            additionalInfo: " "
        }
        const result4 = {
            user: {
                etunimi: "Matti",
                sukunimi: "Meikäläinen",
                palvelut: [0,1],
                alueet: [0,2]
                },
            askPrice: 25,
            searchedService: 0,
            searchedArea: 0,
            additionalInfo: " "
        }
        let searchResults = [result1, result2, result3, result4];
        let searchResultList = searchResults.map(result => 
                                            <SearchResultItem name={result.user.etunimi + " " + result.user.sukunimi} service={categories.JobCategories[result.searchedService] }ask={result.askPrice} area={categories.AvailableCities[result.searchedArea]} additionalInfo={result.additionalInfo} onButtonClick={this.showDialog}/>);
        return (
            <div>
                <TopBar>
                <div style={styles.HorizontalContentContainer}>
                    <SelectorComponent descriptionText='Sijainti' items={categories.AvailableCities}/>
                    <SelectorComponent descriptionText='Palvelu' items={categories.JobCategories}/>
                    <Button text='Hae'/>
                </div>
                </TopBar>
                <LoginDialog show={this.state.showLogin} onPositiveButtonClick={this.loginComplete} onNegativeButtonClick={this.hideDialog}/>
                <Background/>
                <div style={styles.MainContainer}>
                <SearchList>
                    {searchResultList}
                </SearchList>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);