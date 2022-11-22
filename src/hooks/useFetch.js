import React from "react"

export const useFetch = (url) => {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  React.useEffect(() => {

    setLoading(true)

    fetch(url)

      .then(res => {
        if (res.ok) {
          return res.json()
        }

        throw new Error('Network failed!')
      })
      .then(data => {
        setData(data)
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url])

  return { data, loading, error }
};
