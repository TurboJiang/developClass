import React, { Component } from 'react';
import './album.styl';
import { CSSTransition } from 'react-transition-group'
import Scroll from '../../common/scroll/Scroll'
import { getAlbumInfo } from '../../api/recommend'
class Album extends Component {
  state = {
    show: false
  }
  componentDidMount() {
    const id = this.props.match.params.id
    getAlbumInfo(id).then(res => {
      console.log('getAlbumInfo', res)
    })
    this.setState({
      show: true
    })
  }
  render() {
    return (
      <CSSTransition in={ this.state.show } timeout={ 300 } classNames='translate'>

        <div className='music-album'>
          <div className="album-img" ref='albumBg'>
            <div className="filter">
              {/* <span>播放</span> */ }

            </div>
          </div>
          <div className="album-img fixed" ref='albumFixedBg'>
            <div className='filter'> </div>
          </div>
          <div className="play-wrapper" ref='playButtonWrapper'>
            <div className="play-button">
              <i className="icon-play">
                <span>播放全部</span>
              </i>
            </div>
          </div>
          <div className="album-container">
            <div className="album-scroll">
              <Scroll>
                  <div></div>
              </Scroll>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default Album