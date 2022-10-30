import React from "react";
import { PageFooter } from "components/PageFooter";
import { PageHeader } from "components/PageHeader";
import { Container } from "./PageContainer.style";
import { Outlet } from "react-router-dom";

export const PageContainer: React.FC = () => {
  return (
    <Container>
      <PageHeader />
      <Outlet />
      <PageFooter />
    </Container>
  );
};
