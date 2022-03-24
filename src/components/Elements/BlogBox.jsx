import React from "react";
import styled from "styled-components";

export default function BlogBox({ tag, title, text, action, author }) {
  return (
                
    <WrapperBtn className="animate pointer" onClick={action ? () => action() : null}>
      <Wrapper className="whiteBg  shadow">
      <Img className="radius8" src= "https://res.cloudinary.com/codeinstd/image/upload/v1647916574/Request_cash_plwpjo.png" alt="request cash" style={{zIndex: 9}} /> <br/>
       <h3 className="font20 extraBold">{title}</h3>
        <p className="font18 regular" style={{ padding: "30px 0" }}>
          {text}
        </p>
        <p className="font13 extraBold">{author}</p>
        <div className="flex">
          {/* <p className="tag coralBg radius6 font25 extraBold">{tag}</p> */}
        </div>
      </Wrapper>
    </WrapperBtn>
  );
  
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
  border: 8px;
  background-color: #E9EAF6;
`;
const WrapperBtn = styled.button`
  border: 8px;
  outline: none;
  background-color: transparent;
  :hover {
    opacity: 0.5;
  }
`;
const Img = styled.img`
  @media (max-width: 100px) {
    width: 50%;
    height: auto;
  }
  `;
