import cookieParser from 'cookie-parser';
import express from "express";
import { router as usuariosRouter }  from './entities/usuarios/router/usuarios.router';

export const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' })); // REF: https://heynode.com/tutorial/process-user-login-form-expressjs/
app.use(cookieParser());

app.use('/api/v1/usuarios', usuariosRouter);  