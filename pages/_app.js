import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import { saveState, loadState } from '../store';

class MyApp extends App {

  render () {
    const { Component, pageProps, reduxStore } = this.props

    reduxStore.subscribe( () => {
      saveState(reduxStore.getState())
    });

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
