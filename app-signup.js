class App extends React.Component {
    
    constructor(props) {
        super(props);
        let user = {
            etunimi: "",
            sukunimi: "",
            sahkoposti: "",
            matkapuhelin: "",
            palvelut: [],
            alueet: []
        };
        
        this.state = {
            userData: user
        }
    }
    
    render() {
        return(
            <div>
                <UserInfoForm user={this.state.userData}/>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);