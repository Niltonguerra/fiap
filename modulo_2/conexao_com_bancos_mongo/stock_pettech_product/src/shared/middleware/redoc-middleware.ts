import redoc from 'redoc-express';

export function setupRedoc(app: any) {
  const redocOptions = {
    title: 'PetTech Stock API Documentation',
    version: '1.0.0',
    specUrl: '/api-json',
  };
  app.use('/docs', redoc({ ...redocOptions }));
}
