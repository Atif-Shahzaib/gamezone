import React from "react";
import Home from "./app/ReviewsApp/screens/home";
import Navigator from "./app/ReviewsApp/routes/drawer";
import { ImageBackground  } from "react-native";
import styles from "./app/ReviewsApp/config/css";
export default function App() {
	return (
			<Navigator>
				<Home />
			</Navigator>
	);
}