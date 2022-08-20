import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Article, TrendingTabs } from "../screens/";

const Stack = createStackNavigator();

const newNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrendingTabs"
        component={TrendingTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Articles"
        component={Article}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default newNavigation;
