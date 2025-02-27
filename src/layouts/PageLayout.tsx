import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <div className="w-(calc-ml-64) ml-64 mt-14 min-h-[calc(100dvh-56px)] bg-[#f4f5f8] p-8">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
