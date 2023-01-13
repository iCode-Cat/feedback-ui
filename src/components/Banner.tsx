import React from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  height: 72px;
  background: green;
  .banner {
    &_hamburger {
      grid-row: 1/3;
      grid-column: 2/3;
    }
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <p className="banner_title">Ask For Future</p>
      <p className="banner_label">Feedback Board</p>
      <img src="" alt="hamburger" className="banner_hamburger" />
    </BannerWrapper>
  );
};

export default Banner;
