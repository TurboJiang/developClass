import React, { Component } from 'react';
import BScroll from 'better-scroll'
 import './scroll.styl'
 import Lazyload from 'react-lazyload'
class Scroll extends Component {
  state = {}
  componentDidUpdate(){
    if(this.bscroll && this.props.refresh){
      this.bscroll.refresh()
    }
  }
  // componentDidUpdate() {
  //   if(this.bscroll && this.props.refresh) {
  //     this.bscroll.refresh()
  //   }
  // }
  componentDidMount(){
    if(!this.bscroll){
      this.bscroll = new BScroll(this.refs.scrollView,{
        probeType:3,
        click:() =>{},
      })
          this.bscroll.on('scroll',(e) =>{
            this.props.onScroll(e)
          })
    }
  }
  componentWillMount(){
    this.bscroll = null;
  }
  render() {
    return (
      
        <div className="scroll-view" ref='scrollView'>
          {this.props.children}
        </div>
      
    );
  }
}

export default Scroll;