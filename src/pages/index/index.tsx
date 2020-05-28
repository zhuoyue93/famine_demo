import Taro, {Component} from '@tarojs/taro'
import {View, Swiper, Image, SwiperItem} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import './index.scss'


interface IndexProps {
  dispatch?: any,
  banner?: any
}

@connect(({index, user}) => ({
  ...index, ...user
}))
class Index extends Component<IndexProps> {
  config = {
    navigationBarTitleText: '首页',
  };

  constructor(props: IndexProps) {
    super(props)
    this.state = {}
  }


  componentDidMount = () => {
    this.props.dispatch({
      type: 'index/swiper',
    });
    this.props.dispatch({
      type: 'user/effectsDemo',
    });

  }
  private gotoDetail = e => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${e.currentTarget.dataset.id}`,
    });
  };

  render() {
    return (
      <View className='index'>
        <Swiper indicatorDots circular autoplay>
          {this.props.banner.map((item, index) => (<SwiperItem key={index}>
            <Image mode='widthFix' src={`${item.primaryPicUrl}`} />
          </SwiperItem>))
          }
        </Swiper>
        <View className='recommend'>为你推荐</View>
        <View className='goods-ul'>
          {this.props.banner.map((item, index) => (<View key={index}
            className='goods-li'
            data-id={item.id}
            onClick={this.gotoDetail}
          >
            <View className='goods'>
              <Image src={`${item.primaryPicUrl}`} />
            </View>
            <View className='goods'>
              <View className='at-article__h1'>{item.name}</View>
              <View className='at-article__info'>{item.simpleDesc}</View>
              <View className='at-article__p'>¥{item.price}</View>
            </View>
          </View>))
          }
        </View>
      </View>
    )
  }
}

export default Index;
