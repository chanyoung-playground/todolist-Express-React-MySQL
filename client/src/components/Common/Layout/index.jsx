import React from "react";
import { Outlet } from "react-router-dom";
import * as S from "./style";

function Layout() {
  return (
    <S.Wrapper>
      <Outlet />
    </S.Wrapper>
  );
}

export default Layout;
