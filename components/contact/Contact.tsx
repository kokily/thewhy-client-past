import React from 'react';
import PageHeader from '../common/PageHeader';

interface ContactProps {
  name: string;
  email: string;
  subject: string;
  body: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.MouseEvent) => void;
}

function Contact({ name, email, subject, body, onChange, onSubmit }: ContactProps) {
  const ContactUs = () => (
    <div
      className="appear-animation animated fadedIn appear-animation-visible"
      data-appear-animation="fadeIn"
      data-appear-animation-delay="800"
      style={{ animationDelay: '800ms' }}
    >
      <h4 className="mt-2 mb-1">
        Contact<strong> Us</strong>
      </h4>
      <ul className="list list-icons list-icons-style-2 mt-2">
        <li>
          <i className="fas fa-map-marker-alt top-6" />
          <strong className="text-dark">주소 : </strong>
          서울시 강남구 영동대로 602, 6층 F231
        </li>
        <li>
          <i className="fas fa-phone top-6" />
          <strong className="text-dark">전화 : </strong>
          050-5055-7221
        </li>
        <li>
          <i className="fas fa-envelope top-6" />
          <strong className="text-dark">이메일 : </strong>
          thewhycompany@naver.com
        </li>
      </ul>
    </div>
  );

  const WorkingHour = () => (
    <div
      className="appear-animation animated fadedIn appear-animation-visible"
      data-appear-animation="fadeIn"
      data-appear-animation-delay="950"
      style={{ animationDelay: '950ms' }}
    >
      <h4 className="pt-5">
        Business <strong>Hours</strong>
      </h4>
      <ul className="list list-icons list-dark mt-2">
        <li>
          <i className="far fa-clock top-6" />
          월요일 - 금요일, 09:00~17:00
        </li>
        <li>
          <i className="far fa-clock top-6" />
          토요일, 09:00~12:00
        </li>
        <li>
          <i className="far fa-clock top-6" />
          일요일, 휴일
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <PageHeader title={'Contact 페이지'} />

      <div className="container">
        <div className="row py-4">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-8 mt-2 mb-0">메일 보내기</h2>
            <p className="mb-4">Email로 문의를 보내주세요~!</p>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <label className="mb-1 text-2">이름</label>
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group col-lg-6">
                  <label className="mb-1 text-2">Email</label>
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
              <div className="form-row">
                <div className="form-group col">
                  <label className="mb-1 text-2">문의 제목</label>
                  <input
                    className="form-control text-3 h-auto py-2"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label className="mb-1 text-2">문의 내용</label>
                  <textarea
                    className="form-control text-3 h-auto py-2"
                    name="body"
                    value={body}
                    onChange={onChange}
                    rows={8}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <button
                    onClick={onSubmit}
                    className="btn btn-outline btn-rounded btn-primary btn-with-arrow mb-2"
                  >
                    전송하기
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-6">
            <ContactUs />
            <WorkingHour />

            <h4 className="pt-5">Get in Touch</h4>
            <p className="lead mb-0 text-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at velit
              imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
