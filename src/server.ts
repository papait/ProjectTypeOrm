import app from './app';
import 'reflect-metadata';
// conection do banco
import './database';

app.listen(3000, () => {
  console.log('🏃 Running Server');
});
