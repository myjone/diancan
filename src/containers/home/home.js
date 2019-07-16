import React, { Component } from 'react'
import "./home.less"
import { Button } from 'antd-mobile';

const Fragment = React.Fragment
class Home extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <Fragment>
                <Button type="primary" size="small" inline>small</Button>
            </Fragment>
        )
    }
}
export default Home;