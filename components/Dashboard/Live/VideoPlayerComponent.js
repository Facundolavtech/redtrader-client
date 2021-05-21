import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stream: false,
      videoJsOptions: null,
      NMS_ENDPOINT: "https://redtrader-api.com:8443",
    };
  }

  componentDidMount() {
    this.setState(
      {
        stream: true,
        videoJsOptions: {
          autoplay: false,
          controls: true,
          sources: [
            {
              src: `${this.state.NMS_ENDPOINT}/live/${this.props.stream_key}/index.m3u8`,
              type: "application/x-mpegURL",
            },
          ],
        },
      },
      () => {
        this.player = videojs(
          this.videoNode,
          this.state.videoJsOptions,
          function onPlayerReady() {
            console.log("Player ready", this);
          }
        );
      }
    );
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  render() {
    return (
      <div className="videojs__container">
        {this.state.stream ? (
          <div data-vjs-player>
            <video
              ref={(node) => (this.videoNode = node)}
              className="video-js vjs-big-play-centered vjs-default-skin"
            ></video>
          </div>
        ) : (
          "Cargando..."
        )}
      </div>
    );
  }
}
export default VideoPlayerComponent;
