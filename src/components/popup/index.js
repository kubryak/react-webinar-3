import React from "react";
import Head from "../head";
import PropTypes from 'prop-types';
import './style.css';

function Popup({ isOpened, setIsOpened, title, children }) {

  const handleClosePopup = () => {
    setIsOpened(false);
  }

  return (
    <div className={`Popup ${isOpened ? 'Popup_active' : ''} `}>
      <div className="Popup-content">
        <Head title={title}>
          <button className="Popup-content-button" onClick={() => handleClosePopup()}>Закрыть</button>
        </Head>
        {children}
      </div>
    </div>
  )
}

Popup.propTypes = {
  isOpened: PropTypes.bool,
  setIsOpened: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
};

Popup.defaultProps = {
  setIsOpened: () => {
  },
}

export default React.memo(Popup);
