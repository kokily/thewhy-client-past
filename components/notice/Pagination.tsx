import React from 'react';

interface PaginationProps {
  page: number;
  title: string;
  lastPage: number;
}

function Pagination({ page, title, lastPage }: PaginationProps) {
  return (
    <ul className="pagination float-center">
      <li className={`page-item ${(page === 1 || !page) && 'disabled'}`}>
        <a
          className="page-link"
          href={`/notice?page=${page === 1 ? undefined : page - 1}&title=${
            title !== '' ? '' : title
          }`}
        >
          이전 페이지
        </a>
      </li>
      <li className="page-item active ml-2">
        <a className="page-link">{page} 페이지</a>
      </li>
      <li className={`page-item ml-2 ${page === lastPage && 'disabled'}`}>
        <a
          className="page-link"
          href={`/notice?page=${page === lastPage ? undefined : page + 1}&title=${
            title !== '' ? '' : title
          }`}
        >
          다음 페이지
        </a>
      </li>
    </ul>
  );
}

export default Pagination;
