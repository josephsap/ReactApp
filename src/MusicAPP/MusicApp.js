import React from "react";
import "../../src/Global.css";
import test from "../MusicAPP/SongList";

class musicapp extends React.Component {
  state = {
    isPlaying: true,
    selectedValue: ""
  };

  handleSelectedValue = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  toggle = e => {
    let selectedAudio = this.state.selectedValue;
    this.state.isPlaying && selectedAudio
      ? this.playAudio(selectedAudio)
      : this.pauseAudio(selectedAudio);
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  };

  playAudio = url => {
    let audioPlay = new Audio(this.state.selectedValue);
    audioPlay.play();
  };

  pauseAudio = url => {
    let audioPause = new Audio(this.state.selectedValue);
    audioPause.pause();
  };

  OnTrackChangeAndSelected = () => {
    this.setState({ isPlaying: test }, function() {
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    });
  };

  render() {
    return (
      <div>
        <div>
          <audio id="myAudio" ref={ref => (this.player = ref)}>
            <source src={this.state.selectedValue} type="audio/mpeg"></source>
          </audio>

          <button onClick={this.toggle}>
            {this.state.isPlaying ? "play" : "pause"}
          </button>
        </div>
        {test &&
          test.map((item, key) => (
            <li>
              <button
                className="audioList"
                value={item.audio}
                onClick={this.handleSelectedValue}
                key={item.id}
              >
                {item.id}
              </button>
            </li>
          ))}
      </div>
    );
  }
}

export default musicapp;
