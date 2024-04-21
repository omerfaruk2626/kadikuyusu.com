import React from 'react';

const Singnup = () => {
    return (
        <div className="singUpArea container-fluid">
            <div className="row">
                <div className="col-md-4 m-auto">
                    <form className="row g-3 col-12 col-sm-12 m-auto">
                        <div className="input-group">
                            <span className="input-group-text">✉️</span>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="email" />
                                <label htmlFor="exampleInputEmail1">E-mail Adresiniz</label>
                            </div>
                        </div>
                        <p className="text-center text-white">ya da</p>
                        <div className="input-group mb-3">
                            <span className="input-group-text">🆔</span>
                            <div className="form-floating">
                                <input type="text" className="form-control" id="floatingInputGroup2" placeholder="Username" />
                                <label htmlFor="floatingInputGroup2">Kullanıcı Adınız</label>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">🗝️</span>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Şifreniz</label>
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label text-white" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Singnup;
