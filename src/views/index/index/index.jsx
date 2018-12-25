import React from 'react';
import '../../../public/resources/css/common.css';

export default class Index extends React.Component {
    
    render() {
        return(
            <div>
                <div className='top'>这是gg头部</div>
                <div className='test_section'>
                    <a href='javascript:void();'>首页</a>
                    <a href='/index/login'>商城</a>
                    <a href='/home/index'>home页</a>
                    <a href='/alert/index'>alert页</a>
                </div>
                <div>这是首页</div>
                <div className='bottom'>这是底部</div>
            </div>
        )
    }
}