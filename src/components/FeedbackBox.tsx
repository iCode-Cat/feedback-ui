import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
  display: grid;
  align-self: flex-start;
  justify-items: flex-start;
  border-radius: 10px;
  background: var(--white);
  padding: 2.4rem;
  .box {
    &_title {
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: -0.1805555522441864px;
      text-align: left;
      color: #3a4374;
    }
    &_context {
      font-size: 13px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      color: #647196;
      margin-top: 0.9rem;
      margin-bottom: 0.8rem;
    }
  }
`;

const FeedbackBox = () => {
  return (
    <Div>
      <p className="box_title">Add tags for solutions</p>
      <p className="box_context">
        Easier to search for solutions based on a specific stack.
      </p>
      <Button padding="0.6rem 1.6rem" text="Enhancement" theme="labelBlue" />
    </Div>
  );
};

export default FeedbackBox;
