import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import PostItem from './PostItem';

function Posts() {
  const postList = [
    {
      imgSource: require('../assets/images/post-1.jpg'),
      caption: 'rebel queen',
      user: {
        imgSource: require('../assets/images/avatar-5.jpg'),
        username: 'ms.teyzia',
        isOwn: false,
        isHasStory: true
      },
    },
    {
      imgSource: require('../assets/images/post-2.jpg'),
      caption: 'Laag sa ta sa MABINI.',
      user: {
        imgSource: require('../assets/images/avatar-6.jpg'),
        username: 'janrey05',
        isOwn: false,
        isHasStory: true
      },
    },
    {
      imgSource: require('../assets/images/post-3.jpg'),
      caption: 'One of th BEST moment happened in my life. With YUDIFAM.',
      user: {
        imgSource: require('../assets/images/avatar-2.jpg'),
        username: '_galeeemonique',
        isOwn: false,
        isHasStory: true
      },
    }
  ]
  return (
    <View style={styles.container}>
      {
        postList.map((v, i) => {
          return(
            <PostItem key={i} item={v}/>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default Posts;