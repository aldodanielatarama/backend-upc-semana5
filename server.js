```javascript
const express = require('express');
const app = express();

app.use(express.json());

// Puerto asignado dinámicamente por la plataforma cloud o el puerto 3000 local
const PORT = process.env.PORT || 3000;

// Endpoint Health Check
app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Servicio Backend activo y desplejado en la Nube (UPC - Semana 5)',
    course: 'Arquitectura de Aplicaciones Web',
    timestamp: new Date()
  });
});

// Endpoint de prueba de información de la app
app.get('/api/v1/info', (req, res) => {
  res.status(200).json({
    architecture: 'Microservicios / Cloud Native',
    cloudProvider: 'Render (PaaS)',
    scalability: 'Horizontal / Auto-scaling'
  });
});

app.listen(PORT, () => {
  console.log('Servidor ejecutándose exitosamente en el puerto ' + PORT);
});