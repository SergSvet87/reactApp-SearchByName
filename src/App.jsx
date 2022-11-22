import React from 'react'

import { SearchForm } from './components/SearchForm/SearchForm'
import { SearchList } from './components/SearchList/SearchList'
import { Loader } from './ui/Loader/Loader'
import { useFetch } from './hooks/useFetch'

import './App.scss'

const API_URL = 'https://react-course-api.azurewebsites.net/lesson/'

function App() {
  const [SEARCH_KEYWORD, setKeyUrl] = React.useState('')
  const { data } = useFetch(API_URL + SEARCH_KEYWORD)
  const [lessons, setLessons] = React.useState(data)

  React.useEffect(() => {
    if (data) {
      setLessons(data)
    }
  }, [data])

  const getKeyUrl = (keyUrl) => {
    setKeyUrl(keyUrl)
  }

  return (
    <main className="main">
      <h1>Search Lesson</h1>
      <SearchForm getKeyUrl={getKeyUrl} />
      {!lessons ? <SearchList lessons={lessons} /> : <Loader />}
    </main>
  )
}

export default App
