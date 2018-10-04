import React,{ Component } from 'react';
import './index.less'
import {connect} from 'react-redux';
import  *as actionCreators from './store/actionCreators';

class Header extends Component{
  render(){
    const {focused,handleInputFocus, handleInputBlur,list,login,logout} =this.props;
    return (
        <div className="HeaderWrapper">
          <div className="logo"></div>
          <div className="Nav clearfix">
            <div className="navitem home active">
              <i className="iconfont">&#xe607;</i>
              首页
            </div>
            <div className="navitem download">
              <i className="iconfont">&#xe604;</i>
              下载App
            </div>
            <div className="SearchWrapper">
              <input type="text" className={focused?'focused ':'blur '} placeholder="搜索"  onFocus={()=>handleInputFocus()}
                     onBlur={handleInputBlur}/>
              <i className={focused?'iconfont zoom':'iconfont search'}>&#xe600;</i>
            </div>
            <div className="navitem login">登录</div>
            <div className="navitem font">Aa</div>
          </div>
          <div className="Addition">
            <button className="write">
              <i className="iconfont">&#xe68f;</i>写文章
            </button>
            <button className="regist">注册</button>
          </div>
        </div>
    );
  }
}
const mapStateToProps=(state) =>{
  return {
    focused:state.get('header').get('focused')
  }
};
const mapDispatchToProps=(dispatch)=>{
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  };
}
export  default connect(mapStateToProps,mapDispatchToProps)(Header);