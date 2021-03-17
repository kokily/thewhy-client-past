import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import PageHeader from '../components/common/PageHeader';

function FaqPage() {
  return (
    <PageTemplate>
      <PageHeader title={'FAQ 페이지'} link={'/'} linkTitle={'홈으로'} />

      <div className="container py-4 mb-4">
        <div className="row">
          <div className="col">
            <h2 className="font-weight-normal text-7 mb-2">
              Frequently Asked <strong className="font-weight-extra-bold">Questions</strong>
            </h2>
            <p className="lead">자주 하는 질문들을 확인하세요</p>

            <hr className="solid my-2" />

            <div className="toggle toggle-primary m-0" data-plugin-toggle>
              <section className="toggle">
                <a className="toggle-title">
                  Curabitur eget leo at velit imperdiet vague iaculis vitaes?
                </a>
                <div className="toggle-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at
                    velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus.
                    Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet
                    posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec
                    massa.
                  </p>
                </div>
              </section>
              <section className="toggle">
                <a className="toggle-title">
                  Curabitur eget leo at velit imperdiet vague iaculis vitaes?
                </a>
                <div className="toggle-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at
                    velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus.
                    Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet
                    posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec
                    massa.
                  </p>
                </div>
              </section>
              <section className="toggle">
                <a className="toggle-title">
                  Curabitur eget leo at velit imperdiet vague iaculis vitaes?
                </a>
                <div className="toggle-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo at
                    velit imperdiet varius. In eu ipsum vitae velit congue iaculis vitae at risus.
                    Nullam tortor nunc, bibendum vitae semper a, volutpat eget massa. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Integer fringilla, orci sit amet
                    posuere auctor, orci eros pellentesque odio, nec pellentesque erat ligula nec
                    massa.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default FaqPage;
