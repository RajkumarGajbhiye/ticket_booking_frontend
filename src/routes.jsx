


import Book from "./pages/Book";
import Movie from "./pages/Movie";
import MovieDetails from "./pages/MovieDetails";
import Payment from "./pages/Payment";




const routes=[
   
    
    {
        path:"/",
        element:<Movie/>,
    },
    {
        path:"details/:_id",
        element:<MovieDetails/>,
    },
    {
        path: "/booking",
        element: <Book/>,
      },
      {
        path:"/payment",
        element: <Payment/>
      },
        
]

export default routes;