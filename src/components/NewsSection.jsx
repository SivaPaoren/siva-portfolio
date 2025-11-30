// src/components/NewsSection.jsx
import React, { useEffect, useState } from 'react'
import NewsList from './NewsList'

const NewsSection = () => {
  const [techNews, setTechNews] = useState([])
  const [footballNews, setFootballNews] = useState([])

  const [loadingTech, setLoadingTech] = useState(true)
  const [loadingFootball, setLoadingFootball] = useState(true)

  const [errorTech, setErrorTech] = useState(null)
  const [errorFootball, setErrorFootball] = useState(null)

  const gnewsKey = import.meta.env.VITE_GNEWS_KEY

  useEffect(() => {
    if (!gnewsKey) {
      setLoadingTech(false)
      setLoadingFootball(false)
      setErrorTech('Missing GNews API key')
      setErrorFootball('Missing GNews API key')
      return
    }

    const controller = new AbortController()

    const fetchTech = async () => {
      try {
        setLoadingTech(true)
        setErrorTech(null)

        const url = `https://gnews.io/api/v4/search?q=technology&lang=en&max=10&token=${gnewsKey}`
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error(`Tech news error: ${res.status}`)
        const data = await res.json()

        setTechNews(
          (data.articles || []).map(a => ({
            title: a.title,
            url: a.url,
            description: a.description,
            source: { name: a.source?.name || 'GNews' },
            publishedAt: a.publishedAt,
          })),
        )
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Tech news fetch failed', err)
          setErrorTech('Failed to load tech news')
        }
      } finally {
        setLoadingTech(false)
      }
    }

    const fetchFootball = async () => {
      try {
        setLoadingFootball(true)
        setErrorFootball(null)

        const url = `https://gnews.io/api/v4/search?q=football&lang=en&max=10&token=${gnewsKey}`
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error(`Football news error: ${res.status}`)
        const data = await res.json()

        setFootballNews(
          (data.articles || []).map(a => ({
            title: a.title,
            url: a.url,
            description: a.description,
            source: { name: a.source?.name || 'GNews' },
            publishedAt: a.publishedAt,
          })),
        )
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Football news fetch failed', err)
          setErrorFootball('Failed to load football news')
        }
      } finally {
        setLoadingFootball(false)
      }
    }

    fetchTech()
    fetchFootball()

    return () => controller.abort()
  }, [gnewsKey])

  return (
    <section id="news" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Tech &amp; Football News</h2>
          <p className="section-subtitle">
            Live headlines fetched from free APIs – a mix of what I love: tech
            and football.
          </p>
        </div>

        <div className="news-grid">
          <article className="news-card">
            <header className="news-header">
              <h3>Latest in Tech</h3>
            </header>
            <div className="news-body">
              <NewsList
                items={techNews}
                loading={loadingTech}
                error={errorTech}
                emptyMessage="No tech news available right now."
              />
            </div>
          </article>

          <article className="news-card">
            <header className="news-header">
              <h3>Latest in Football</h3>
            </header>
            <div className="news-body">
              <NewsList
                items={footballNews}
                loading={loadingFootball}
                error={errorFootball}
                emptyMessage="No football news available right now."
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
