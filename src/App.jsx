import { useRoutes } from 'react-router-dom';

import { Suspense } from 'react';
import routers from './routes/routers';

function App() {
    const element = useRoutes(routers);

    return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
}

export default App;
