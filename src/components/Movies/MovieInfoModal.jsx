import React, {Component} from 'react';
import ReactModal from 'react-modal';

export default class MovieInfoModal extends Component {
  render () {
    const {showModal, handleCloseModal} = this.props;

    return (
      <div id="movieInfoModal" className="modal">
        <ReactModal
          isOpen={showModal}
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
              backgroundColor: 'rgb(0, 0, 0)',
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
          <span className="close" onClick={handleCloseModal}>&times;</span>

          <p>Modal text!</p>
        </ReactModal>
      </div>
    );
  }
}
