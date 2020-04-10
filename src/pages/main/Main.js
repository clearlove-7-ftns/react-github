import React, { Component } from 'react';
import { TabBar, } from 'antd-mobile';//引用要用的UI组件
import Home from './Home';
import Wechat from './Wechat'
import History from './History'
import My from './My'
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: [
                { id: 0, title: '首页', icon: "home" },
                { id: 1, title: '微聊', icon: "wechat" },
                { id: 2, title: '历史', icon: "history" },
                { id: 3, title: '我的', icon: "my" },
            ],
            selectedTab: 0,
        };
    }
    renderContent(id) {
     
        switch (id) {
            case 0:
              
                return <Home />;
            case 1:
                return <Wechat/>;
            case 2:
                return <History/>;
            case 3:
                return <My/>;
            default:
                return <Home/>
        }
    }
    render() {
        const { tabList } = this.state;
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"//未选中的字体颜色
                    tintColor="#29C775"//选中的字体颜色
                    barTintColor="white"//tabbar 背景色
                >
                    {
                        tabList.map((item) => {
                            return (
                                <TabBar.Item
                                    title={item.title}
                                    key={item.id}
                                    icon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/imgs/' + item.icon + '.png')}) center center /  cover no-repeat`
                                    }}
                                    />
                                    }
                                    selectedIcon={<div style={{
                                        width: '22px',
                                        height: '22px',
                                        background: `url(${require('../../assets/imgs/' + item.icon + '_s.png')}) center center / cover no-repeat`
                                    }}
                                    />
                                    }
                                    selected={this.state.selectedTab === item.id}//当前tab是否被选中
                                    onPress={() => {
                                        this.setState({
                                            selectedTab: item.id,
                                        });
                                    }}
                                >
                                    {this.renderContent(item.id)}
                                </TabBar.Item>
                            )
                        })
                    }

                </TabBar>
            </div>
        );
    }
}
