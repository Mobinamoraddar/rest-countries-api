import React from "react";
import styled from "styled-components";
function Footer() {
  return (
    <>
      <div>
        {/* <div>
          <a
            href="https://www.linkedin.com/in/mobina-moraddar/"
            target="_blank"
          >
            <i class="fa fa-linkedin fa-inverse"></i>
          </a>
          <a href="https://github.com/Mobinamoraddar" target="_blank">
            <i class="fa fa-github fa-inverse"></i>
          </a>
          <a href="https://twitter.com/Mobina_Moraddar" target="_blank">
            <i class="fa fa-twitter fa-inverse"></i>
          </a>
        </div>

        <hr /> */}

        <StyledFooter>
          © 2022 -{" "}
          <a href="https://github.com/Mobinamoraddar" target="_blank">
            Mobina Moraddar
          </a>
        </StyledFooter>
      </div>
    </>
  );
}
const StyledFooter = styled.div`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.elementsColor};
  -webkit-box-shadow: ${(props) => props.theme.boxShadowColor};
  -moz-box-shadow: ${(props) => props.theme.boxShadowColor};
  box-shadow: ${(props) => props.theme.boxShadowColor};
  padding: 20px 0;
  text-align: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  a:hover {
    opacity: 0.6;
  }
`;
export default Footer;
