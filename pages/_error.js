import { Header } from '../components'

export default function ErrorPage ({ statusCode }) {
  return (
    <>
      <Header>Tobias Möritz</Header>
      <Header>{statusCode
        ? `Error ${statusCode} occurred on server`
        : 'Error occurred on client'}
      </Header>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
