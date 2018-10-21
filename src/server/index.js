import { start as startServer } from './server';
import { start as startDynoWatcher } from './dynoWatcher';

startServer().then(startDynoWatcher);
