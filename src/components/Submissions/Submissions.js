import React, { useState } from 'react';
import { capitalize } from '../../utils';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Submissions = ({
  submissions,
  onClearButtonClick,
  onSendToServerButtonClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  if (!submissions.length)
    return (
      <section className="error">
        <img src={logo} alt="logo" className="error__img" />
        <p className="error__message">
          There are not submissions yet, you can{' '}
          <span>
            <Link to="/">go back to main page</Link>
          </span>
          !
        </p>
      </section>
    );

  const handleSendToServerButtonClick = async () => {
    setIsLoading(true);
    await onSendToServerButtonClick();
    setIsLoading(false);
  };

  return (
    <section className="submissions">
      <div className="submissions__hero">
        <img src={logo} alt="logo" />
      </div>
      {isLoading ? (
        <p>Is loading</p>
      ) : (
        <>
          <button onClick={() => onClearButtonClick()}>Clear</button>
          <button onClick={handleSendToServerButtonClick}>
            Send to server
          </button>
          <div className="submissions__container">
            <h1 className="submissions__title">Submission list</h1>
            <ul className="submissions__list">
              {submissions.map((submission, index) => (
                <li className="submissions__listElement" key={index}>
                  <h2 className="submissions__listElementTitle">
                    Submission <span>{index + 1}</span>
                  </h2>
                  {Object.keys(submission).map((inputKey) => (
                    <p key={inputKey}>
                      {capitalize(inputKey)}: {submission[inputKey]}
                    </p>
                  ))}
                </li>
              ))}
            </ul>
            <Link to="/">
              <button className="submissions__btn">Back to main page</button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

Submissions.propTypes = {
  submissions: PropTypes.array,
};

export default Submissions;
