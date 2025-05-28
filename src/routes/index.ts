import express from 'express'; 
import exercise7 from './e7';


export function routerApiV1(app: express.Application) {
    const router = express.Router();
    router.use('/', exercise7);
    app.use(router);
}
