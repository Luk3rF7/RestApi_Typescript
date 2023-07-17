import express from 'express'

// setup dotenv
import { config } from 'dotenv'
config()

const app = express()

const port = process.env.PORT || 8000;

app.listen(port,() => {
  console.log('iniciado Backend...')
  console.log(`http://localhost:${port}`)
})