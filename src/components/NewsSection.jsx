import React, { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import NewsList from './NewsList'

const NewsSection = ({ onInView }) => {
  const { ref, inView } = useInView()
  const [techNews, setTechNews] = useState([])
  const [footballNews, setFootballNews] = useState([])
  const [loadingTech, setLoadingTech] = useState(true)
  const [loadingFootball, setLoadingFootball] = useState(true)
  const [errorTech, setErrorTech] = useState('')
  const [errorFootball, setErrorFootball] = useState('')

  if (inView) {
    onInView?.()
  }

  useEffect(() => {
    const newsApiKey = import.meta.env.VITE_NEWSAPI_KEY
    const gnewsKey = import.meta.env.VITE_GNEWS_KEY

    const fetchTech = async () => {
      try {
        setLoadingTech(true)
        const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=6&apiKey=${newsApiKey}`
        const res = await fetch(url)
        const data = await res.json()
        if (data.status !== 'ok') {
          throw new Error(data.message || 'Failed to fetch tech news')
        }
        const articles =
          data.articles?.map(a => ({
            title: a.title,
            url: a.url,
            description: a.description,
            source: a.source?.name,
            publishedAt: a.publishedAt,
          })) ?? []
        setTechNews(articles)
      } catch (err) {
        setErrorTech(err.message || 'Could not load tech news.')
      } finally {
        setLoadingTech(false)
      }
    }

    const fetchFootball = async () => {
      try {
        setLoadingFootball(true)
        // football-focused query using GNews
        const url = `https://gnews.io/api/v4/search?q=football&lang=en&max=6&apikey=${gnewsKey}`
        const res = await fetch(url)
        const data = await res.json()
        if (data.errors) {
          throw new Error(data.errors.join(', '))
        }
        const articles =
          data.articles?.map(a => ({
            title: a.title,
            url: a.url,
            description: a.description,
            source: a.source?.name,
            publishedAt: a.publishedAt,
          })) ?? []
        setFootballNews(articles)
      } catch (err) {
        setErrorFootball(err.message || 'Could not load football news.')
      } finally {
        setLoadingFootball(false)
      }
    }

    if (newsApiKey) fetchTech()
    else {
      setLoadingTech(false)
      setErrorTech('Add VITE_NEWSAPI_KEY in your .env to see tech news.')
    }

    if (gnewsKey) fetchFootball()
    else {
      setLoadingFootball(false)
      setErrorFootball('Add VITE_GNEWS_KEY in your .env to see football news.')
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`section fade-up ${inView ? 'fade-up-visible' : ''}`}
    >
      <div className="container">
        <div className="section-header">
          <h2>Tech &amp; Football News</h2>
          <p className="section-subtitle">
            A live feed of what&apos;intrest me , Tech and Soccer news from free APIS happening in  world.
          </p>
        </div>

        <div className="news-grid">
          <NewsList
            title="Latest Tech News"
            items={techNews}
            loading={loadingTech}
            error={errorTech}
          />
          <NewsList
            title="Latest Football News"
            items={footballNews}
            loading={loadingFootball}
            error={errorFootball}
          />
        </div>
      </div>
    </div>
  )
}

export default NewsSection
