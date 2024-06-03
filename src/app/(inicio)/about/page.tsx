'use client'
import { Avatar, Card, CardContent, CardMedia, Grid } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom textAlign={'center'}>
      GALERIA LA AVENTURA
    </Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        Acerca de Nosotros
      </Typography>
      <Typography variant="body1" paragraph>
      ¡Bienvenido a nuestra galería de productos!

      En GALERIA LA AVENTURA, nos apasiona ofrecerte una selección cuidadosamente curada de productos que combinan calidad, estilo y funcionalidad. Desde artículos de decoración para el hogar hasta accesorios de moda y gadgets tecnológicos, cada artículo que encontrarás aquí ha sido seleccionado con un único propósito: brindarte una experiencia de compra excepcional.
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={3}>
        <img style={{width:300}} src="/static/images/ropas.jpg"/>
        </Grid>
        <Grid item xs={3}>
        <img style={{width:300}} src="/static/images/productos.jpg"/>
        </Grid>
        <Grid item xs={3}>
        <img style={{width:300}} src="/static/images/camping.jpg"/>
        </Grid>
      </Grid>
      <Typography variant="body1" paragraph>
      Nuestra misión es proporcionarte no solo productos excepcionales, sino también una experiencia de compra sin complicaciones. Nos esforzamos por ofrecer un servicio al cliente excepcional, asistencia personalizada y un ambiente acogedor tanto en línea como en nuestra tienda física. Creemos que cada compra es una oportunidad para deleitarte, inspirarte y hacer que te sientas especial. ¡Gracias por visitarnos!
      </Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={3}>
        <img style={{width:300}} src="/static/images/logoEmpresa.jpg"/>
        </Grid>
      </Grid>
    </Container>
  )
}
