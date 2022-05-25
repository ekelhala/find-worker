class MainPageTopBar extends React.Component {
    render() {
        return(
            <TopBar>
                <HeaderText text="findworker"/>
               <Button onClick={this.props.onLoginClick} link="login.html" text="Kirjaudu"/>
            </TopBar>
        );
    }
}