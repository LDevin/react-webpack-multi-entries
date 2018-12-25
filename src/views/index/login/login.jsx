import React from 'react';
import '../../../public/resources/css/common.css';
import '../../../public/resources/css/shop.css';

export default class Index extends React.Component {

    render() {
        return(
            <div>
                <div className='top'>这是头部</div>
                <div className='test_section'>
                    <a href='/index/index'>首页</a>
                    <a href='javascript:void();'>商城</a>
                </div>
                <div>这是商城</div>
                <div className='shop-content'>
                    <img src={require('../../../public/resources/images/img_map_longgang.png')}/>
                </div>
                <div className='bottom'>这是底部</div>
            </div>
        )
    }
}