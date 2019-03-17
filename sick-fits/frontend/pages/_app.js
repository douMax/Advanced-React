import App, { container } from 'next/app'
import Page from '../componets/Page'

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <Page>
          <Component />        
        </Page>
      </Container>
    )
  }
}

export default MyApp