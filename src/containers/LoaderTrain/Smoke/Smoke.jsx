import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled, { keyframes } from 'styled-components';

const Smoke = (props) => {

const SmokeL = keyframes`
0%   { transform: scale(0.2) translate(0, 0) }
10%  { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(20px, -130px) }
}
`;

const SmokeR = keyframes`
0%   { transform: scale(0.2) translate(0, 0) }
10%  { opacity: 1; transform: scale(0.2) translate(0, -5px) }
100% { opacity: 0; transform: scale(1) translate(20px, -130px) }
}
`;

const left = '91px';
const leftSmall = '220px';
const bottomSmall= '75px';
const bottom = '100px';

const Smoke0 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeR};
  animation-duration: 10s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
`
const Smoke1 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke2 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke3 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke4 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 4s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke5 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 5s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke6 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 6s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke7 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 7s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  `
  const Smoke8 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 8s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
  @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `
  const Smoke9 = styled.div`
  display: block;
  position: absolute;
  height: 0px;
  width: 0px;
  bottom: ${bottom};
  left: ${left};
  margin-left:-20px;
  border-style: solid;
  border-width: 35px;
  border-radius: 35px;
  border-color: #4b4b4b;
  animation-name: ${SmokeL};
  animation-duration: 10s;
  animation-delay: 9s;
  animation-iteration-count: infinite;
  transform: scale(0.2);
    @media only screen and (max-width: 700px) {
    left: ${leftSmall};
    bottom: ${bottomSmall};
  }
  `

const useStyles = makeStyles({

  smokeContainer: {
    zIndex: '0',
    position: 'relative',
  },
  smokeRoot: {
    position: 'absolute',
    height:'300px'
  }
});

  const css = useStyles();
return(
  <Fragment>
    <div className= {css.smokeContainer}>
      <div className= {css.smokeRoot}>
        <Smoke0 />
        <Smoke1 />
        <Smoke2 />
        <Smoke3 />
        <Smoke4 />
        <Smoke5 />
        <Smoke6 />
        <Smoke7 />
        <Smoke8 />
        <Smoke9 />
      </div>
    </div>
  </Fragment>
  )
}

export default Smoke;