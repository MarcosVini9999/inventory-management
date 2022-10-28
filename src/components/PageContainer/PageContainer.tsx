import React from "react";
import { PageFooter } from "components/PageFooter";
import { PageHeader } from "components/PageHeader";
import { Container } from "./PageContainer.style";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <Container>
      <PageHeader />
      {children}
      <PageFooter />
    </Container>
  );
};
