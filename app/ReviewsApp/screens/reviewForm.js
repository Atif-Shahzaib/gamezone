import React from "react";
import { Button, TextInput, View, ImageBackground, Vibration } from "react-native";
import { Formik } from "formik";
import styles from "../config/css";
export default function ReviewForm({ addReview }) {
	return (
		<ImageBackground style={styles.backgroundImage2} source={require("../assets/chair.jpg")}>
			<Formik
				initialValues={{ title: "", body: "", rating: "" }}
				onSubmit={(values) => {
					Vibration.vibrate();
					addReview(values);
				}}
			>
				{(props) => (
					<View>
						<TextInput
							style={styles.formikInput}
							placeholder="Review Title"
							onChangeText={props.handleChange("title")}
							value={props.values.title}
						/>
						<TextInput
							multine
							style={styles.formikInput}
							placeholder="Review Body"
							onChangeText={props.handleChange("body")}
							value={props.values.body}
						/>
						<TextInput
							style={styles.formikInput}
							placeholder="Rating (1-5)"
							onChangeText={props.handleChange("rating")}
							value={props.values.rating}
							keyboardType="numeric"
						/>

						<Button
							title="submit"
							color="maroon"
							onPress={props.handleSubmit}
						/>
					</View>
				)}
			</Formik>
			</ImageBackground>
	);
}
