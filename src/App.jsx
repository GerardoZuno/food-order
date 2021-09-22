import React, {useState} from 'react'
import { Cart } from './components/Cart/Cart'
import { Header } from './components/Layout/Header'
import { Meals } from './components/Meals/Meals'
import CartProvider from './store/CartProvider'

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false)
  
  const showCartHandler = () => {
    setCartIsShown(!cartIsShown)
  }


  return (
    <CartProvider>

      {
        cartIsShown && <Cart showCartHandler={showCartHandler}/>
      }
      
      <Header showCartHandler={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  )
}

export default App
