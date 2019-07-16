import React, { Component } from 'react'
import "./home.less"
import { SearchBar } from 'antd-mobile';
import { Badge } from 'antd-mobile';

const Fragment = React.Fragment
class Home extends Component {
    constructor() {
        super()
        this.state = {
            val: 3,
            val1: 2,
            sign: false,
        };

    }
    onChange = (val) => {
        // console.log(val);
        this.setState({ val });
    }
    onChange1 = (val1) => {
        // console.log(val);
        this.setState({ val1 });
    }
    handleColor =()=>{
        this.setState({ sign: !this.state.sign });
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <SearchBar placeholder="搜索商品" maxLength={8} />
                    <div className='shopContainer'>
                        <div className='shopImage'></div>
                        <div className='shopInfo'>
                            <div className='shopTitle'>
                                店铺名字(青浦区雨大小酒店)
                                </div>
                            <div className='commonInfo'>商家地址：成都市万达金街拱成都市万达金街拱墅区成都市万达金街拱墅区成都市万达金街拱墅区墅区</div>
                            <div className='commonInfo'>公告：这个是商家的公告</div>
                            <div className='commonInfo smallCommonInfo'>
                                <div className='tag'>首</div>
                                <div className='espText'> 新用户下单立减20元(不可与其他活动同享)</div>
                                <div className='more'>共<span className='red'>5</span>个活动</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='shopContain'>
                    <div className='bavBarWrap'>
                        <div className="tabItem active">
                            美味汉堡/鸡腿
                        </div>
                        <div className="tabItem">
                            美味汉堡/鸡腿
                        </div>
                    </div>
                    <div className='goodsListWrap'>
                        <div className='navTitle'>
                            美味汉堡/鸡腿
                        </div>
                        <div className='goodItem'>
                            <div className='goodImage'>
                                <div className='label'>
                                    <Badge text="券" style={{ padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
                                </div>
                            </div>
                            <div className='goodContain'>
                                <div className="goodName">商品标题商商品标题商品标题商品标题品标题商品标题</div>
                                <div className='goodsInfo'>月销量999笔</div>
                                <div className="goodsPrice">
                                    ￥18.5
                                   <div className='hrPrice'>18</div>
                                </div>

                                <div className='stepWrap'>


                                    <div className={['scroll',this.state.sign ? "active" : 'scroll'].join(' ')}>
                                        <div className='reduce'></div>
                                        <input className='stepinput' />
                                    </div>
                                    <div className='add'
                                         onClick={this.handleColor} 
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <div className='shopCard '>
                        <div className='shopImage active'>
                            <div className='badgeWrap'>
                                <Badge text="99" hot />
                            </div>
                        </div>
                    </div>
                    <div className='infoBar'>
                        下单减13元，再买<span className='red'>12</span>元可减去<span className='red'>30</span>元
                </div>

                    <div className="barInfo">
                        <div className='infoText' hidden>未选购商品</div>
                        <div className="price">￥18.5</div>
                    </div>
                    <div className='btn active'>
                        去结算
                </div>
                </div>
            </Fragment>
        )
    }
}
export default Home;