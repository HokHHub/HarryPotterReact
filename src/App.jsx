import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainBlock from './components/MainBlock/MainBlock'

function App() {
  let [page, setPage] = useState('main')
  let [search, setSearch] = useState('')
  let [filter, setFilter] = useState('')
  const newContent = 22
  const [visibleCount, setVisibleCount] = useState(22)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Header search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} page={page} setPage={setPage} />
      <MainBlock visibleCount={visibleCount} setVisibleCount={setVisibleCount} loading={loading} newContent={newContent} setLoading={setLoading} search={search} filter={filter} page={page} setPage={setPage} />
    </>
  )
}

export default App
