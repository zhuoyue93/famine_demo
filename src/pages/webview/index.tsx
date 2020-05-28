import Taro, { Component } from '@tarojs/taro';
import {View, WebView} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import './index.scss';

@connect(({webview}) => ({
  ...webview,
}))
export default class Webview extends Component {
  config = {
    navigationBarTitleText: 'webview',
  };

  componentDidMount = () => {

  };

  render() {
    return (
      <View className='webview-page'>
        <WebView src='https://mp.weixin.qq.com/s/qdRnrCg9-GsQb0qynRR69A'></WebView>
        {/*<WebView src={this.$router.params.url}></WebView>*/}
      </View>
    )
  }
}
