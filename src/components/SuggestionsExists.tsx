import React from 'react';
import styled from 'styled-components';
import FeedbackBox from './FeedbackBox';

const Div = styled.div`
  display: grid;
  align-content: flex-start;
  gap: 1.6rem;
  margin-bottom: 5.5rem;
`;

const SuggestionsExists = () => {
  return (
    <Div>
      <FeedbackBox />
      <FeedbackBox />
    </Div>
  );
};

export default SuggestionsExists;
