import mediumZoom from 'medium-zoom'

import { getImgUrl } from '../utils'
import { MansonryWrapper, Header } from '../components'
import { useEffect } from 'react'

export default function Index ({ photos }) {
  useEffect(() => {
    mediumZoom(document.querySelectorAll('img'))
  })

  return (
    <>
      <Header>Tobias Möritz</Header>
      <MansonryWrapper>
        {photos.map((photo) => (
          <figure key={photo.id}><img src={getImgUrl(photo, 'c')} data-zoom-src={getImgUrl(photo, 'b')} /></figure>
        ))}
      </MansonryWrapper>
    </>
  )
}

export async function getStaticProps () {
  if (!process.env.USER_ID || !process.env.API_KEY) {
    throw new Error('missing environment variables!')
  }
  const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&api_key=${process.env.API_KEY}&user_id=${process.env.USER_ID}&nojsoncallback=1`) // eslint-disable-line
  const flickrRes = await res.json()
  const photos = flickrRes.photos.photo

  return {
    props: {
      photos
    }
  }
}
