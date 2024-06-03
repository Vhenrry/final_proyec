// @flow
import Box from '@mui/material/Box'
import { Button, DialogContent, Grid, Typography } from '@mui/material'
import { FormInputText } from '../../../../components/form'
import ProgresoLineal from '../../../../components/progreso/ProgresoLineal'
import { useForm } from 'react-hook-form'
import { Product } from './NewsListAdmin'
import { WebService } from '../../../../services'
import { imprimir } from '../../../../utils/imprimir'
import { useState } from 'react'
import { leerCookie } from '@/utils/cookies'

type Props = {
  Productos: Product | null | undefined
  handleClose: () => void
}

export const ModalNews = ({ Productos, handleClose }: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const token = leerCookie('token')
  
  const { handleSubmit, control } = useForm<Product>({
    defaultValues: {
      id: Productos?.id,
      name: Productos?.name,
      description: Productos?.description,
      price: Productos?.price,
      createdAt: Productos?.createdAt,
      updatedAt: Productos?.updatedAt,
      userId: Productos?.userId,
    },
  })

  async function crearOActualizar(Productos: Product) {
    try {
      setLoading(true)
      var datosUpdate = {
        name: Productos.name,
        description: Productos.description,
        price: parseFloat((Productos.price+"").replace(',', '.')),
      }
      if (Productos.id != null) {
        const response = await WebService.patch({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${Productos.id}`,
          body: datosUpdate,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        console.log(response)
      } else {
        console.log('PARA CREAR')
        const response = await WebService.post({
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
          body: datosUpdate,
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        })
        console.log(response)
      }
    } catch (error) {
      imprimir(error)
    } finally {
      setLoading(false)
      handleClose()
    }
  }

  async function crearProducto(Productos: Product) {
    try {
      setLoading(true)
      console.log('PARA CREAR')
      const response = await WebService.post({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
        body: Productos,
      })
      console.log(response)
    } catch (error) {
      imprimir(error)
    } finally {
      setLoading(false)
      handleClose()
    }
  }

  return (
    <DialogContent>
      <Grid container direction={'column'} justifyContent="space-evenly">
        <form onSubmit={handleSubmit(crearOActualizar)}>
          <Grid item xs={12} sm={12} md={12}>
            <FormInputText
              id={'name'}
              control={control}
              label="Título"
              size={'medium'}
              labelVariant={'subtitle1'}
              disabled={loading}
              rules={{ required: 'Este campo es requerido' }} name={'name'}            />
          </Grid>
          <Box sx={{ mt: 1, mb: 1 }}></Box>
          <Grid item xs={12} sm={12} md={12}>
            <FormInputText
              id={'description'}
              control={control}
              name="description"
              label="Descripción"
              size={'medium'}
              rows={5}
              multiline
              labelVariant={'subtitle1'}
              disabled={loading}
              rules={{
                required: 'Este campo es requerido',
                minLength: {
                  value: 3,
                  message: 'Mínimo 3 caracteres',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
          <FormInputText
              id={'price'}
              control={control}
              label="Precio"
              size={'small'}
              labelVariant={'subtitle1'}
              disabled={loading}
              rules={{
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[0-9]+(\.[0-9]+)?$/,
                  message: 'Ingrese un precio válido',
                },
              }}
              type={'number'}
              name={'price'}
            />
          </Grid>

          <Box sx={{ mt: 0.5, mb: 0.5 }}>
            <ProgresoLineal mostrar={loading} />
          </Box>
          <Box sx={{ height: 15 }}></Box>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
          >
            <Typography sx={{ fontWeight: '600' }}>Guardar</Typography>
          </Button>
        </form>
      </Grid>
    </DialogContent>
  )
}
