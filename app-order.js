class App extends React.Component {
    
    cancel() {
        window.location.href = "index.php?page=search";
    }
    
    render() {
        return(
        <div>
            <TextContentContainer>
            
                    <BaseText text='Tarjous' textSize='25px' textColor={styles.ColorScheme.primaryColor}/>
                    <Divider/>
            
            </TextContentContainer>
            
            <ContentContainer>
                <div style={styles.HorizontalContentContainer}>
                    <Card>
                        <TextContentContainer>
                            <BaseText text='Perustiedot' textSize='20px' textColor={styles.ColorScheme.primaryColor}/>
                            <SelectorComponent items={categories.AvailableCities} descriptionText='Sijainti'/>
                            <SelectorComponent items={categories.JobCategories} descriptionText='Työn tyyppi'/>
                            <BaseText text='Lisätiedot' textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
                            <TextField inputType='text' tip=''/>
                        </TextContentContainer>
                    </Card>
                    <Card>
                        <TextContentContainer>
                            <BaseText text='Tarjoushintasi' textSize='20px' textColor={styles.ColorScheme.primaryColor}/>
                            <BaseText text='Työntekijän pyytämä hinta: €' textSize='17px' textColor={styles.ColorScheme.textColorDark}/>
                            <BaseText text='Sinun tarjouksesi' textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
                            <div style={styles.HorizontalContentContainer}>
                                <TextField inputType='number' tip=''/>
                                <BaseText text='euroa' textSize='15px' textColor={styles.ColorScheme.textColorDark}/>
                            </div>
                        </TextContentContainer>
                    </Card>
                </div>
            </ContentContainer>
            <ContentContainer>
            <Divider/>
            <ContentContainer>
                <div style={styles.HorizontalContentContainer}>
                <Button text='Lähetä'/>
                <Button text='Peruuta' onClick={this.cancel}/>
                </div>
            </ContentContainer>
            </ContentContainer>
        </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);