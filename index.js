import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import conectarDB from './config/db.js';
import pacienteRoutes from './routes/pacienteRoutes.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';

const app = express();
app.use( express.json() );
app.use( cors( ) );
dotenv.config();

conectarDB();



const dominiosPermitidos = [ `https://apv-backend-nodejs-production.up.railway.app/${process.env.FRONTEND_URL}` ];

// const corsOptions = {
//     origin: function ( origin, callback )
//     {
//         if ( dominiosPermitidos.indexOf( origin ) !== -1 )
//         {
//             //Elorigen del request esta permitido
//             callback( null, true );
//         } else
//         {
//             callback( new Error( 'No permitido por CORS' ) );
//         }
//     }
// };



app.use( "/api/veterinarios", veterinarioRoutes );
app.use( "/api/pacientes", pacienteRoutes );


const PORT = process.env.PORT || 4000;

app.listen( PORT, () =>
{
    console.log( `servidor funcionando en el puerto ${ PORT }` );
} );
