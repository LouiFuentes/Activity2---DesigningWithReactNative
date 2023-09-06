import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import StoryItem from './StoryItem';

function Stories() {
  const storyList = [
    {
      imgSource: require('../assets/images/avatar-1.jpg'),
      username: '',
      isOwn: true,
      isHasStory: false
    },
    {
      imgSource: require('../assets/images/avatar-2.jpg'),
      username: '_galeeemonique',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-3.jpg'),
      username: 'fritzgliss08',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-4.jpg'),
      username: 'itsme_ivybalatero',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-5.jpg'),
      username: 'ms.teyzia',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-6.jpg'),
      username: 'janrey05',
      isOwn: false,
      isHasStory: true
    },
    {
      imgSource: require('../assets/images/avatar-7.jpg'),
      username: 'dnlfhrd',
      isOwn: false,
      isHasStory: true
    }
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {
        storyList.map((v, i) => {
          return (
            <StoryItem key={i} item={v}/>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default Stories;