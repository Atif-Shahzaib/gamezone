import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../config/header";
import React from "react";
const screens = {
	Home: {
		screen: Home,
		navigationOptions: ({ navigation }) => {
			return {
				headerTitle: () => <Header navigation={navigation} title="Game Zone" />,
			};
		},
	},
	ReviewDetails: {
		screen: ReviewDetails,
		navigationOptions: {
			title: "Review",
		},
	},
};
const HomeStack = createStackNavigator(screens, {
	defaultNavigationOptions: {
		headerTintColor: "#444",
		headerStyle: {
			backgroundColor: "coral",
		},
	},
});
export default HomeStack;
