import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}
`;

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 1rem;
  
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #023e8a;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
}
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #023e8a;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #13ADC7;
}
> svg, span {
  display: inline-block;
  vertical-align: middle;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`;

export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
border: 1px solid #025fd4;
border-radius: 10px;
padding: .5rem;
background: #023e8a;
`;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  width: 100%;
  height: 100px;
  padding: 30px;
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.lg} {
    height: 100px;
    padding: 28px;
    width: 90%;
  }

  @media ${props => props.theme.breakpoints.md} {
    height: 80px;
    padding: 20px;
    
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 60px;
    padding: 16px;
    margin-top: 2rem;
  
  }
`

export const BoxText = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;
  transition: .3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 10px;
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
  }
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
`
