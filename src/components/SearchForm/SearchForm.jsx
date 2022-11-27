import React from 'react'

// import { useInput } from '../../hooks/useInput'
import './SearchForm.scss'

export const SearchForm = ({ getKeyUrl }) => {
  const [textInput, setTextInput] = React.useState('')
  const [textInputBlur, setTextInputBlur] = React.useState(false)
  const [buttonValid, setButtonValid] = React.useState(false)
  const [textInputError, setTextInputError] = React.useState(
    'The search field cannot be empty!'
  )

  const onBlurHandler = (e) => {
    switch (e.target.name) {
      case 'form-input_text':
        setTextInputBlur(true)
        break

      default:
        setTextInput('')
        break
    }
  }

  const onChangeHandler = (e) => {
    let valueInput = e.target.value

    setTextInput(valueInput)

    if (valueInput.length < 3 || valueInput.length > 15) {
      setTextInputError('Incorrect name length!')

      if (!valueInput) {
        setTextInputError('The search field cannot be empty!')
      }
    } else {
      setTextInputError('')
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    getKeyUrl(textInput)
    setTextInput('')
    setTextInputBlur(true)
  }

  React.useEffect(() => {
    if (textInputError) {
      setButtonValid(false)
    } else {
      setButtonValid(true)
    }
  }, [textInputError])

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <label htmlFor="form-input_text">
        Enter the name or title of the lesson
      </label>
      {textInputBlur && textInputError && (
        <h6 style={{ color: 'orangered', marginBottom: '15px' }}>
          {textInputError}
        </h6>
      )}
      <input
        className="form__input"
        id="form-input_text"
        name="form-input_text"
        type="text"
        placeholder="Enter text"
        value={textInput}
        onChange={(e) => onChangeHandler(e)}
        onBlur={(e) => onBlurHandler(e)}
      />
      <button className="form__btn" type="submit" disabled={!buttonValid}>
        Submit
      </button>
    </form>
  )
}
