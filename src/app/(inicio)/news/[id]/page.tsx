'use client'
import { usePathname, useRouter } from 'next/navigation'
import { WebService } from '../../../../services'
import { Constantes } from '../../../../config'
import React, { useEffect, useState } from 'react'
import { News } from '../../../../types/News'
import { imprimir } from '../../../../utils/imprimir'
import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Grid,
} from '@mui/material'
import Image from "next/legacy/image"
import { Icono } from '../../../../components/Icono'

const DetalleNoticia = () => {
  const pathname = usePathname()

  const pathParts = pathname.split('/')
  const newsId = pathParts[pathParts.length - 1]

  // para las noticias
  const [news, setNews] = useState<News>()

  const router = useRouter()

  const obtenerDetalle = async () => {
    const response = await WebService.get({
      url: `${Constantes.baseUrl}/api/products/${newsId}`,
    })
    setNews(response)
    imprimir(response)
  }

  useEffect(() => {
    if (newsId) {
      obtenerDetalle()
    }
  }, [])

  return news ? (
    <Box>
      <Button
        variant="text"
        color="primary"
        onClick={() => router.back()}
        style={{ marginBottom: '1rem' }}
      >
        <Icono>arrow_back</Icono> Volver Atrás
      </Button>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h4">{news.name}</Typography>}
          />
        </ListItem>
        <Typography variant="body1"><b>Descripcion:</b> {news.description}</Typography>
        <Typography variant="body1"><b>Precio:</b> {news.price}</Typography>
        <Grid>
        <TextField
                    id="datetime-local"
                    label="Fecha de Registro"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={news.createdAt}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
        <TextField
                    id="datetime-local"
                    label="Fecha de Modificacion"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={news.updatedAt}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    disabled
                  />
        <Typography variant="body1"><b>UserId:</b> {news.userId}</Typography>
        </Grid>
      </List>
    </Box>
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
      <Typography variant="h6" style={{ marginLeft: '1rem' }}>
        Cargando Productos...
      </Typography>
    </Box>
  )
}

export default DetalleNoticia
