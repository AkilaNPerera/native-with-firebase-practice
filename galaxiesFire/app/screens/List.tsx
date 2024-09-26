import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { FIREBASE_AUTH } from "../../firebaseconfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginTop: 10 }}>
        <Button
          onPress={() => navigation.navigate("Details")}
          title="Open Details"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
      </View>
    </View>
  );
};

export default List;
