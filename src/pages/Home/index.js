import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export default function Home() {
    return (
        <div align="center">
            <h1 align="center">Welcome to your new React App</h1>

            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <Link to="/first" style={{marginBottom: 10}}>
                    <Button variant='contained'>Go to First Page</Button>
                </Link>

                <Link to="/second">
                    <Button variant='contained'>Go to Second Page</Button>
                </Link>

            </div>

        </div>
    )
}
