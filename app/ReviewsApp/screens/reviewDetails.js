import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "../config/css";
import Card from "../config/card";
import { images } from "../config/images";
export default function ReviewDetails({ navigation, item }) {
	const pressHandler = () => {
		navigation.goBack();
	};
	const rating = navigation.getParam("rating");
	return (
		<View style={styles.container}>
			<Card>
				<Text>{navigation.getParam("title")}</Text>
				<Text>{navigation.getParam("body")}</Text>
				<View style={styles.rating}>
					<Text>GameZone rating</Text>
					<Image source={images.ratings[rating]} />
				</View>
			</Card>
			<Button onPress={pressHandler} title="Back To Home" />
		</View>
	);
}
