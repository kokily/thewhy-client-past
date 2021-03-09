import React from 'react';
import PageHeader from '../common/PageHeader';

interface LoginProps {
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Login({ password, onChange, onSubmit, onKeyPress }: LoginProps) {
  return (
    <>
      <PageHeader title={'관리자 로그인'} />

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold text-5 mb-0">로그인</h2>

            <div className="form-row">
              <div className="form-group col">
                <label className="text-color-dark text-3">
                  비밀번호
                  <span className="text-color-danger">*</span>
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg text-4"
                  name="password"
                  value={password}
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col">
                <button
                  className="btn btn-dark btn-modern btn-block text-uppercase rounded-0 font-weight-bold text-3 py-3"
                  onClick={onSubmit}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
