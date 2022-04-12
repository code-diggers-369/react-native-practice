import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import Axios from 'axios';

export default function Home() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    fetchApiData();
    return () => {};
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/${pageNo}/todos`,
      );

      // console.log(response.data);
      setDataList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    setPageNo(pageNo + 1);
    await fetchApiData();

    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ScrollView
        style={{height: '100%', width: '100%'}}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
          />
        }>
        {dataList.map((ls, i) => {
          return (
            <Text key={i} style={{marginHorizontal: 7, marginVertical: 10}}>
              Id = {ls.id} Title = {ls.title}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
}
