import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Pressable, Text, View, StyleSheet } from "react-native";

import { COLORS, SPACING } from "../theme";

export const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      {props.state.routes.map((route: { name: string }, index: string) => (
        <Pressable
          key={index}
          onPress={() => props.navigation.navigate(route.name)}
        >
          <View
            style={[
              styles.listItemContainer,
              index === props.state.index && styles.selectedListItemContainer,
            ]}
          >
            {route.name === "Home" ? (
              <Ionicons
                name="home-outline"
                size={24}
                color={
                  index === props.state.index
                    ? COLORS.colorRuddyBlue
                    : COLORS.colorRichBlack
                }
              />
            ) : route.name === "About" ? (
              <Ionicons
                name="chatbubble-outline"
                size={24}
                color={
                  index === props.state.index
                    ? COLORS.colorRuddyBlue
                    : COLORS.colorRichBlack
                }
              />
            ) : (
              <Ionicons
                name="information-circle-outline"
                size={24}
                color={
                  index === props.state.index
                    ? COLORS.colorRuddyBlue
                    : COLORS.colorRichBlack
                }
              />
            )}
            <Text
              style={[
                styles.listItemText,
                index === props.state.index && styles.selectedListItem,
              ]}
            >
              {route.name}
            </Text>
          </View>
        </Pressable>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    paddingLeft: SPACING.spacing10,
    paddingVertical: SPACING.spacing10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: SPACING.spacing10,
  },
  listItemText: {
    fontSize: 15,
    fontWeight: "600",
    paddingLeft: SPACING.spacing10,
  },
  selectedListItem: {
    color: COLORS.colorRuddyBlue,
  },
  selectedListItemContainer: {
    backgroundColor: COLORS.colorColumbiaBlue,
  },
});
