import React from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../../libs/graphql/auth';
import { MeType } from '../../libs/types';
import Footer from './Footer';
import Header from './Header';

interface PageTemplateProps {
  children: React.ReactNode;
}

function PageTemplate({ children }: PageTemplateProps) {
  const { data, loading } = useQuery<{ Me: { me: MeType | null } }>(ME);

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
