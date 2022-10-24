import React from "react";
import { PageFooter } from "components/PageFooter";
import { PageHeader } from "components/PageHeader";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <React.Fragment>
      <PageHeader />
      {children}
      <PageFooter />
    </React.Fragment>
  );
};
