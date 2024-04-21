import React from 'react';

const Login = () => {
  return (
    <div className="loginArea container-fluid">
      <div className="col-md-4 m-auto">
        <form className="row g-3 col-12 col-sm-12 m-auto">
          <div className="input-group mb-3">
            <span className="input-group-text">👤</span>
            <div className="form-floating">
              <input type="text" className="form-control" id="fullName" placeholder="Adınız Soyadınız" />
              <label htmlFor="fullName">Adınız Soyadınız</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🆔</span>
            <div className="form-floating">
              <input type="text" className="form-control" id="username" placeholder="Username" />
              <label htmlFor="username">Kullanıcı Adınız</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">✉️</span>
            <div className="form-floating">
              <input type="email" className="form-control" id="email" placeholder="email" />
              <label htmlFor="email">E-mail Adresiniz</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🗝️</span>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="Password" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
