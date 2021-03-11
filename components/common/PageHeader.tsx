import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  link?: string;
  title: string;
}

function PageHeader({ link, title }: PageHeaderProps) {
  return (
    <section className="page-header page-header-modern bg-color-light-scale-1 page-header-lg">
      <div className="container">
        <div className="row">
          {link && (
            <div className="col-md-12 align-self-center p-static order-2 text-center mb-1 text-4">
              <ul className="breadcrumb d-block text-center">
                <li>
                  <Link href={'/notice'}>
                    <a>공지사항</a>
                  </Link>
                </li>
                <li>
                  <a>{title}</a>
                </li>
              </ul>
            </div>
          )}

          <div className="col-md-12 align-self-center p-static order-2 text-center">
            <h1 className="text-dark font-weight-bold">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
