import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="body">
      <Header />

      <div role="main" className="main">
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default PageTemplate;
