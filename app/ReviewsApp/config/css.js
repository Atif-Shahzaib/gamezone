import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 40,
	},
	backgroundImage: {
		height: '100%',
		width: '100%'
	},
	backgroundImage2: {
		height: '100%',
		width: '100%',
		paddingBottom: 50
	},
	header: {
		width: "100%",
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerText: {
		fontWeight: "bold",
		fontSize: 20,
		color: "#333",
		letterSpacing: 1,
	},
	icon: {
		position: "absolute",
		left: 16,
	},
	card: {
		borderRadius: 6,
		elevation: 3,
		backgroundColor: "#fff",
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: "#333",
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
	},
	cardContent: {
		marginHorizontal: 18,
		marginVertical: 20,
	},
	headerImage: {
		width: 26,
		height: 26,
		marginHorizontal: 10,
	},
	headerTitle: {
		flexDirection: "row",
	},
	background: {
		width: "100%",
	},
	modalContent: {
		flex: 1,
	},
	modalToggle: {
		marginBottom: 10,
		borderWidth: 1,
		borderColor: "#f2f2f2",
		padding: 10,
		borderRadius: 0,
		//alignSelf: 'center',
		textAlign: "center",
		backgroundColor: "coral",
	},
	modalClose: {
		marginTop: 9,
	},
	formikInput: {
		borderWidth: 1,
		borderColor: "#ddd",
		padding: 10,
		fontSize: 10,
		borderRadius: 6,
		paddingLeft: 20,
		//marginTop: 10,
		marginBottom: 20,
		width: "80%",
		alignSelf: "center",
	},
	addStuff:
	{
		height: 75,
		borderRadius: 6,
		elevation: 3,
		shadowOffset: {
			width: 1,
			height: 1,
		},
		shadowColor: "#333",
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
		backgroundColor: '#40e0d0',
		alignItems: "center",
		paddingTop: 25
	}
});
export default styles;
