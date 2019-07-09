import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import './player.styl'
import MiniPlayer from './MiniPlayer'
import { Song } from '../../model/song'

class Player extends Component {
  constructor(props) {
    super(props)
    this.currentSong = new Song(0, "", "", "", 0, "", "")
  }
  state = {}
  showPlayer = () => {
    this.props.showMusicPlayer(true)
  }
  render() {
    console.log('player props', this.props);
    if(this.props.currentSong && this.props.currentSong.url) {
      // 当前播放的id与点击的歌曲id不一样 则切歌
      if(this.currentSong.id !== this.props.currentSong.id) {
        this.currentSong = this.props.currentSong
      }
    } 
    let song = this.currentSong
    return (
      <div className="player-container">
        {/* 这个cssTransition无状态切换不显示 */ }
        <CSSTransition in={ this.props.showStatus }
          timeout={ 300 }
          classNames="player-rotate">
          <div className="player" ref="player">
            {/* 头 start */ }
            <div className="header">
              <span className="header-back" onClick={ this.hidePlayer }>
                <i className="icon-back"></i>
              </span>
              <div className="header-title">
                { song.name }
              </div>
            </div>
            {/* 头 end */ }
            {/* 歌手名字 */ }
            <div className="singer-top">
              <div className="singer">
                <div className="singer-name">{ song.singer }</div>
              </div>
            </div>
          </div>
        </CSSTransition>
        {/* 直接显示这个 */ }
        <MiniPlayer showStatus={ this.props.showStatus } showMiniPlayer={ this.showPlayer } />
      </div>
    );
  }
}

export default Player;