import React from 'react'
import "./style.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div align="center">
      <h1 style={{margin: 30}}>Page Not Found</h1>
      <Link to="/">
        <Button variant='contained'>Return Home</Button>
      </Link>
  </div>
  )
}
