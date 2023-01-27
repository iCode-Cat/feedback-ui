import React from 'react';
import styled from 'styled-components';
import cross from '../assets/cross.svg';
import hamburger from '../assets/hamburger.svg';
import bgMobile from '../assets/bg-h-m.png';

const BannerWrapper: any = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 72px;
  background: ${({ bgMobile }: any) => `url(${bgMobile})`};
  color: var(--white);
  font-family: Jost;
  padding: 1.6rem 2.4rem;

  .banner {
    &_hamburger {
      grid-row: 1/3;
      grid-column: 2/3;
    }
    &_title {
      font-size: 15px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: -0.1875px;
      text-align: left;
    }
    &_label {
      font-size: 13px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0px;
      text-align: left;
      opacity: 0.75;
    }
  }
`;

const Banner = () => {
  return (
    <BannerWrapper bgMobile={bgMobile}>
      <p className="banner_title">Frontend Mentor</p>
      <p className="banner_label">Feedback Board</p>
      <img src={hamburger} alt="hamburger" className="banner_hamburger" />
    </BannerWrapper>
  );
};

export default Banner;
