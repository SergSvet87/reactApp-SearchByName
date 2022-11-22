import React from 'react'
import { Lesson } from '../Lesson/Lesson'

export const SearchList = ({ lessons }) => {

  const [list, setList] = React.useState([])
  console.log(lessons);
  return (
    <ul className="list">
      {list.map((lesson, index) => (
        <li className="list__item" key={index}><Lesson lesson={lesson} /></li>
      ))}
    </ul>
  )
}
