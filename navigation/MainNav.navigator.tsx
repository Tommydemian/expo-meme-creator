import { AuthStackNavigator } from "./AuthStack.navigator";
import { DrawerNavigator } from "./Drawer.navigator";
import { useAppSelector } from "../hooks/redux/hooks";

export const MainNavigation = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  if (isLoggedIn) {
    return <DrawerNavigator />;
  } else {
    return <AuthStackNavigator />;
  }
};
