import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native";
import useStorage from "../../hooks/useStorage";

import { PasswordItem } from "./components/passwordItem";

export const Passwords = () => {
	const [listPasswords, setListPasswords] = useState([]);
	const focused = useIsFocused();
	const { getItem,removeItem } = useStorage();

	useEffect(() => {
		async function loadPasswords() {
			const Passwords = await getItem("@pass");
			setListPasswords(Passwords);
		}
		loadPasswords();
	}, [focused]);

	const handleDeletePassword = async(item) => {
		const passwords = await removeItem("@pass", item)
		
		return setListPasswords(passwords)
	}

	return (
		<SafeAreaView style={{flex:1}}>
			<View style={styles.header}>
				<Text style={styles.title}>Minhas Senhas</Text>
			</View>

			<View style={styles.content}>
				<FlatList
					style={{  paddingTop: 14, paddingLeft:14 ,paddingRight:14 }}
					data={listPasswords}
					keyExtractor={(item) => String(item)}
					renderItem={({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)}/>}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#392de9",
		padding: 14,
		paddingTop: 58,
	},
	title: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
	},
});
