import PageHeader from '../components/common/PageHeader';
import PageTemplate from '../components/common/PageTemplate';
import TermHeader from '../components/term/TermHeader';
import Term1 from '../components/term/Term1';
import Term2 from '../components/term/Term2';
import Term3 from '../components/term/Term3';
import Term4 from '../components/term/Term4';
import Term5 from '../components/term/Term5';
import Term6 from '../components/term/Term6';
import Term7 from '../components/term/Term7';
import Term8 from '../components/term/Term8';
import Term9 from '../components/term/Term9';
import Term10 from '../components/term/Term10';
import Term11 from '../components/term/Term11';
import Term12 from '../components/term/Term12';
import Term13 from '../components/term/Term13';
import Term14 from '../components/term/Term14';
import Term15 from '../components/term/Term15';
import Term16 from '../components/term/Term16';
import Term17 from '../components/term/Term17';
import Term18 from '../components/term/Term18';
import Term19 from '../components/term/Term19';
import Term20 from '../components/term/Term20';
import Term21 from '../components/term/Term21';
import Term22 from '../components/term/Term22';
import Etc from '../components/term/Etc';
import Noti from '../components/term/Noti';
import Law from '../components/term/Law';

function TermPage() {
  return (
    <PageTemplate>
      <PageHeader title="(주)더와이컨설팅 이용 약관" />

      <div className="container py-2 mb-4">
        <div className="row">
          <div className="col-lg-10 text-center">
            <p className="lead text-3 text-right">시행일자: 2021. 미정.</p>
          </div>

          <TermHeader />
        </div>

        <hr />

        <Term1 />
        <Term2 />
        <Term3 />
        <Term4 />
        <Term5 />
        <Term6 />
        <Term7 />
        <Term8 />
        <Term9 />
        <Term10 />
        <Term11 />
        <Term12 />
        <Term13 />
        <Term14 />
        <Term15 />
        <Term16 />
        <Term17 />
        <Term18 />
        <Term19 />
        <Term20 />
        <Term21 />
        <Term22 />
        <Etc />
        <Noti />
        <Law />
      </div>

      <div className="row">
        <div className="col-lg-10 text-center">
          <p className="lead text-3" style={{ textDecoration: 'underline', wordBreak: 'keep-all' }}>
            ㈜더와이컨설팅 서비스와 관련하여 궁금하신 사항이 있으시면 고객센터(대표번호:
            050-5055-7221/ 평일 09:00~18:00)로 문의 주시기 바랍니다.
          </p>
        </div>
      </div>
    </PageTemplate>
  );
}

export default TermPage;
