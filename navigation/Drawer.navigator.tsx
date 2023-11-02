import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";

import { CustomDrawerContent } from "./CustomDrawerContent";
import { ScreenCreator } from "../components/ScreenCreator";
import { About } from "../screens/About.screen";
import { Home } from "../screens/Home.screen";
import { COLORS } from "../theme";

type DrawerParams = {
  Home: React.FC;
  About: React.FC;
  ScreenCreator: React.FC;
};

const Drawer = createDrawerNavigator<DrawerParams>();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.colorRichBlack,
        },
        headerTintColor: COLORS.colorWhite,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Trending Memes" }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ title: "Meme generator" }}
      />
      <Drawer.Screen
        name="ScreenCreator"
        component={ScreenCreator}
        options={{ title: "About The App" }}
      />
    </Drawer.Navigator>
  );
};
