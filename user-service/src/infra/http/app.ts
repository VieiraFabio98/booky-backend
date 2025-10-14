import 'reflect-metadata'
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { router } from '@infra/http/routes/index'
import '@infra/container'



const app = express()

app.use(express.json({limit: '250mb'}))

const options: cors.CorsOptions = {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}

app.use(cors(options))

app.use(router)

export { app }