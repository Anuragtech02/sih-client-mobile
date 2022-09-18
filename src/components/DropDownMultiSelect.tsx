import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { CloseIcon, DropDownIcon } from "../assets/icons";
import MainLayout from "../layouts/MainLayout";
import { ThemeContext } from "../utils/contexts";
import { ITheme } from "../utils/contexts/interfaces";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      borderRadius: 8,
      marginTop: 8,
      justifyContent: "center",
    },
    dropDownContainer: {
      overflow: "hidden",
      paddingBottom: 5,
      borderRadius: 4,
    },
    dropDown: {
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "white",
      padding: 8,
      justifyContent: "flex-start",
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
      borderRadius: 4,
      elevation: 6,
    },
    dropDownPlaceHolder: {
      marginHorizontal: 10,
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
      color: theme.colors.black,
    },
    dropDownItemsContainer: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 250,
      zIndex: 1,
      elevation: 1,
    },
    dropDownItems: {
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
      borderWidth: 1,
      padding: 4,
      borderRadius: 10,
      marginHorizontal: 4,
      marginVertical: 4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    placeHolder: {
      padding: 4,
      marginHorizontal: 4,
      marginVertical: 4,
    },
  });
}

const DropDownMultiSelect: React.FC<{ myList: any; selected: any }> = ({
  myList,
  selected,
}) => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const [list, setList] = useState<any[]>(selected);
  const { theme } = useContext(ThemeContext);
  return (
    <MainLayout customStyles={getStyles(theme).container} disableDefaultPadding>
      {openDropDown && (
        <View style={{ width: "100%" }}>
          <View style={getStyles(theme).dropDownItemsContainer}>
            <FlatList
              data={myList}
              keyExtractor={(item) => item.id}
              nestedScrollEnabled
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    ...getStyles(theme).dropDownItems,
                    backgroundColor: list.includes(item.name)
                      ? theme.colors.g1
                      : theme.colors.g4,
                  }}
                  activeOpacity={1}
                  onPress={() =>
                    // setList(
                    //   Boolean(list.find((pre) => pre.name === item.name)?.name)
                    //     ? list.filter((data) => data.name != item.name)
                    //     : [...list, { id: item.id, name: item.name }]
                    // )
                    setList(
                      list.includes(item.name)
                        ? list.filter((data) => data != item.name)
                        : [...list, item.name]
                    )
                  }
                >
                  <Text style={getStyles(theme).dropDownAllItems}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      )}

      {/* <View style={getStyles(theme).dropDownContainer}> */}
      <View style={getStyles(theme).dropDown}>
        {list.length !== 0 ? (
          list.map((items) => (
            <View style={getStyles(theme).placeHolderContainer}>
              {/* <Text style={getStyles(theme).dropDownPlaceHolder}>{items.name}</Text> */}
              <Text style={getStyles(theme).dropDownPlaceHolder}>{items}</Text>
              <CloseIcon
                color="black"
                customOnPress={() =>
                  setList(
                    // list.filter((data) => data.name != items.name)
                    list.filter((data) => data != items)
                  )
                }
              />
            </View>
          ))
        ) : (
          <View style={getStyles(theme).placeHolder}>
            <Text style={getStyles(theme).dropDownPlaceHolder}>
              Select Regions
            </Text>
          </View>
        )}
        <DropDownIcon
          customStyle={getStyles(theme).dropDownIcon}
          customOnPress={() =>
            openDropDown ? setOpenDropDown(false) : setOpenDropDown(true)
          }
        />
      </View>
    </MainLayout>
    // </View>
  );
};
export default DropDownMultiSelect;
