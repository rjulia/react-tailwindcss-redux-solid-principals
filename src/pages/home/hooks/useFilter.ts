import { useEffect, useState } from 'react'

export function useFilter() {
  const [query, setQuery] = useState<string | undefined>(undefined)

  const handleSearch = (q: string) => {
    setQuery(q)
  }

  useEffect(() => {
    setQuery(undefined)
  }, [])

  return { query, handleSearch }
}
