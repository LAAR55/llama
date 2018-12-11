// import fortniteApi from "fortnite-api";
import * as React from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationScreenOptions } from "react-navigation";

import { Header, IconButton } from "../Components";
import styles from "./styles/homeScreenStyles";
// import { MainView } from "../Components";

type Platform =
  | "PC"
  | "PS"
  | "XBOX";

interface HomeScreenState {
  data: any;
  fetchingData: boolean;
  selectedPlatform?: Platform;
}

class HomeScreen extends React.Component<{}, HomeScreenState> {
  private static navigationOptions: NavigationScreenOptions = {
    headerStyle: {
      backgroundColor: "#030820",
      borderBottomWidth: 0,
      paddingHorizontal: 20,
    },
    headerTitle: <Header title="Home" />,
  };

  public state: HomeScreenState = {
    data: {},
    fetchingData: false,
    selectedPlatform: undefined,
  };

  public render() {
    const { data, fetchingData } = this.state;

    if (fetchingData) {
      return <ActivityIndicator size="large" />;
    }

    if (Object.values(data).length > 0) {
      return this.renderWithData();
    }

    return this.renderEmpty();
  }

  private renderEmpty = () => {
    const { selectedPlatform } = this.state;

    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.contentContainer}>
          <ImageBackground
            style={{ alignItems: "center", width: "100%" }}
            resizeMode="stretch"
            source={require("../../../resources/Images/Ambient/Backgrounds/Llama.HomeScreen_background.png")}>
            <Image
              style={styles.ftntSkin}
              resizeMode="contain"
              source={require("../../../resources/Images/Placeholders/FTNT.BlondeMan_silhouette.png")} />
          </ImageBackground>
          <View style={styles.trackContainer}>
            <Text style={{ color: "#ffffff", textAlign: "center", marginBottom: 20 }}>
              Search and track your <Text style={{ fontWeight: "bold" }}>Fortnite: Battle Royale</Text> stats.
            </Text>
            <View style={[styles.platformSelectContainer, { marginBottom: selectedPlatform === undefined ? 0 : 20 }]}>
              <IconButton
                iconName="WindowsLogoDefault"
                size={60}
                selected={selectedPlatform === "PC" ? true : false}
                selectedImage="WindowsLogoActive"
                style="transparent"
                handleOnPress={
                  () => selectedPlatform !== "PC"
                    ? this.setState({ selectedPlatform: "PC" })
                    : this.setState({ selectedPlatform: undefined })
                } />
              <IconButton
                iconName="PSLogoDefault"
                size={60}
                selected={selectedPlatform === "PS" ? true : false}
                selectedImage="PSLogoActive"
                style="transparent"
                handleOnPress={
                  () => selectedPlatform !== "PS"
                    ? this.setState({ selectedPlatform: "PS" })
                    : this.setState({ selectedPlatform: undefined })
                } />
              <IconButton
                iconName="XboxLogoDefault"
                size={60}
                selected={selectedPlatform === "XBOX" ? true : false}
                selectedImage="XboxLogoActive"
                style="transparent"
                handleOnPress={
                  () => selectedPlatform !== "XBOX"
                    ? this.setState({ selectedPlatform: "XBOX" })
                    : this.setState({ selectedPlatform: undefined })
                } />
            </View>
            {selectedPlatform !== undefined &&
              <View>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoFocus={true}
                  placeholderTextColor="#333333"
                  style={styles.searchInput}
                  placeholder={`Search for ${selectedPlatform} player...`}
                  returnKeyType="search"
                  onEndEditing={(evt) => this.fetchData(evt.nativeEvent.text, selectedPlatform)} />
              </View>
            }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  private renderWithData = () => {
    const defaultSkins = {
      AsianManSkin: () => require("../../../resources/Images/Placeholders/FTNT.AsianMan_skin.png"),
      AsianWomanSkin: () => require("../../../resources/Images/Placeholders/FTNT.AsianWoman_skin.png"),
      BlackManSkin: () => require("../../../resources/Images/Placeholders/FTNT.BlackMan_skin.png"),
      BlondeManSkin: () => require("../../../resources/Images/Placeholders/FTNT.BlondeMan_skin.png"),
      BrunetteWomanSkin: () => require("../../../resources/Images/Placeholders/FTNT.BrunetteWoman_skin.png"),
      GingerWomanSkin: () => require("../../../resources/Images/Placeholders/FTNT.GingerWoman_skin.png"),
      LongHairManSkin: () => require("../../../resources/Images/Placeholders/FTNT.LongHairMan_skin.png"),
      RihannaSkin: () => require("../../../resources/Images/Placeholders/FTNT.Rihanna_skin.png"),
    };

    const defaultSkinsPaths = Object.values(defaultSkins);
    const randomDefaultSkin = defaultSkinsPaths[Math.floor(Math.random() * defaultSkinsPaths.length)];

    return (
      <ScrollView bounces={false} contentContainerStyle={styles.contentContainer} style={styles.container}>
        <ImageBackground
          style={{ alignItems: "center", width: "100%" }}
          resizeMode="stretch"
          source={require("../../../resources/Images/Ambient/Backgrounds/Llama.HomeScreen_background.png")}>
          <Image
            style={styles.ftntSkin}
            resizeMode="contain"
            source={randomDefaultSkin()} />
          <View style={styles.trackContainer}>
            <Text style={{ color: "#ffffff" }}>{this.state.data.displayName}</Text>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }

  private fetchData = async (playerName: string, selectedPlatform?: Platform) => {
    this.setState({ fetchingData: true });

    const requestUrl =
      `https://8r3crtl3ca.execute-api.us-east-1.amazonaws.com/dev/players/${playerName}?platform=${selectedPlatform}`;

    if (playerName && selectedPlatform) {
      const request = await fetch(requestUrl);
      const response = await request.json();
      console.log(response)
      this.setState({
        data: response,
      });
      this.setState({ fetchingData: false });
    }

    this.setState({ fetchingData: false });
  }
}

export default HomeScreen;
