import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({study}) => ({
  ...study,
}))
export default class Study extends Component {
  config = {
    navigationBarTitleText: '学习',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='study-page'>
        study
      </View>
    )
  }
}
