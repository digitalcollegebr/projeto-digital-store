import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { actionsColors, grayScaleColors } from '../../styles/colors/cores';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(var(--angle));
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(var(--angle));
  }
`;

const wiggle = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(var(--angle));
  }
  50% {
    transform: translateY(-3px) rotate(calc(var(--angle) + 15deg));
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 5rem;
  text-align: center;
  background-color: ${grayScaleColors.lightGray3};

  @media screen and (max-width: 769px) {
    padding: 2rem;
  }
`;

export const Curved404 = styled.h2`
  display: flex;
  justify-content: center;
  gap: .5rem;
  font-size: 10rem;
  font-weight: bold;
  color: ${actionsColors.warning};
  transform: perspective(100px) rotateX(10deg);
  user-select: none;

  @media screen and (max-width: 769px) {
    font-size: 6rem;
  }
`;

export const CurvedDigit = styled.span`
  display: inline-block;
  --angle: ${({ $angle }) => `${$angle}deg`};
  --delay: ${({ $delay }) => `${$delay}s`};
  transform: translateY(0) rotate(var(--angle));
  opacity: 0;
  animation:
    ${fadeInUp} 0.6s ease-out forwards,
    ${wiggle} .3s ease-in-out infinite;

  animation-delay: var(--delay), calc(var(--delay) + 1s);
`;

export const MotivationalText = styled.p`
  font-size: 1.5rem;
  color: ${grayScaleColors.darkGray3};
  margin: 1.5rem 0;

  @media screen and (max-width: 769px) {
    font-size: 1.115rem;
  }
`;

export const HomeButton = styled(Link)`
  padding: .875rem 1.5rem;
  background-color: ${actionsColors.warning};
  color: ${grayScaleColors.white};
  border-radius: .5rem;
  font-weight: bold;
  user-select: none;

  &:hover {
    color: ${grayScaleColors.white};
    background-color: ${actionsColors.primary};
  }
`;