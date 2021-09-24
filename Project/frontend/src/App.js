import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { signout } from './actions/userActions'
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMeathodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import PrivateRoute from './components/PrivateRoute';
import ProfileScreen from './screens/ProfileScreen';
import AboutUsScreen from './screens/AboutUsScreen';


function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">Vastralok</Link>
          </div>
          <div>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile" className="profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="/orderhistory" className="profile" >Order History</Link>
                    </li>
                    <li>
                      <Link to="/signin" onClick={signoutHandler} className="profile" >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin" className="profile" >Sign In</Link>
              )
            }
            <Link to="/cart" className="profile" >Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
          </div>
        </header>

        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen} exact></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
          <Route path="/shipping" component={ShippingAddressScreen} exact></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/aboutus" component={AboutUsScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer>
          <div className="footer container">
            <div className="row ">
              <div className="">
                <div className="col">ABOUT</div>

                <a href="/aboutus" className="link">About Us</a>
                <a href="/careers" className="link">Careers</a>
              </div>

              <div className="">
                <div className="col">HELP</div>

                <a href="/pages/payments" className="link">Payments</a>
                <a href="/helpcentre" className="link">Cancellation &<i class="fas fa-amazon-pay"></i> Returns</a>
                <a href="/helpcentre" className="link">FAQ</a>
              </div>

              <div className="">
                <div className="col">POLICY</div>

                <a href="/pages/returnpolicy" className="link">Return Policy</a>
                <a href="/pages/paymentsecurity" className="link">Security</a>
                <a href="/pages/privacypolicy" className="link">Privacy</a>
              </div>

              <div className="">
                <div className="col">SOCIAL</div>

                <a href="https://www.facebook.com/Vastralok" className="link">Facebook</a>
                <a href="https://www.twitter.com/Vastralok" className="link">Twitter</a>
                <a href="https://www.youtube.com/Vastralok" className="link">YouTube</a>
              </div>

              <div className="row">
                <div className="col col1">
                  <div className="">
                    <span>Mail Us:</span>
                  </div>

                  <div className="">
                    <div className="">
                      <div className="link1">
                        <p>Vastralok Internet Private Limited, </p>
                        <p> Buildings Alyssa, Begonia &<i class="fas fa-amazon-pay    "></i> </p>
                        <p> Clove Embassy Tech Village, </p>
                        <p> Outer Ring Road, Devarabeesanahalli Village, </p>
                        <p> Bengaluru, 560103, </p>
                        <p> Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="">
                  <div className="col col2">
                    <span>Registered Office Address:</span>
                  </div>

                  <div className="">
                    <div className="">
                      <div className="link2">
                        <p>Vastralok Internet Private Limited, </p>
                        <p>  No.1, Old Madras Road, </p>
                        <p> Opp. HAL Aeroengine Division, </p>
                        <p> Byappanahalli, </p>
                        <p> Bangalore – 560 038, </p>
                        <p> Karnataka, India </p>
                        <p> Telephone: <a href="tel:9146700441">9146700441</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div>
                  <a href="/helpcenter">
                    <span className="link">Help Center</span></a>
                </div>

                <span className="rights">© 2021 All Rights Reserved  <span className="web"> Vastralok.com </span></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
