//DATE : 10/13/20

import React from "react";
import styled from "@emotion/styled";
import { rem } from "polished";

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <div className={"container"}>
        <div className={"logo"}>
          <img src="/images/logo.svg" alt="Logo" />
          <span className={"logo-text"}>Next-Movies</span>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${(props) => (props.isDark ? "#000" : "#efe")};
  padding: ${rem(20)};

  .logo {
    display: flex;
    align-items: center;
    .logo-text {
      color: #333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: ${rem(20)};
    }
  }
`;

export default Header;
