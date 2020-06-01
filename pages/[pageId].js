import { useEffect } from 'react'
import mediumZoom from 'medium-zoom'

import { getImgUrl } from '../utils'
import { MansonryWrapper, Header } from '../components'

export default function Page ({ photos }) {
  useEffect(() => {
    mediumZoom(document.querySelectorAll('img'))
  })

  return (
    <>
      <Header>Tobias Möritz</Header>
      <MansonryWrapper>
        {photos.map((photo) => (
          <figure key={photo.id}><img src={getImgUrl(photo, 'c')} data-zoom-src={getImgUrl(photo, 'b')} alt={photo.title} /></figure>
        ))}
      </MansonryWrapper>
    </>
  )
}

export async function getStaticPaths() {
  if (!process.env.USER_ID || !process.env.API_KEY) {
    throw new Error('missing environment variables!')
  }

  const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getInfo&format=json&api_key=${process.env.API_KEY}&user_id=${process.env.USER_ID}&nojsoncallback=1`) // eslint-disable-line
  const flickrRes = await res.json()
  const count = flickrRes.person.photos.count._content
  let paths = []

  for (let i = 2; i < count / 10; i++) {
    paths.push({ params: { pageId: i.toString() } })
  }

  console.log(paths)

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps ({ params }) {
  if (!process.env.USER_ID || !process.env.API_KEY) {
    throw new Error('missing environment variables!')
  }
  
  const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&format=json&api_key=${process.env.API_KEY}&user_id=${process.env.USER_ID}&nojsoncallback=1&per_page=10&page=${params.pageId}`) // eslint-disable-line
  const flickrRes = await res.json()
  const photos = flickrRes.photos.photo

  return {
    props: {
      photos
    }
  }
}