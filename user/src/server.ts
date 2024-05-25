
import { initRoutes, server } from './routes/user.router';
import { connectToDatabase } from './services/database.service';
import { initConsul } from './util/consul';

const init = async () => {
    initRoutes();

    connectToDatabase()
    .then(async () => {
        try {
            await server.start();
            console.log(`Server started at http://${server.info.host}:${server.info.port}`);
        } catch (error) {
            console.log('Server not started,', error);
        }
    })
    .catch((error: Error) => {
        console.error('Database connection failed', error);
        process.exit();
    });

    //initConsul();
};

init();