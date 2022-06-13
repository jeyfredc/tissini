import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../reducers/actions/loginUser";
import "../../styles/Login.scss";
import logo from "../../assets/logo.e38c8b41.png";

const Login = () => {
  const [number, setNumber] = useState({
    mobilephone: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authReducer } = useSelector((state) => state);
  useEffect(() => {
    if (number.mobilephone.length === 10) {
      dispatch(registerUser(number));
    }
    if (authReducer.loginUser !== "") {
      setTimeout(() => {
        navigate("/categorias");
        
      }, 2000);
    }
  }, [number, authReducer]);


  const handleChange = (e) => {
    setNumber({
      ...number,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div className="loginContainer">
        <div className="text-center">
          <div className="v-card__title mt-5">
            <div className="text-xs-center mt-5">
              <img className="logo" src={logo} alt="logo mi tienda" />
              <h6 className="mt-3">
                {" "}
                Ingresa el número de teléfono <br />
                de tu asesora independiente.{" "}
              </h6>
            </div>
          </div>
          <div className="v-card__text">
            <div className="layout align-center justify-center">
              <div className="flex xs12 md6">
                <form className="v-form">
                  <div className="v-input v-text-field v-text-field--enclosed v-text-field--outline theme--light">
                    <div className="v-input__control text-cemter">
                      <div className="v-input__slot text-center">
                        <div className="v-text-field__slot">
                          <label
                            aria-hidden="true"
                            className={
                              authReducer.error
                                ? "v-label theme--light error--text"
                                : "v-label theme--light"
                            }
                          >
                            Telefono
                          </label>
                          <input
                            aria-label="Telefono"
                            name="mobilephone"
                            type="tel"
                            maxLength={10}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {authReducer.loginUser !== "" &&
                      <div className="v-text-field__details spinner" />
                      }
                      <div className="v-messages theme--light">
                        {authReducer.error && (
                          <div className="v-messages__wrapper error--text ">
                            Este número no es valido o no está registrado.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
