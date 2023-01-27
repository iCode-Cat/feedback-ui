import React from 'react';
import styled from 'styled-components';
import emptyMan from '../assets/empty-man.svg';

const Div = styled.div`
  /* ... */
  display: grid;
  place-items: center;
  background: var(--white);
  width: 100%;
  .emoty {
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
      <p>BUTTON HERE</p>
    </Div>
  );
};

export default SuggestionsEmpty;
