import React from 'react';

interface PageHeaderProps {
  title: string;
}

function PageHeader({ title }: PageHeaderProps) {
  return (
    <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-self-center p-static order-2 text-center">
            <h1 className="text-dark font-weight-bold">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
