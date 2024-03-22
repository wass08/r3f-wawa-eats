import { Canvas } from "@react-three/fiber/native";
import { StatusBar } from "expo-status-bar";
import { Suspense } from "react";
import { StyleSheet, View } from "react-native";
import { BottomUI } from "./components/BottomUI";
import { Sandwich } from "./components/Sandwich";

export default function App() {
  return (
    <View style={styles.container}>
      <Canvas camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />
        <Suspense>
          <Sandwich />
        </Suspense>
      </Canvas>
      <BottomUI />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
