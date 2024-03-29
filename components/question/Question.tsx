import React from 'react';
import { MeType, QuestionType } from '../../libs/types';
import PageHeader from '../common/PageHeader';
import Search from '../common/Search';
import Pagination from '../notice/Pagination';

interface QuestionProps {
  questions: QuestionType[];
  lastPage: number;
  page: number;
  onRead: (id: string) => void;
  onAdd: () => void;
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Question({
  questions,
  lastPage,
  page,
  onRead,
  onAdd,
  search,
  onChange,
  onSearch,
  onKeyPress,
}: QuestionProps) {
  return (
    <>
      <PageHeader title={'교육문의'} />

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
                <th>등록날짜</th>
                <th>제목</th>
                <th>질문자</th>
                <th>답변</th>
              </tr>
            </thead>
            <tbody>
              {questions && questions.length > 0 ? (
                <>
                  {questions.map((data) => (
                    <tr key={data.id} onClick={() => onRead(data.id)}>
                      <td style={{ textAlign: 'center' }}>
                        {new Date(data.created_at).toLocaleDateString()}
                      </td>
                      <td>
                        {data.isReply ? (
                          <strong style={{ color: '#202020' }}>{data.title}</strong>
                        ) : (
                          <span style={{ color: '#d67272' }}>{data.title}</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'center' }}>{data.name}님</td>
                      <td style={{ textAlign: 'center' }}>
                        {data.isReply ? (
                          <strong style={{ color: '#202020' }}>완료</strong>
                        ) : (
                          <span style={{ color: '#d67272' }}>미진행</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <tr>
                  <td style={{ textAlign: 'center' }} colSpan={4}>
                    작성된 문의 글이 없습니다.
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
          <button
            onClick={onAdd}
            className="btn btn-outline btn-rounded btn-primary btn-with-arrow mb-2"
          >
            작 성
            <span>
              <i className="fas fa-chevron-left" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Question;
