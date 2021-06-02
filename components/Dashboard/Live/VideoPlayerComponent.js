import React, { Component } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

class VideoPlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stream: false,
      videoJsOptions: null,
      NMS_ENDPOINT: process.env.NEXT_PUBLIC_NMS_ENDPOINT,
    };
  }

  componentDidMount() {
    this.setState(
      {
        stream: true,
        videoJsOptions: {
          autoplay: false,
          controls: true,
          fluid: true,
          sources: [
            {
              src: `${this.state.NMS_ENDPOINT}/live/${this.props.stream_key}/index.m3u8`,
              type: "application/x-mpegURL",
            },
          ],
        },
      },
      () => {
        this.player = videojs(this.videoNode, this.state.videoJsOptions);
      }
    );
  }

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
