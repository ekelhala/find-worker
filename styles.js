const ColorScheme = {
    primaryColor: "#bf8d04",
    secondaryColor: "#f0ba26",
    textColor: "#ffffff",
    textColorDark: "#000000",
    dividerColor: "#bfbfbf",
    positiveButtonColor: "#3ff23f",
    negativeButtonColor: "#f53b3b"
}

const MainHeader = {
    float: "left",
    display: "block",
    fontSize: "20px",
    fontFamily: "Arial",
    color: ColorScheme.textColor,
    fontStyle: "bold",
    textAlign: "center"
}

const RegularText = {
    fontSize: "18px",
    color: ColorScheme.textColor,
    fontFamily: "Arial"
}

const BlackText = {
    fontSize: "18px",
    color: "#000000",
    fontFamily: "Arial",
    display: "inline-block"
}

const WelcomeText = {
    fontSize: "50px",
    fontFamily: "Arial",
    textAlign: "center",
    color: ColorScheme.primaryColor
}

const TopBarStyle = {
    position: "fixed",
    width: "auto",
    padding: "5px 10px",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "4",
    backgroundColor: ColorScheme.primaryColor,
    boxShadow: "0px 0px 3px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}

const MainContainer = {
    position: "absolute",
    margin: "auto",
    width: "50%",
    height: "50%",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0"
}

const Selector = {
    display: "inline-block",
    fontFamily: "Arial",
    fontSize: "20px",
    padding: "5px",
    cursor: "pointer"
}

const ButtonStyle = {
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

const MainSearchContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "20px"
}

const BackgroundImage = {
    position: "fixed",
    width: "100%",
    height: "auto",
    top: "0",
    left: "0"
}

const TextButtonStyle = {
    display: "inline-block",
    color: ColorScheme.textColor,
    textDecoration: "none",
    fontSize: "20px",
    fontFamily: "Arial",
    marginRight: "10px",
    cursor: "pointer"
}

const DialogStyle = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "auto",
    width: "50%",
    height: "50%",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    zIndex: "5",
    boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.5)",
    borderRadius: "4px",
    backgroundColor: "#ffffff",
    padding: "15px"
}

const TextFieldStyle = {
    display: "inline-block",
    fontFamily: "Arial",
    fontSize: "20px",
    padding: "5px",
}

const ContentContainerStyle = {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
    alignContent: "center",
    rowGap: "5px"
}

const TextContentContainerStyle = {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "flex-start",
    alignContent: "flex-start"
}

const CardStyle = {
    padding: "15px",
    backgroundColor: "rgba(255,255,255,1)",
    boxShadow: "2px 3px 4px 0px rgba(0,0,0,0.5)"
}

const OrderStyle = {
    marginBottom: "10px",
    rowGap: "0px"
}

const DividerStyle = {
    height: "2px",
    backgroundColor: ColorScheme.dividerColor,
    marginTop: "2px",
    marginBottom: "2px"
}

const HorizontalContentContainer = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    columnGap: "20px",
    padding: "10px"
}

const styles = {
    ColorScheme: ColorScheme,
    MainHeader: MainHeader,
    TopBarStyle: TopBarStyle,
    RegularText: RegularText,
    MainContainer: MainContainer,
    WelcomeText: WelcomeText,
    Selector: Selector,
    ButtonStyle: ButtonStyle,
    MainSearchContainer: MainSearchContainer,
    BackgroundImage: BackgroundImage,
    TextButtonStyle: TextButtonStyle,
    DialogStyle: DialogStyle,
    TextFieldStyle: TextFieldStyle,
    ContentContainerStyle: ContentContainerStyle,
    BlackText: BlackText,
    CardStyle: CardStyle,
    TextContentContainerStyle: TextContentContainerStyle,
    OrderStyle: OrderStyle,
    DividerStyle: DividerStyle,
    HorizontalContentContainer: HorizontalContentContainer
}