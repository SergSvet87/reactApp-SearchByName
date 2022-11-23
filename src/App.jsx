import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import { Route, Link } from 'react-router-dom'

import { SearchForm } from './components/SearchForm/SearchForm'
import { SearchList } from './components/SearchList/SearchList'
import { Loader } from './ui/Loader/Loader'
import { useFetch } from './hooks/useFetch'
import { useLocalStorage } from './hooks/useLocalStorage'
import { ErrorFallback } from './components/error/ErrorFallback'

import './App.scss'

const API_URL = 'https://react-course-api.azurewebsites.net/lesson/'

function App() {
  const [SEARCH_KEYWORD, setKeyUrl] = React.useState('')
  const { data } = useFetch(API_URL + SEARCH_KEYWORD)
  const [lessons, setLessons] = useLocalStorage(data, 'lessons')

  React.useEffect(() => {
    if (data) {
      setLessons(data)
    }
  }, [data, setLessons])

  const getKeyUrl = (keyUrl) => {
    setKeyUrl(keyUrl)
  }

  return (
    <main className="main">
      <h1>Search Lesson</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => getKeyUrl('')}
      >
        <SearchForm getKeyUrl={getKeyUrl} />
        {lessons ? <SearchList lessons={lessons} /> : <Loader />}
      </ErrorBoundary>
    </main>
  )
}

export default App
