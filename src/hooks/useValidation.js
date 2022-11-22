import React from 'react'

export const useValidation = (value, validations) => {

  const [isEmpty, setIsEmpty] = React.useState(true)
  const [minLengthError, setMinLengthError] = React.useState(false)
  const [maxLengthError, setMaxLengthError] = React.useState(false)
  const [buttonValid, setButtonValid] = React.useState(false)

  React.useEffect(() => {

    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
          break;

        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true)
          break;

        case 'maxLength':
          value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
          break;

        default:
          break;
      }
    }
  }, [value, validations])

  React.useEffect(() => {
    if (isEmpty || minLengthError || maxLengthError) {
      setButtonValid(false)
    } else {
      setButtonValid(true)
    }
  }, [isEmpty, minLengthError, maxLengthError])

  return {
    isEmpty,
    minLengthError,
    maxLengthError,
    buttonValid
  }
}
