import Taro, { Component } from '@tarojs/taro';
import {Text, View} from '@tarojs/components';
import {AtAvatar} from "taro-ui";
import { connect } from '@tarojs/redux';
import './index.scss';

interface IndexProps  {
  dispatch?: any,
  userInfo?:any,
  data?:any,

}
@connect(({user}) => ({
  ...user,
}))
export default class User extends Component<IndexProps> {
  config = {
    navigationBarTitleText: '我的',
  };


  render() {
    return (
      <View className='user-page'>
        <AtAvatar circle  image={`${this.props.userInfo.avatarUrl}`} />
        <Text className='recommend'>{this.props.userInfo.nickName}</Text>
        <Text className='recommend'>{this.props.data.openid}</Text>
      </View>
    )
  }
}
