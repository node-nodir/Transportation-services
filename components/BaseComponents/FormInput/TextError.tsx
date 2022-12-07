import React from 'react'

interface ErrorMessages {
    name: string
    children: string
}

function TextError(props: ErrorMessages ) {
  return <div className="text-red-600">{props.children}</div>
}

export default TextError
