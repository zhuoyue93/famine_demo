import Taro, { Component } from '@tarojs/taro';
import {Text, View} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss';

interface IndexProps  {
  dispatch?: any,
  banner?:any,
  id?:any,
}
@connect(({detail}) => ({
  ...detail,
}))
export default class Detail extends Component<IndexProps,{current}> {

  config = {
    navigationBarTitleText: '项目',
  };

  constructor(props: IndexProps) {
    super(props)
    this.state = {
      current:0
    }
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'detail/effectsDemo',
      payload: {
        id:  this.$router.params.id,
      }
    });
    this.props.dispatch({
      type: 'detail/queryrecord',
      payload: {
        itemid:  this.$router.params.id,
      }
    });
  };

  private buy= () => {
    this.props.dispatch({
      type: 'detail/buy',
      paloy:{
        itemid:  this.$router.params.id,
      }
    });
  };
  handleClick (value) {
    this.setState({
      current: value
    })
  };
  private gotoDetail = e => {
    Taro.navigateTo({
      url: `/pages/webview/index?url=${e.currentTarget.dataset.url}`,
    });
  };
  render() {
    const tabList = [{ title: '课程介绍' }, { title: '课程安排' }];

    return (
      <View className='detail-page'>
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          课程介绍
          {/*<WebView src='https://mp.weixin.qq.com/s/qdRnrCg9-GsQb0qynRR69A'></WebView>*/}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1} >
      <View className='detail-page'>
        {this.props.banner.map((item, index) => ( <View key={index}
          className='at-row'
          data-id={item.id}
          data-url={item.itemurl}
          onClick={this.gotoDetail}
        >

          <View className='at-article__h1'>{item.iteminfo}</View>

          <View className='at-article__h1'>{item.iteminfo}</View>

        </View>))
        }
      </View>
        </AtTabsPane>
      </AtTabs>
        {!this.props.id?
        <View className='detail-page' data-id='' onClick={this.buy}>
          <Text className='dark'>点击购买</Text>
          </View>
          :<View className='detail-page'>
            <Text className='dark'>进入课程</Text>
          </View>
        }
      </View>
    )
  }
}
