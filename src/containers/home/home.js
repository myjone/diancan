import React, { Component } from 'react'
import "./home.less"
import { Button } from 'antd-mobile';
import { SearchBar} from 'antd-mobile';
const Fragment = React.Fragment
class Home extends Component {
    constructor() {
        super()

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
                <Button type="primary" size="small" inline>small</Button>
            </Fragment>
        )
    }
}
export default Home;