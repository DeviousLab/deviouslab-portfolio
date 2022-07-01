import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  background: white;
  margin: auto;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 20px rgba(238,238,238,0.3);
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeContainer = styled.div`
  width:100%;
  height:100%;
  border-radius: 5px;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
`;

export const ResumeBottom = styled.div`
  transition: background 0.5s;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #023e8a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  >svg {
        transition: transform 0.5s;
      }
      &:hover{
        background: #13ADC7;
      }
    }
    &:hover >svg {
      transform: translateY(2px);
    }
  >span {
    transition: transform 0.5s;
  }
    &:hover >span {
      transform: translateY(2px);
    }
`;
