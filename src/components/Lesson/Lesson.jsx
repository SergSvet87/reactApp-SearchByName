import React from 'react'

export const Lesson = ({ lesson }) => {
  return (
    <>
      <h2>
        {lesson.title} {lesson.published ? 'Published' : 'Unpublished'}
      </h2>
      <dl>
        <dt>Short summary</dt>
        <dd>{lesson.shortSummary ?? <i>Not provided</i>}</dd>
      </dl>
      <a href={lesson.youtube} target="_blank" rel="noreferrer">
        Youtube link
      </a>
    </>
  )
}
