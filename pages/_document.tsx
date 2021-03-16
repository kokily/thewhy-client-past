import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (err) {
      console.error(err);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="keywords" content="커뮤니케이션, 교육, 강의, 더와이컴퍼니, 더와이" />
          <meta name="description" content="Community, Education, edu, the why, the why company" />
          <meta name="author" content="thewhy.kr" />

          <link rel="shortcut icon" href="/img/favicon.ico" type="iamge/x-icon" />
          <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

          <link
            id="googleFonts"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7CShadows+Into+Light&display=swap"
            rel="stylesheet"
            type="text/css"
          />

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/all.min.css" />
          <link rel="stylesheet" href="/css/animate.compat.css" />
          <link rel="stylesheet" href="/css/simple-line-icons.min.css" />
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/css/magnific-popup.min.css" />

          <link rel="stylesheet" href="/css/theme.css" />
          <link rel="stylesheet" href="/css/theme-elements.css" />
          <link rel="stylesheet" href="/css/theme-blog.css" />
          <link rel="stylesheet" href="/css/theme-shop.css" />

          <link rel="stylesheet" href="/css/component.css" />
          <link id="skinCSS" rel="stylesheet" href="/css/default.css" />
          <link rel="stylesheet" href="/css/custom.css" />
          <script src="/js/modernizr.min.js"></script>
          <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cec30f2d8f996a53cca24b45925dea37&libraries=services"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery.min.js"></script>
          <script src="/js/jquery.appear.min.js"></script>
          <script src="/js/jquery.easing.min.js"></script>
          <script src="/js/jquery.cookie.min.js"></script>
          <script src="/js/popper.min.js"></script>
          <script src="/js/bootstrap.min.js"></script>
          <script src="/js/jquery.validate.min.js"></script>
          <script src="/js/jquery.easypiechart.min.js"></script>
          <script src="/js/jquery.gmap.min.js"></script>
          <script src="/js/lazysizes.min.js"></script>
          <script src="/js/jquery.isotope.min.js"></script>
          <script src="/js/owl.carousel.min.js"></script>
          <script src="/js/jquery.magnific-popup.min.js"></script>
          <script src="/js/jquery.vide.min.js"></script>
          <script src="/js/vivus.min.js"></script>
          <script src="/js/theme.js"></script>
          <script src="/js/jquery.flipshow.min.js"></script>
          <script src="/js/view.home.js"></script>
          <script src="/js/custom.js"></script>
          <script src="/js/theme.init.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
