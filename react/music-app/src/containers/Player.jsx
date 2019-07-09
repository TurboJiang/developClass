import { connect } from 'react-redux';
import Player from '../components/player/Player';
import { showplayer } from '../redux/action'
// 返回的东西在props上显示
const mapStateToprops = (state) => {
  return {
    showStatus: state.showStatus,
    currentSong: state.song
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    showMusicPlayer: (status) => {
      dispatch(showplayer(status));
    }
  }
}
export default connect(mapStateToprops, mapDispatchToProps)(Player)