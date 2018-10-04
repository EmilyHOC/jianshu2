import React,{ Component } from 'react';
import './index.less';
import Topic from "./components/Topic";
import {connect} from 'react-redux';
import *as actionCreators from './store/actionCreators';
import Sliders from './components/Slider'



class Home extends Component{
  render(){
    return (
      <div className="HomeWrapper">
      <div className="HomeLeft">
        <Sliders></Sliders>
        <Topic></Topic>
      </div>
        <div className="HomeRight">右边</div>
    </div>
    );
  }
  componentDidMount(){
    this.props.changeHomeData();
  }

}

const MapDispatchToProps=(dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo());
    }
  }
}
export default connect(null,MapDispatchToProps)(Home);