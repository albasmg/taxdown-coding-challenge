import React from 'react';
import { capitalize } from '../../utils';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Submissions = ({ submissions }) => {
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

  return (
    <section className="submissions">
      <div className="submissions__hero">
        <img src={logo} alt="logo" />
      </div>
      <div className="submissions__container">
        <h1 className="submissions__title">Submission list</h1>
        <ul className="submissions__list">
          {submissions.map((submission, index) => (
            <li className="submissions__listElement">
              <h2 className="submissions__listElementTitle">
                Submission <span>{index + 1}</span>
              </h2>
              {Object.keys(submission).map((inputKey) => (
                <p>
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
    </section>
  );
};

export default Submissions;
