import React from 'react';
import { MeType, NoticeType } from '../../libs/types';
import PageHeader from '../common/PageHeader';
import Search from '../common/Search';
import Pagination from './Pagination';

interface NoticeProps {
  notice: NoticeType[];
  lastPage: number;
  page: number;
  me: MeType | null;
  onRead: (id: string) => void;
  onWrite: () => void;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Notice({
  notice,
  lastPage,
  page,
  me,
  onRead,
  onWrite,
  search,
  onChange,
  onSearch,
  onKeyPress,
}: NoticeProps) {
  return (
    <>
      <PageHeader title={'공지사항'} />

      <div className="container py-2 mb-5">
        <div className="row" style={{ justifyContent: 'flex-end' }}>
          <Search
            mode={'제목'}
            search={search}
            onChange={onChange}
            onSearch={onSearch}
            onKeyPress={onKeyPress}
          />

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
                  <tr key={data.id} onClick={() => onRead(data.id)}>
                    <td style={{ textAlign: 'center' }}>{data.num}</td>
                    <td>{data.title}</td>
                    <td style={{ textAlign: 'center' }}>
                      {new Date(data.created_at).toLocaleDateString()}
                    </td>
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

        <div className="row justify-content-center">
          <Pagination title={search} page={page} lastPage={lastPage} />
        </div>

        <div className="row justify-content-end">
          {me && (
            <button
              onClick={onWrite}
              className="btn btn-outline btn-rounded btn-primary btn-with-arrow mb-2"
            >
              작 성
              <span>
                <i className="fas fa-chevron-left" />
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Notice;
