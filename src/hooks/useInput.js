import React from 'react'

import { useValidation } from './useValidation'

export const useInput = (initialValue, validations) => {

  const [value, setValue] = React.useState(initialValue)
  // const [isWithError, setIsWithError] = React.useState(false)

  const valid = useValidation(value, validations)

  const onChangeHandler = (e) => {
    setValue(e.target.value)
  }

  return {
    value,
    onChangeHandler,
    ...valid
  }
}

