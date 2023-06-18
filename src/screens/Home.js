import { View, Text, Button, Dimensions } from 'react-native';
import React, { useState } from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'

export default function Home() {
  const { height, width } = Dimensions.get('screen')
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
      }}
    >
      <ContentLoader
        speed={2}
        width={400}
        height={160}
        viewBox="0 0 400 160"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
      >
        <Rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
        <Rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
        <Rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
        <Rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
        <Rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
        <Rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
      </ContentLoader>
    </View>
  );
}
