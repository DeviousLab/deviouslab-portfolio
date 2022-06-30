import styled from 'styled-components';


export const ResumeContainer = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;