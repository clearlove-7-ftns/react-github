import React, { Component } from 'react';
import { Flex, Carousel, Grid } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

import { getHouseListApi } from '../../apis/apis';

const data = [
    {
        icon: "icon_1",
        text: '新房'
    },
    {
        icon: "icon_2",
        text: '二手房 '
    },
    {
        icon: "icon_3",
        text: '租房'
    },
    {
        icon: "icon_3",
        text: '商铺写字楼'
    },
    {
        icon: "icon_4",
        text: '买房'
    },
    {
        icon: "icon_5",
        text: '海外房产'
    },
    {
        icon: "icon_6",
        text: '小区房价'
    },
    {
        icon: "icon_7",
        text: '问答'
    },

].map((item) => ({
    icon: require(`../../assets/imgs/${item.icon}.png`),
    text: item.text,
}))

class Home extends Component {
    state = {
        city: '定位中...',
        data: ['carousel_1', 'carousel_2', 'carousel_3'],
        imgHeight: 176,
        houseList: []
    }
    goToSomeWhere = (url) => {
        //路由跳转
        this.props.history.push(url);
    };
    componentDidMount() {
        console.log('widnow', window)

        window.AMap.plugin('AMap.CitySearch', () => {
            var citySearch = new window.AMap.CitySearch()
            citySearch.getLocalCity((status, result) => {
                if (status === 'complete' && result.info === 'OK') {

                    const city = result.city;
                    this.setState({ city });
                }
            })
        });
        //获取房产列表
        this.getHouseListHandler();
    }

    getHouseListHandler = () => {
        getHouseListApi()
            .then((res) => {
                console.log('res', res);
                this.setState({ houseList: res.data });
            })
            .catch((err) => {
                console.log('err', err)
            })
    }

    render() {
        console.log('this.props', this.props)
        const { city, houseList } = this.state
        return (
            <div>
                {/* 头部 */}
                <Flex style={{ height: 50, background: '#29C775' }}>
                    <div style={{ width: 80, color: '#fff', paddingLeft: 5 }}
                        onClick={() => this.goToSomeWhere("/cityList")}>{city}  ▼ </div>
                    <Flex onClick={() => this.goToSomeWhere("/search")} align="center" style={{
                        flex: 1, background: '#fff',
                        height: 40, borderRadius: 20, paddingLeft: 10
                    }}>
                        <img style={{ width: 20, height: 20, marginRight: 5 }} src={require('../../assets/imgs/search.png')} alt="" />
                        <span style={{ color: '#ccc' }}>找房子，到源码房产APP</span>
                    </Flex>
                    <div onClick={() => this.goToSomeWhere("/map")} style={{ width: 50 }}><img style={{ width: 40, height: 40 }} alt="" src={require('../../assets/imgs/map.png')} /></div>
                </Flex>
                {/* 轮播图 */}
                <Carousel infinite>
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require(`../../assets/imgs/${val}.jpg`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}

                            />
                        </a>
                    ))}
                </Carousel>
                {/* 宫格组件 */}
                <Grid data={data} isCarousel />
                {/* 列表 */}
                <div>
                    {
                        houseList.map((item) => {
                            return (
                                <Flex style={{ backgroundColor: '#fff', padding: 3 }} key={item.id}>
                                    <img
                                        src={item.pic}
                                        style={{ width: 100, height: 100, marginRight: 10 }} alt="" />
                                    <div style={{ flex: 1 }}>
                                        <Flex justify="between">
                                            <span>{item.name}</span>
                                            <span style={{ color: 'red' }}>{item.price}/平</span>
                                        </Flex>
                                        <div>{item.address}</div>
                                        <div>3室1厅</div>
                                    </div>
                                </Flex>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}

export default withRouter(Home);
