import styled, {css} from 'styled-components';
import {palette, typeScale} from '../utils';
import Link from 'next/link';

//Divs & Containers
export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: ${props => (props.fluid ? '100% !important' : 'auto')};
  max-width: ${props => (props.fluid ? '100% !important' : 'auto')};

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1120px;
  }
  @media (min-width: 1408px) {
    max-width: 1300px;
  }
  @media (min-width: 1700px) {
    max-width: 1600px;
  }
  @media (max-width: 600px) {
    padding: 0 5vw;
  }
`;

export const Flex = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  position: relative;
  align-items: center;
  justify-content: center;

  ${({fullHeight}) =>
          fullHeight &&
          css`
            height: 100%;
          `}

  ${props =>
          props.vertical &&
          css`
            flex-direction: column;
          `};
  ${props =>
          props.alignFlexStart &&
          css`
            align-items: flex-start;
          `};
  ${props =>
          props.justifyFlexStart &&
          css`
            justify-content: flex-start;
          `};
  ${props =>
          props.wrapContainer &&
          css`
            flex-wrap: wrap;
          `};
  ${props =>
          props.spaceBetween &&
          css`
            justify-content: space-between;
          `};
  @media only screen and (max-width: 600px) {
    ${props =>
            props.verticalReversePhone &&
            css`
              flex-direction: column-reverse;
            `};
  }
`;

export const Section = styled.section`
  padding: 100px 0 0;
  @media only screen and (min-width: 600px) {
    padding: 100px 0 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: ${props => props.phoneGap || '0'};
  grid-template-rows: auto;
  grid-template-columns: ${props =>
          typeof props.phoneNum === 'object'
                  ? `${props.phoneNum.toString()}`
                  : `repeat(${props.phoneNum}, 1fr)`};
  align-items: ${props => (props.alignFlexStart ? 'flex-start' : 'center')};
  justify-items: ${props => (props.justifyFlexStart ? 'flex-start' : 'center')};
  @media only screen and (min-width: 600px) {
    grid-gap: ${props => props.gap || '100px'};
    grid-template-columns: ${props =>
            typeof props.num === 'object'
                    ? `${props.num.toString()}`
                    : `repeat(${props.num}, 1fr)`};
    ${props =>
            props.auto &&
            css`
              grid-template-columns: auto;
            `};
    width: 100%;
  }
  ${({fullHeight}) =>
          fullHeight &&
          css`
            height: 100%;
          `}
  ${({oneColumnIPad}) =>
          oneColumnIPad &&
          css`
            @media only screen and (max-width: 992px) {
              grid-template-columns: 1fr;
            }
          `}
`;

//Texts
export const HeaderOne = styled.h1`
  font-size: ${typeScale.headerTwo};
  display: block;
  line-height: 120%;
  font-weight: normal;
  font-family: Rockwell, serif;
  letter-spacing: .05em;
  @media only screen and (min-width: 600px) {
    font-size: ${typeScale.headerOne};
  }
`;

export const HeaderTwo = styled.h2`
  font-size: ${typeScale.headerThree};
  display: block;
  line-height: 120%;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    font-size: ${typeScale.headerTwo};
  }
`;

export const HeaderThree = styled.h3`
  font-size: ${typeScale.headerFour};
  text-align: left;
  display: block;
  line-height: 140%;
  font-weight: bold;
  @media only screen and (min-width: 600px) {
    font-size: ${typeScale.headerThree};
  }
`;

export const HeaderFour = styled.h4`
  font-size: ${typeScale.headerFive};
  text-align: left;
  display: block;
  line-height: 140%;
  font-weight: 600;
  @media only screen and (min-width: 600px) {
    font-size: ${typeScale.headerFour};
  }
`;

export const HeaderFive = styled.h5`
  font-size: ${typeScale.paragraph};
  text-align: left;
  display: block;
  line-height: 150%;
  font-weight: 600;
  @media only screen and (min-width: 600px) {
    font-size: ${typeScale.headerFive};
  }
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
  display: block;
  line-height: 180%;
  ${props =>
          props.alignRight &&
          css`
            text-align: right;
          `}
`;

export const Small = styled.small`
  font-size: ${typeScale.small};
  display: block;
  line-height: 150%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette.lightGrey};
  margin: 20px 0;
  ${({light}) =>
          light &&
          css`
            background-color: ${palette.lightestGrey};
            height: 2px;
          `}
`;

export const ShadowCardHorizontalLine = styled(HorizontalLine)`
  margin-left: -30px;
  width: calc(100% + 60px);
`;

export const UnderlineLink = styled(Link)`
  text-decoration: underline;
  font-size: 1rem;
  color: black;

  &:hover {
    color: ${palette.grey};
  }
`;

export const HiddenLink = styled.p`
  color: ${palette.grey};
  text-decoration: underline;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const Sub = styled.span`
  color: ${palette.darkGrey};
`;

export const Close = styled.div`
  position: absolute;
  font-size: 1.4rem;
  top: calc(27px - 0.7rem);
  right: 30px;
  cursor: pointer;
`;

export const BannerWrapper = styled.div`
  height: 100vh;
  background-color: black;
  width: 100%;
  background-image: ${({image}) => `url(${image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${({overlayed}) => overlayed && css`
    &::before {
      content: '';
      height: 100%;
      width: 100%;
      z-index: 1;
      left: 0;
      top: 0;
      background-color: black;
      opacity: ${({opacity}) => opacity};
      position: absolute;
    }
  `}
  & > div {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;
  }
`;

export const DirtyHash = styled.div`
  margin-top: ${({size}) => `-${size}`};
  padding-bottom: ${({size}) => size};
  display: block;
`;

//next js
export const ImageFillContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    object-fit: cover;
  }
  
  @media only screen and (max-width: 600px) {
    ${({phoneHeight}) => phoneHeight && css`
      height: ${phoneHeight};
    ` }
  }
`;

