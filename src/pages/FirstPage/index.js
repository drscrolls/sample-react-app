import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function FirstPage() {
    return (
        <div align="center">
            <h1 align="center">First Page</h1>

            <Link to="/">
                <Button variant='contained'>Return Home</Button>
            </Link>
        </div>
    )
}
