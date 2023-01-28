import React from 'react';
import styled from 'styled-components';
import emptyMan from '../assets/empty-man.svg';
import AddFeedBackCTA from './AddFeedBackCTA';
import Button from './Button';

const Div = styled.div`
  /* ... */
  display: grid;
  place-items: center;
  align-content: center;
  background: var(--white);
  width: 100%;
  color: #3a4374;
  padding: 0 2.5rem;
  margin-bottom: 4.7rem;
  .empty {
    &_title {
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: -0.25px;
      text-align: center;
      margin-top: 3.9rem;
    }
    &_context {
      font-size: 13px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: center;
      margin: 1.4rem 0 2.4rem 0;
    }
  }
`;

const SuggestionsEmpty = () => {
  return (
    <Div className="b-radius">
      <img src={emptyMan} alt="empty-man" />
      <p className="empty_title">There is no feedback yet.</p>
      <p className="empty_context">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <AddFeedBackCTA />
    </Div>
  );
};

export default SuggestionsEmpty;
