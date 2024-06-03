import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import Image from "next/legacy/image"
import { IconoTooltip } from '../../../../components/botones/IconoTooltip'
import { WebService } from '../../../../services'
import { CustomDialog } from '../../../../components/dialog/CustomDialog'
import { AlertDialog } from '../../../../components/dialog/AlertDialog'
import { Constantes } from '../../../../config'
import { ModalNews } from './ModalNews'
import { leerCookie } from '@/utils/cookies'

export interface Product {
  id?: number
  name?: string
  description?: string
  price?: number
  createdAt?: string
  updatedAt?: string
  userId?: number
}

const NewsAdminList: React.FC = () => {
  // para las noticias
  const [news, setNews] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [currentNew, setCurrentNew] = useState<Product | null>()
  const [openModalEdicion, setOpenModalEdicion] = useState<boolean>(false)
  const [openAlertaBorrar, setAlertaBorrar] = useState<boolean>(false)
  const token = leerCookie('token')

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await WebService.get({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      })
      setNews(response)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const eliminarPeticion = async (Producto: Product) => {
    try {
      await WebService.delete({
        url: `${Constantes.baseUrl}/api/products/${Producto.id}` ?? '',
        body: Producto,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      })
    } catch (e) {
      console.log(e)
    }
  }

  const editarNoticia = (Producto: Product) => {
    setCurrentNew(Producto)
    setOpenModalEdicion(true)
  }

  const cerrarModal = async () => {
    setCurrentNew(null)
    setOpenModalEdicion(false)
    await fetchNews()
  }

  const abrirAlertaBorrar = (Producto: Product) => {
    setCurrentNew(Producto)
    setAlertaBorrar(true)
  }

  const aceptarAlertaBorrar = async () => {
    if (!currentNew) {
      return
    }
    console.log('eliminando');
    await eliminarPeticion(currentNew)
    setAlertaBorrar(false)
    await fetchNews()
  }

  const cerrarAlertaBorrar = () => {
    setAlertaBorrar(false)
  }

  return (
    <>
      <AlertDialog
        isOpen={openAlertaBorrar}
        titulo={'Alerta'}
        texto={`¿Esta seguro de  borrar el producto?`}
      >
        <Button variant={'outlined'} onClick={cerrarAlertaBorrar}>
          Cancelar
        </Button>
        <Button variant={'contained'} onClick={aceptarAlertaBorrar}>
          Aceptar
        </Button>
      </AlertDialog>
      <CustomDialog
        isOpen={openModalEdicion}
        handleClose={cerrarModal}
        title={'Editar Producto'}
      >
        <ModalNews Productos={currentNew} handleClose={cerrarModal} />
      </CustomDialog>
      <Grid container sx={{ pb: 2 }}>
        <Grid item xs={6} sm={6} md={6}>
          Aquí puedes gestionar los productos
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'end'}
            flexDirection={'row'}
          >
            <Button
              variant={'contained'}
              onClick={() => {
                setOpenModalEdicion(true)
              }}
            >
              Nuevo Producto
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {news.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">{item.name}</Typography>
                <Typography variant="body1" color="text.secondary">
                <b>Description:</b> {item.description}
                </Typography>
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
              <CardActions>
                <Grid container flexDirection={'row'} alignItems={'end'}>
                  <Grid item>
                    <Box
                      display={'flex'}
                      justifyContent={'end'}
                      flexDirection={'row'}
                    >
                      <IconoTooltip
                        titulo={'editar'}
                        icono={'edit'}
                        accion={() => {
                          editarNoticia(item)
                        }}
                        name={'editar'}
                        id={`${item.id}`}
                      />
                      <IconoTooltip
                        titulo={'eliminar'}
                        icono={'delete'}
                        color={'error'}
                        accion={() => {
                          abrirAlertaBorrar(item)
                        }}
                        name={'eliminar'}
                        id={`${item.id}`}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default NewsAdminList
