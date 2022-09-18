import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { DropDownIcon } from "../assets/icons";
import MainLayout from "../layouts/MainLayout";
import { ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    dropDown: {
      width: "100%",
      backgroundColor: theme.colors.background,
      paddingVertical: 8,
      justifyContent: "center",
      alignItems: "flex-start",
      borderWidth: 1,
      borderRadius: 8,
    },
    dropDownPlaceHolder: {
      marginHorizontal: 10,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.black,
    },
    dropDownItemsContainer: {
      width: "100%",
      height: 200,
      position: "absolute",
      top: 8,
      left: 0,
      zIndex: 1,
      elevation: 1,
    },
    dropDownItems: {
      width: "100%",
      borderBottomWidth: 1,
      padding: 14,
    },
    dropDownIcon: {
      position: "absolute",
      right: 4,
    },
    dropDownAllItems: {
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.black,
    },
    placeHolderContainer: {
      width: "100%",
      padding: 4,
      marginHorizontal: 4,
      marginVertical: 4,
      justifyContent: "center",
    },
    placeHolder: {
      width: "100%",
      padding: 4,
      marginHorizontal: 4,
      marginVertical: 4,
    },
  });
}

const DropDownSingleSelect: React.FC<{
  myList: any;
  onChange: Function;
  current: any;
}> = ({ myList, onChange, current }) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [value, setValue] = useState<String>(current);
  const { theme } = useContext(ThemeContext);
  //console.log(current);
  return (
    <View style={getStyles(theme).dropDown}>
      {value ? (
        <TouchableOpacity
          style={getStyles(theme).placeHolderContainer}
          activeOpacity={1}
          onPress={() =>
            openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)
          }
        >
          <Text style={getStyles(theme).dropDownPlaceHolder}>{value}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={getStyles(theme).placeHolder}
          activeOpacity={1}
          onPress={() =>
            openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)
          }
        >
          <Text style={getStyles(theme).dropDownPlaceHolder}>
            Select Language
          </Text>
        </TouchableOpacity>
      )}
      <DropDownIcon
        customStyle={getStyles(theme).dropDownIcon}
        customOnPress={() =>
          openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)
        }
      />

      {openDropDown && (
        <View style={{ width: "100%" }}>
          <View style={getStyles(theme).dropDownItemsContainer}>
            <ScrollView>
              {myList.map((item: any) => (
                <TouchableOpacity
                  style={{
                    ...getStyles(theme).dropDownItems,
                    backgroundColor:
                      value === item.name ? theme.colors.g1 : theme.colors.g4,
                  }}
                  activeOpacity={1}
                  onPress={() => {
                    setValue(item.name),
                      onChange(item.id),
                      setOpenDropDown(false);
                  }}
                >
                  <Text style={getStyles(theme).dropDownAllItems}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};
export default DropDownSingleSelect;
