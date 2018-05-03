import React, {Component} from 'react';
import ReactModal from 'react-modal';
import {API_MOVIE_IMAGE_URL} from '../../utils';

export default class MovieInfoModal extends Component {
  render () {
    const {expandedMovie, showModal, handleCloseModal} = this.props;

    return (
      <div id="movieInfoModal" className="modal">
        <ReactModal
          isOpen={showModal}
          appElement={document.getElementById ('root')}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
          style={{
            overlay: {
              position: 'fixed',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              paddingTop: '100px',
              overflow: 'auto',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
            content: {
              position: 'relative',
              backgroundColor: '#fefefe',
              margin: 'auto',
              padding: '0',
              border: '1px solid #888',
              width: '80%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              animationName: 'animatetop',
              animationDuration: '0.4s',
              WebkitOverflowScrolling: 'touch',
            },
          }}
        >
          <div className="modal-header">
            <h4 className="text-center">{expandedMovie.title}</h4>
            <span className="close" onClick={handleCloseModal}>&times;</span>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row mb-2 mt-2">
                <img
                  className="col-5"
                  style={{width: '100%', maxHeight: '281px'}}
                  src={`${API_MOVIE_IMAGE_URL}w500${expandedMovie.backdrop_path || expandedMovie.poster_path}`}
                  alt=""
                />
                <div className="col-7">
                  <p>{expandedMovie.overview}</p>
                  <p>
                    <b>Original language:</b> {expandedMovie.original_language}
                  </p>
                  <p><b>Rating:</b> {expandedMovie.vote_average}</p>
                  <p>
                    <b>Release date:</b> {expandedMovie.release_date}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer" />
        </ReactModal>
      </div>
    );
  }
}
