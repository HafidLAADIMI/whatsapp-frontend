import { Alert } from "react-native";
import { Client, Account, ID } from "react-native-appwrite";

const client = new Client()
    .setProject('670d97c600243027c8ea')
    .setPlatform('hafid.whatsapp.app');

const account = new Account(client);

// send otp funtion
export const sendOtp = async (phone: string) => {
  try {
    const token = await account.createPhoneToken(ID.unique(), phone);
    if(!token || !token.userId) {
        Alert.alert("Wrong phone number please try again");
    }
    const userId = token.userId;
    return userId;
  } catch (error) {
    console.log(error);
    
  }
};

// verify the otp
export const verifyOtp = async (userId: string, code: string) => {
  try {
    const session = await account.createSession(userId, code);
    if(!session || !session.$id) {
        Alert.alert("Wrong code please try again");
    };
    return session;
  } catch (error) {
    console.log(error);
    // Alert.alert("Something went in verifyOtp");
  }
};
