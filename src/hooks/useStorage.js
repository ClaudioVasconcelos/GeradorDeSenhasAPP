import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
	const getItem = async (key) => {
		try {
			const password = await AsyncStorage.getItem(key);
			return JSON.parse(password || []);
		} catch (error) {
			console.log("🚀 ~ file: useStorage.js:9 ~ getItem ~ error:", error);
			return [];
		}
	};

	const saveItem = async (key, value) => {
		try {
			let password = await getItem(key);
			password.push(value);

			await AsyncStorage.setItem(key, JSON.stringify(password));
		} catch (error) {
			console.log("🚀 ~ file: useStorage.js:19 ~ saveItem ~ error:", error);
		}
	};

	const removeItem = async (key, item) => {
		try {
			let password = await getItem(key);
			let myPassword = password.filter((password) => {
				return password !== item;
			});

            await AsyncStorage.setItem(key, JSON.stringify(myPassword))
            return myPassword;
		} catch (error) {
			console.log("🚀 ~ file: useStorage.js:32 ~ removeItem ~ error:", error);
		}
	};

	return {
		getItem,
		saveItem,
		removeItem,
	};
};
export default useStorage;
