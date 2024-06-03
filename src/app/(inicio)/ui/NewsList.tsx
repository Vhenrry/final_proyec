'use client'
import React from 'react'
import { News } from '../../../types/News'
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardActionArea,
  TextField,
  CardActions,
  CardMedia,
  CardHeader,
} from '@mui/material'
import Image from "next/legacy/image"
import { useRouter } from 'next/navigation'

interface NewsListProps {
  news: News[]
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const router = useRouter()

  return (
    <Grid container spacing={2}>
      {news.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardActionArea
              onClick={(event) => {
                router.push(`/news/${item.id}`)
              }}
            >
              <CardContent>
               <Typography variant="h3" fontFamily={'font-bold'}>{item.name}</Typography>
               <Typography variant="body1"><b>Descripcion:</b> {item.description}</Typography>
               <Typography variant="body1"><b>Precio:</b> {item.price}</Typography>
              </CardContent>
              <CardContent>
              <TextField
                    id="datetime-local"
                    label="Fecha de Registro"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={item.createdAt}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
              </CardContent>
              <CardContent>
              <TextField
                    id="datetime-local"
                    label="Fecha de Modificacion"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={item.updatedAt}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default NewsList
