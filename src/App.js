import React from 'react';
import {HashRouter,Switch,Route} from 'react-router-dom';
import Loadable from 'react-loadable';
import Main from './pages/main/Main';

const Loding = ()=><div>加载中...</div>;//函数组件ccccccc
const Login = Loadable({
  loader: () => import(/*webpackChunkName:'login'*/'./pages/Login'),
  loading:Loding
});
const Reg = Loadable({
  loader: () => import(/*webpackChunkName:'reg'*/'./pages/Reg'),
  loading:Loding
});

const Forgot = Loadable({
  loader: () => import(/*webpackChunkName:'forgot'*/'./pages/Forgot'),
  loading:Loding
});

const CityList = Loadable({
  loader: () => import(/*webpackChunkName:'cityList'*/'./pages/CityList'),
  loading:Loding
});

const Search = Loadable({
  loader: () => import(/*webpackChunkName:'search'*/'./pages/Search'),
  loading:Loding
});

const MapPage = Loadable({
  loader: () => import(/*webpackChunkName:'mapPage'*/'./pages/MapPage'),
  loading:Loding
});


class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/forgot" component={Forgot}/>
          <Route path="/cityList" component={CityList}/>
          <Route path="/search" component={Search}/>
          <Route path="/map" component={MapPage}/>
        </Switch>
      </HashRouter>
    )
  }
}




export default App;
