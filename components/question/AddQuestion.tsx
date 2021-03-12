import React from 'react';
import PageHeader from '../common/PageHeader';

interface AddQuestionProps {
  name: string;
  password: string;
  phone: string;
  email: string;
  title: string;
  body: string;
  agree: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeBody: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeAgree: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

function AddQuestion({
  name,
  password,
  phone,
  email,
  title,
  body,
  agree,
  onChange,
  onChangeBody,
  onChangeAgree,
  onSubmit,
}: AddQuestionProps) {
  return (
    <>
      <PageHeader title={'교육문의'} />

      <div className="container py-2">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <form className="contact-form form-with-icons">
                      {/* name */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">
                            이름 <strong style={{ color: 'red' }}>*</strong>
                          </label>
                          <div className="position-relative">
                            <i
                              className={`icons icon-user text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50`}
                            />
                            <input
                              className="form-control text-3 h-auto py-2"
                              type="text"
                              name="name"
                              value={name}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* password */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">
                            비밀번호 <strong style={{ color: 'red' }}>*</strong>
                          </label>
                          <div className="position-relative">
                            <i
                              className={`icons icon-key text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50`}
                            />
                            <input
                              className="form-control text-3 h-auto py-2"
                              type="password"
                              name="password"
                              value={password}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* phone */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">연락처</label>
                          <div className="position-relative">
                            <i
                              className={`icons icon-phone text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50`}
                            />
                            <input
                              className="form-control text-3 h-auto py-2"
                              type="text"
                              name="phone"
                              value={phone}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* phone */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">이메일</label>
                          <div className="position-relative">
                            <i
                              className={`icons icon-envelope-letter text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50`}
                            />
                            <input
                              className="form-control text-3 h-auto py-2"
                              type="email"
                              name="email"
                              value={email}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* title */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">
                            제목 <strong style={{ color: 'red' }}>*</strong>
                          </label>
                          <div className="position-relative">
                            <i
                              className={`icons icon-doc text-color-primary text-3 position-absolute left-15 top-50pct transform3dy-n50`}
                            />
                            <input
                              className="form-control text-3 h-auto py-2"
                              type="text"
                              name="title"
                              value={title}
                              onChange={onChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* body */}
                      <div className="form-row">
                        <div className="form-group col">
                          <label className="mb-1 text-2">
                            본문 <strong style={{ color: 'red' }}>*</strong>
                          </label>
                          <textarea
                            maxLength={5000}
                            rows={8}
                            className="form-control text-3 h-auto py-2 pl-2"
                            name="body"
                            value={body}
                            onChange={onChangeBody}
                          />
                        </div>
                      </div>
                      {/* End */}
                      {/* Agree */}
                      <div className="form-row justify-content-center">
                        <div className="form-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="agree"
                              checked={agree}
                              onChange={onChangeAgree}
                            />
                            <label className="form-check-label">아래 정보에 동의합니다.</label>
                          </div>
                        </div>
                      </div>
                      {/* End */}
                      {/* Info */}
                      <div className="form-row">
                        <div className="form-group col">
                          <pre style={{ whiteSpace: 'pre-line' }}>
                            더와이컴퍼니는 교육 문의, 서비스 신청 등을 위해 아래와 같이 개인 정보를
                            수집, 활용하고 있습니다.
                            <br />
                            <br />
                            1. 수집 항목 및 활용 목적
                            <br />
                            - 수집항목: 이름, 연락처(선택), 이메일(선택), 교육 주제 및 내용, 교육
                            장소
                            <br />
                            - 활용목적: 서비스 제공, 계약 이행, 요금 결제, 고객 관리
                            <br />
                            <br />
                            2. 보유 및 활용 기간
                            <br />- 더와이컴퍼니는 개인정보 수집 및 활용 목적이 달성된 후에는 즉시
                            해당 정보를 파기합니다.
                          </pre>
                        </div>
                      </div>
                      {/* End */}
                      {/* Submit */}
                      <div className="form-row justify-content-end">
                        <div className="form-group">
                          <button
                            onClick={onSubmit}
                            className="btn btn-outline btn-rounded btn-tertiary btn-with-arrow mb-2"
                          >
                            저장하기
                            <span>
                              <i className="fas fa-chevron-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                      {/* End */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddQuestion;
