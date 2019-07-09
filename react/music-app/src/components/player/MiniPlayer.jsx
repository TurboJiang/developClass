import React, { Component } from 'react'
import './miniPlayer.styl'

export class MiniPlayer extends Component {
    handleShow = () => {
        if (true || this.props.song.url) {
            // 父级传送下来的
            this.props.showMiniPlayer();
        }
    }
    render() {
        const { showStatus } = this.props
        let playerStyle = {}
        if (showStatus) playerStyle = { display: 'none' }
        return (
            <div className="mini-player" style={ playerStyle } onClick={ this.handleShow }>
                miniPlayer
            </div>
        )
    }
}

export default MiniPlayer
