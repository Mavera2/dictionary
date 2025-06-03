import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    alignItems: "center",
    justifyContent: "center",
  },

  words: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#212529",
  },

  current: {
    color: "#6c757d",
    fontSize: 24,
  },

  nav: {
    margin: 10,
    width: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  word: {
    flexDirection: "row",
    width: "90%",
    height: 200,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },

  wordSegment: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  en: {
    fontWeight: "bold",
    fontSize: 36,
    color: "#343a40",
  },

  tr: {
    fontWeight: "600",
    fontSize: 22,
    color: "#adb5bd",
  },

  createButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },

  circle: {
    width: 70,
    height: 70,
    backgroundColor: "#343a40",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  textBox: {
    width: 280,
    height: 50,
    marginVertical: 8,
    backgroundColor: "#f1f3f5",
    paddingLeft: 20,
    borderRadius: 25,
    fontSize: 18,
    color: "#212529",
  },

  button: {
    flexDirection: "row",
    width: 280,
    height: 50,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212529",
    borderRadius: 25,
  },

  buttonText: {
    marginLeft: 8,
    fontWeight: "600",
    color: "white",
    fontSize: 18,
  },

  close: {
    position: "absolute",
    top: 15,
    right: 25,
  },

  cross: {
    color: "#6c757d",
    fontWeight: "bold",
    fontSize: 26,
  },

  modal: {
    width: "100%",
    height: 350,
    backgroundColor: "#ffffff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
  },
});
