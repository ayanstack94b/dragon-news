import { createBrowserRouter } from "react-router";
import Homelayout from "../Layouts/Homelayout";
import Home from "../Pages/Home";
import CategoryNames from "../Pages/CategoryNames";

const router = createBrowserRouter(
    [
        {
            path: '/', element: <Homelayout></Homelayout>,
            children: [
                {
                    path: '',
                    element: <Home></Home>,
                },
                {
                    path: '/category/:id',
                    element: <CategoryNames></CategoryNames>,
                    loader: ()=>fetch("/news.json")
                },
            ]
        },
        { path: '/auth', element: <h2>Authentic layout</h2> },
        { path: '/news', element: <h2>News Layout</h2> },
        { path: '/*', element: <h2>Error-404</h2> },
    ]
)

export default router;