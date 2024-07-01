import React from 'react'
import { Container, Typography } from '@mui/material'

import axios from 'axios'
import NewsList from '../ui/NewsList'

export const revalidate = 60

async function fetchNews() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  return response.data
}

export default async function DemoSSRPage() {
  const news = await fetchNews()
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Últimos Productos
      </Typography>
      <NewsList news={news} />
    </Container>
  )
}
