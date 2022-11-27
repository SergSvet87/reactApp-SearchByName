import React from 'react'
import { Lesson } from '../Lesson/Lesson'

import './SearchList.scss'

export const SearchList = ({ data }) => {
  return (
    <ul className="list">
      {data.map((lesson, index) => (
        <li className="list__item lesson" key={index}>
          <Lesson lesson={lesson} />
        </li>
      ))}
    </ul>
  )
}
