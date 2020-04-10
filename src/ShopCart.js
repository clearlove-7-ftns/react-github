import React, { Component } from 'react'

export default class ShopCart extends Component {
    state = {
        list: [
            { id: 0, name: '苹果', price: 10, num: 1 },
            { id: 1, name: '香蕉', price: 5, num: 2 },
            { id: 2, name: '西瓜', price: 7, num: 1 },
        ],
        name:"张三",
        total:0,

    }
    componentDidMount(){
        this.getTotal();
    }
    changeNum = (index,n)=>{
        //找到当前操作的那条数据，然后修改该条数据里面的num字段，（加一或减一）
        const {list} = this.state;
        list[index].num += n;//到这一步数据已经发生变化了,但是界面没有更新
        this.setState({list});//异步的
        this.getTotal();
        console.log('list',list)
    }
    deleteHandler = (index)=>{
        const {list} = this.state;
        list.splice(index,1);//到这一步数据已经发生变化了,但是界面没有更新
        this.setState({list});
        this.getTotal()

    }
    //总结计算
    getTotal = ()=>{
        console.log('getTotal被执行了')
        const {list} = this.state;
        let total = 0;
        list.forEach((item)=>{
            total += item.price * item.num
        });
        this.setState({total});
        // return total;
    }
    changeName = ()=>{
        this.setState({name:'王二麻子'});
    }
    render() {
     
        return (
            <div>
                <div>
                    <i className="iconfont icon-i-pwd"></i>
                </div>
                <div>
                    我叫：{this.state.name} <button onClick={this.changeName}>点我修改名字</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>商品名</td>
                            <td>单价</td>
                            <td>数量</td>
                            <td>小计</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item, key) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button disabled={item.num === 1} onClick={()=>this.changeNum(key,-1)}>-</button>
                                            {item.num}
                                            <button onClick={()=>this.changeNum(key,1)}>+</button>
                                        </td>
                                        <td>{item.num * item.price}</td>
                                        <td><button onClick={()=>this.deleteHandler(key)}>删除</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                    <div>总价：{this.state.total}</div>
            </div>
        )
    }
}
