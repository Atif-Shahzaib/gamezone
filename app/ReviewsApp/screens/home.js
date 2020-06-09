import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	Modal,
	FlatList,
	Button,
	ImageBackground,
} from "react-native";
import styles from "../config/css";
import Card from "../config/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
export default function Home({ navigation }) {
	const [modalOpen, setModelOpen] = useState(false);
	const [data, setData] = useState([
		{
			key: "1",
			title: "Hello",
			rating: 3,
			body: "Nothing to display",
		},
	]);
	const addReview = (review) => {
		review.key = Math.random().toString();
		setData((currentReviews) => {
			return [review, ...currentReviews];
		});
		setModelOpen(false);
	};
	const deleteReview = (key) => {
		setData((prevData) => {
			return prevData.filter((todo) => todo.key != key);
		});
	};
	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.backgroundImage}
				source={require("../assets/background.jpg")}
			>
				<Modal visible={modalOpen}>
					<View style={styles.addStuff}>
						<Text>Add Stuff</Text>
					</View>
					<View style={styles.modalContent}>
						<MaterialIcons
							name="close"
							size={24}
							style={{ ...styles.modalToggle, ...styles.modalClose }}
							onPress={() => {
								setModelOpen(false);
							}}
						/>
						<ReviewForm addReview={addReview} />
					</View>
				</Modal>
				<MaterialIcons
					name="add"
					size={24}
					style={styles.modalToggle}
					onPress={() => {
						setModelOpen(true);
					}}
				/>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => navigation.navigate("ReviewDetails", item)}
						>
							<Card>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Text style={styles.item}>{item.title} </Text>
									<Button
										title="Delete"
										color="coral"
										onPress={() => deleteReview(item.key)}
									/>
								</View>
							</Card>
						</TouchableOpacity>
					)}
				/>
			</ImageBackground>
		</View>
	);
}
