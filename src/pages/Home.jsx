import React from 'react'
import Main from '../comps/Main'
import Row from '../comps/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
        <Main />
        <Row title='Up Coming' fetchURL={requests.requestUpcoming} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home