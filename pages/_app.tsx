import '../styles/globals.css';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../store';

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state);
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
