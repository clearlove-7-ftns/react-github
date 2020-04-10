import React from 'react';
import ReactDOM from 'react-dom';
//引入重置样式
import './assets/styles/reset.css';

//引入字体文件样式
import './assets/fonts/iconfont.css';
//引入ant design mobile全局样式
import 'antd-mobile/dist/antd-mobile.css'; 
//引入axios拦截器
import './utils/axiosUtil';

import App from './App';


ReactDOM.render(<App />, document.getElementById('root'));

