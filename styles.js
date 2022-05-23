const ColorScheme = {
    primaryColor: "#bf8d04",
    secondaryColor: "#f0ba26",
    textColor: "#ffffff"
}

const MainHeader = {
    float: "left",
    display: "block",
    marginLeft: "10px",
    fontSize: "25px",
    fontFamily: "Arial",
    color: ColorScheme.textColor,
    fontStyle: "bold",
    textAlign: "center"
}

const RegularText = {
    fontSize: "18px",
    color: ColorScheme.textColor,
    fontFamily: "Arial",
    display: "inline-block"
}

const WelcomeText = {
    fontSize: "50px",
    fontFamily: "Arial",
    textAlign: "center",
    color: ColorScheme.secondaryColor,
}

const TopBarStyle = {
    position: "fixed",
    width: "100%",
    top: "0",
    left: "0",
    backgroundColor: ColorScheme.primaryColor,
    boxShadow: "0px 0px 3px 0px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between"
}

const MainContainer = {
    position: "fixed",
    margin: "auto",
    width: "50%",
    height: "50%",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    overflow: "auto",
    backgroundColor: "rgba(255,255,255,0.5)"
}

const Selector = {
    display: "inline-block",
    fontFamily: "Arial",
    fontSize: "20px",
    padding: "5px",
    marginLeft: "20px"
}

const ButtonStyle = {
    display: "inline-block",
    fontFamily: "Arial",
    fontSize: "20px",
    padding: "10px 25px",
    textDecoration: "none",
    color: ColorScheme.textColor,
    backgroundColor: ColorScheme.secondaryColor,
    marginLeft: "30px",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.5)"
}

const MainSearchContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const BackgroundImage = {
    position: "fixed",
    width: "100%",
    height: "auto",
    top: "0",
    left: "0",
    filter: "blur(3px)"
}

const TextButtonStyle = {
    color: ColorScheme.textColor,
    textDecoration: "none",
    fontSize: "20px",
    fontFamily: "Arial",
    marginRight: "10px"
}

const styles = {
    MainHeader: MainHeader,
    TopBarStyle: TopBarStyle,
    RegularText: RegularText,
    MainContainer: MainContainer,
    WelcomeText: WelcomeText,
    Selector: Selector,
    ButtonStyle: ButtonStyle,
    MainSearchContainer: MainSearchContainer,
    BackgroundImage: BackgroundImage,
    TextButtonStyle: TextButtonStyle
}