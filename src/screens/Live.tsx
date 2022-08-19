import React, { useContext, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MainLayout from "../layouts/MainLayout";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import YoutubePlayer, { getYoutubeMeta } from "react-native-youtube-iframe";
import metrics from "../utils/metrics";
import { getYouTubeID } from "../utils";
import { ShareIcon } from "../assets/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
  // @ts-ignore
} from "accordion-collapse-react-native";

function getStyle(theme: ITheme): any {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      width: "100%",
    },
    heading: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
    },
    metaData: {
      marginTop: 10,
    },
    shareContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      fontSize: theme.fonts.title.fontSize,
      fontFamily: theme.fonts.title.fontFamily,
      color: theme.colors.primary,
    },
    description: {
      fontSize: theme.fonts.subTitle.fontSize,
      lineHeight: 30,
    },
  });
}

function Live() {
  const { theme } = useContext(ThemeContext);

  const [metaData, setMetaData] = useState<any>({});

  useEffect(() => {
    getYoutubeMeta(getYouTubeID("https://youtu.be/IiqhMNPWGEs")).then((data) =>
      setMetaData(data)
    );
  }, []);

  useEffect(() => {
    console.log(metaData);
  }, [metaData]);

  return (
    <MainLayout customStyles={getStyle(theme).container}>
      <YoutubePlayer
        height={250}
        width={metrics.screenWidth}
        videoId={getYouTubeID("https://youtu.be/IiqhMNPWGEs")}
      />
      <Collapse
        style={{
          width: "100%",
        }}
        touchableOpacityProps={{
          activeOpacity: 0.8,
        }}
      >
        <CollapseHeader>
          <View style={getStyle(theme).metaData}>
            <Text style={getStyle(theme).title}>{metaData.title}</Text>
            <View style={getStyle(theme).shareContainer}>
              <Text style={getStyle(theme).description}>Description</Text>
              <View>
                <TouchableOpacity onPress={() => console.log("clicked")}>
                  <ShareIcon color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </CollapseHeader>
        <CollapseBody style={{ marginTop: 20 }}>
          <Text style={getStyle(theme).description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </Text>
        </CollapseBody>
      </Collapse>
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.g3,
          height: 1,
          marginTop: 30,
        }}
      ></View>
      <FlatList
        data={new Array(5).fill({
          videoUrl: "https://youtu.be/IiqhMNPWGEs",
        })}
        renderItem={({ item }) => <VideoItem videoUrl={item.videoUrl} />}
      />
    </MainLayout>
  );
}
export default Live;

const VideoItem: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    if (videoUrl) {
      getYoutubeMeta(getYouTubeID(videoUrl))
        .then((data) => {
          setTitle(data.title);
          setThumbnail(data.thumbnail_url);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("finally");
        });
    }
  }, [videoUrl]);

  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ marginVertical: 20, width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          width: "100%",
        }}
      >
        <Image source={{ uri: thumbnail }} style={{ width: 100, height: 70 }} />
        <View style={{ marginLeft: 20 }}>
          <Text style={{ ...theme.default }}>{title}</Text>
          <Text style={{ marginTop: 10, fontSize: theme.fonts.body.fontSize }}>
            This is real desc.
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.g3,
          height: 1,
          marginTop: 10,
        }}
      ></View>
    </View>
  );
};
