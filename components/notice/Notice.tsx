import React from 'react';
import { NoticeType } from '../../libs/types';
import PageHeader from '../common/PageHeader';

interface NoticeProps {
  notice: NoticeType[];
  lastPage: number;
}

function Notice({ notice }: NoticeProps) {
  return (
    <>
      <PageHeader title={'공지사항'} />

      <div className="container py-2 mb-5">
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          {/* Search */}
          <table className="table table-hover mt-2" style={{ cursor: 'pointer' }}>
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>No.</th>
                <th>제목</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody>
              {notice && notice.length > 0 ? (
                notice.map((data) => (
                  <tr key={data.id}>
                    <td style={{ textAlign: 'center' }}>{data.num}</td>
                    <td>{data.title}</td>
                    <td>{data.created_at}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td style={{ textAlign: 'center' }} colSpan={3}>
                    작성된 공지사항이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Notice;
