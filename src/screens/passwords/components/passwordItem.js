import { TextInput, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export function PasswordItem({ data, removePassword }) {
	const [showPassword, setShowPassword] = useState(false);
	const eyeIcon = showPassword ? (
		<Entypo name="eye-with-line" size={24} color="#fff" />
	) : (
		<AntDesign name="eyeo" size={24} color="#fff" />
	);
	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Pressable onLongPress={removePassword} style={styles.container}>
			<TextInput style={styles.Text} secureTextEntry={!showPassword}>
				{data}
			</TextInput>
			<TouchableOpacity onPress={togglePasswordVisibility}>{eyeIcon}</TouchableOpacity>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#0e0e0e",
		padding: 14,
		width: "100%",
		marginBottom: 14,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},
	Text: {
		color: "#fff",
	},
});
