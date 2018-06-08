import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags};
  }

  render() {
    return (
      <html>
      <Head>
        <title>Krebs Engenharia</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" href="/static/index.css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" />
        {this.props.styleTags}
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
      </html>
    )
  }
}
