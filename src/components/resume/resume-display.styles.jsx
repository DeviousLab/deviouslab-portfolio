import styled from 'styled-components';

export const ResumeWrapper = styled.div`
  margin: auto;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 0px 15px 20px rgba(238,238,238,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResumeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const ResumeBottom = styled.div`
  transition: background 0.5s;
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 50px;
  height: 50px;
  background: #023e8a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  >svg {
        transition: transform 0.5s;
      }
      &:hover{
        background: #13ADC7;
      }
    }
    &:hover >svg {
      transform: translateY(3px);
    }
`;
