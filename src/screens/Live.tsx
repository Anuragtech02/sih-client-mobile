import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
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
import { ActivityIndicator } from "react-native";
import axios from "axios";

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
  const [videos, setVideos] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [player, setPlayer] = useState<any>({});

  const [metaData, setMetaData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://sih-server-staging.onrender.com/live/all"
        );
        setVideos(
          res.data?.map((item: any) => ({
            ...item,
            videoId: getYouTubeID(item.videoUrl),
          }))
        );
      } catch (error) {
        ToastAndroid.show("Error fetching data", ToastAndroid.SHORT);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (videos?.length) {
      const promises = videos.map((video: any) => {
        return getYoutubeMeta(video.videoId);
      });
      Promise.all(promises)
        .then((res: any) => {
          setVideos(
            videos.map((video: any, index: number) => {
              return {
                ...video,
                metaData: res[index],
              };
            })
          );
          setLoading(false);
          setPlayer(videos[0]);
        })
        .catch((err: any) => {
          ToastAndroid.show("Error fetching data", ToastAndroid.SHORT);
        });
    }
  }, [videos]);

  return (
    <MainLayout customStyles={getStyle(theme).container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={theme.colors.primary} />
        </View>
      ) : (
        <>
          {player && (
            <YoutubePlayer
              height={250}
              width={metrics.screenWidth}
              videoId={player?.videoId}
              onChangeState={(event: any) => {
                if (event.state === "ended") {
                  setPlayer(videos[0]);
                }
              }}
            />
          )}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
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
            data={videos}
            renderItem={({ item }: any) => (
              <Pressable
                onPress={() => {
                  setLoading(true);
                  console.log("Clicked");
                  setPlayer(
                    videos[
                      videos.findIndex(
                        (video: any) => video.videoId === item.videoId
                      )
                    ]
                  );
                  setLoading(false);
                }}
              >
                <VideoItem videoItem={item} />
              </Pressable>
            )}
          />
        </>
      )}
    </MainLayout>
  );
}
export default Live;

const VideoItem: React.FC<{ videoItem: any }> = ({ videoItem }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  useEffect(() => {
    if (videoItem) {
      setTitle(videoItem.metaData.title);
      setThumbnail(videoItem.metaData.thumbnail_url);
    }
  }, [videoItem]);

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
