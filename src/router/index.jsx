import Cart from "../pages/Cart"
import Home from "../pages/Home"

export const publicRoutes =[
    {path:'/', component: Home},
    {path:'/cart', component: Cart, layout:null}

]

export const privateRoutes = [

]