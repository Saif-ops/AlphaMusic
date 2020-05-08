import React, { Component } from 'react';
import styled from 'styled-components';

const styledDiv = styled.div`
width:100;
height:100;
margin:100;
padding:16px;
text-align:center;
border:2px;

@media (min-width:500px){
  width:450px
}`;

const imageDiv = styled.image`
width : 150;
height:150;
padding:15px;
borderRadius:100;`;

class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null };

  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);

    if (!this.state.playing) {
      audio.play();
      this.setState({ playing: true, audio, playingPreviewUrl: previewUrl });
    } else {
      this.state.audio.pause();

      if (this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio, playingPreviewUrl: previewUrl });
      }
    }
  }

  trackIcon = track => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }

    if (
      this.state.playing &&
      this.state.playingPreviewUrl === track.preview_url
    ) {
      return <span>| |</span>;
    }

    return <span>&#9654;</span>;
  }
  

  render() {
    const { tracks } = this.props;


    return (
      <styledDiv>
        {
          tracks.map(track => {
            const { id, name, album, preview_url } = track;

            return (
              
              <div class='card bg-dark text-white' style={{display:'inline-block',margin:20}} 
                key={id}
                onClick={this.playAudio(preview_url)}
                className='track'
              >
                <img
                  
                  class="card-img-top"
                  src={album.images[0].url}
                  alt='track-image'
                  className='track-image'
                  
                  
                  

                  
                  
                />
                <div class="card-body">
                <p class="card-title" className='track-text'>{name}</p>
                <p class='card-text' className='track-icon'>{this.trackIcon(track)}</p>
              </div>
              </div>
              
            )
          })
        }
      </styledDiv>
    )
  }
}

export default Tracks;