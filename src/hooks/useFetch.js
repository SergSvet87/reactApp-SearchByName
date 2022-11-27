import React from "react"

export const useFetch = (url) => {
  const [response, setResponse] = React.useState(null)
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {

    setLoading(true)

    setTimeout(() => {

      fetch(url)

        .then(res => {
          if (res.ok) {
            return res.json()
          }
          if (res.status === 404) {
            throw new Error('Oh, No!!! Not Found! 💥')
          }

          if (res.status === 500) {
            throw new Error('Oh, No!!! Server failed! 💥')
          }

          if (res.status === 502) {
            throw new Error('Oh, No!!! Bad Gateway failed! 💥')
          }

          throw new Error('Oh, No!!! Something went wrong: 💥')
        })
        .then(data => {
          setResponse(data)
          setError(null)
          setLoading(false)
        })
        .catch(e => {
          setLoading(false)
          setError(e.message)
        })

    }, 1500);
  }, [url])

  return { response, loading, error }
};
