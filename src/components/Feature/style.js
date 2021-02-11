import styled from "styled-components"

export const FeatureCard = styled.div `
width:250px;
height:250px;
margin:0 auto;

position:relative;
&::after {
     font-family:'游明朝','Yu Mincho','Hiragino Mincho Pro',sans-serif;
    /* content: "カービィ"; */
    /* ''で囲む必要がある */
    content:'${props => props.content}';
    font-size:1.6rem;
   top:-20px;
    right: -15px;
    z-index:999;
   font-weight:bold;
    color:black;
   -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
    padding:auto;
    /* background:black; */
    text-shadow:1px 1px 5px white;
    background: -moz-linear-gradient(to bottom,#F89174,#FFF 30%,#99CC33);
background: -webkit-linear-gradient(to bottom,#F89174,#FFF 30%,#99CC33);
background: linear-gradient(to bottom,#F89174,#FFF 50%,#99CC33);

    align-items:center;
    padding:10px 0;
    position:absolute;

    z-index:999;
      @media(max-width:768px){
    font-size:1.3rem;

  }
  }
  @media(max-width:1024px){
    width:220px;

  }

`