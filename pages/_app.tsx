import type { AppProps } from 'next/app';

import '../globals.sass';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
