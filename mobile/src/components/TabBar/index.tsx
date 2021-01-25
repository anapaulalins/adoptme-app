import React, {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {Container, TabItem} from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const navigationScreen = useCallback(
    (screenName: string) => {
      navigation.navigate(screenName);
    },
    [navigation],
  );
  return (
    <Container>
      <TabItem onPress={() => navigationScreen('Home')}>
        <IconFont
          name="home"
          size={30}
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Search')}>
        <IconFont
          name="search"
          size={30}
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
      <TabItem onPress={() => navigationScreen('Posts')}>
        <IconMaterial
          name="post-add"
          size={33}
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          color="#fbf8ee"
        />
      </TabItem>
    </Container>
  );
};

export default TabBar;
