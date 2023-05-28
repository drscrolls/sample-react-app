import React from 'react'
import "./style.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function SecondPage() {
  return (
    <div align="center">
        <h1>Second Page</h1>

        <Link to="/">
            <Button variant='contained'>Return Home</Button>
        </Link>
    </div>
  )
}
