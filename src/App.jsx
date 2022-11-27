import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
// import { Route, Link } from 'react-router-dom'

import { SearchForm } from './components/SearchForm/SearchForm'
import { SearchList } from './components/SearchList/SearchList'
import { Loader } from './ui/Loader/Loader'
import { useFetch } from './hooks/useFetch'
// import { useLocalStorage } from './hooks/useLocalStorage'
import { ErrorFallback } from './components/error/ErrorFallback'

import './App.scss'

const API_URL = 'https://react-course-api.azurewebsites.net/lesson/'

function App() {
  const [SEARCH_KEYWORD, setKeyUrl] = React.useState('')
  const { response, error, loading } = useFetch(API_URL + SEARCH_KEYWORD)
  // const [lessons, setLessons] = useLocalStorage(response, 'lessons')

  // React.useEffect(() => {
  //   if (response) {
  //     setLessons(response)
  //   }
  // }, [response, setLessons])

  const getKeyUrl = (keyUrl) => {
    setKeyUrl(keyUrl)
  }

  return (
    <main className="main">
      <h1>Search Lesson</h1>

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <SearchForm getKeyUrl={getKeyUrl} />
        {error && <ErrorFallback error={error} />}
        {loading && <Loader />}
        {response && <SearchList data={response} />}
      </ErrorBoundary>
    </main>
  )
}

export default App
