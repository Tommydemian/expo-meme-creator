import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

import { COLORS, SPACING } from "../theme";

type DraweItemProps = {
  route: { name: string };
  index: string;
  selectedIndex: string;
  navigation: DrawerNavigationProp<any>;
};

export const DrawerItem: React.FC<DraweItemProps> = ({
  route,
  index,
  selectedIndex,
  navigation,
}) => {
  return (
    <Pressable onPress={() => navigation.navigate(route.name)}>
      <View
        style={[
          styles.listItemContainer,
          index === selectedIndex && styles.selectedListItemContainer,
        ]}
      >
        {route.name === "Home" ? (
          <Ionicons
            name="home-outline"
            size={24}
            color={
              index === selectedIndex
                ? COLORS.colorRuddyBlue
                : COLORS.colorRichBlack
            }
          />
        ) : route.name === "About" ? (
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={
              index === selectedIndex
                ? COLORS.colorRuddyBlue
                : COLORS.colorRichBlack
            }
          />
        ) : (
          <Ionicons
            name="information-circle-outline"
            size={24}
            color={
              index === selectedIndex
                ? COLORS.colorRuddyBlue
                : COLORS.colorRichBlack
            }
          />
        )}
        <Text
          style={[
            styles.listItemText,
            index === selectedIndex && styles.selectedListItem,
          ]}
        >
          {route.name}
        </Text>
      </View>
    </Pressable>
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
