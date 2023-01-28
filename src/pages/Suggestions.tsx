import React from 'react';
import styled from 'styled-components';
import SuggestionsEmpty from '../components/SuggestionsEmpty';
import SuggestionsExists from '../components/SuggestionsExists';

const Div = styled.div`
  display: grid;
  background: var(--bg);
  min-height: 90vh;
  padding: 3.2rem 2.4rem 0rem 2.4rem;
`;

const Suggestions = () => {
  return (
    <Div>
      {/* <SuggestionsEmpty /> */}
      <SuggestionsExists />
    </Div>
  );
};

export default Suggestions;
