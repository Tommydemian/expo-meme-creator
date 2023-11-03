import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/Login.screen";

type StackParams = {
  Login: React.FC;
};

const Stack = createStackNavigator<StackParams>();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
