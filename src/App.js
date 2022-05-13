// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1 네비게이션바 만들기!
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있디.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다. 
// 3. 상품디테일을 눌렀으나, 로그인이 안되있으면 로그인페이지가 먼저 나온다. (redirect)
// 4. 로그인이 되어있으면 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼을 누르면 로그아웃이 됨
// 5. 로그아웃되면 상품 디테일을 볼수 없다
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, ProductAll, ProductDetail } from './page';
import Header from './page/Header';
import PrivateRoute from './route/PrivateRoute';

function App() {
    const [auth, setAuth] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
      console.log(auth);
    },[auth]);

    return (
      <div>
        <Header auth={auth} setAuth={setAuth} id={id}/>
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route path='/login' element={<Login setAuth={setAuth} setId={setId} />} />
          <Route path='/product/:id' element={<PrivateRoute auth={auth}/>} />
        </Routes>
      </div>
    );
}

export default App;
