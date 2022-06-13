import React, { useEffect, useState } from 'react'
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../reducers/types/types";
import { useNavigate } from "react-router-dom";
import '../../styles/Boutique/CloseModal.scss';
const CloseModal = ({open, setOpen}) => {

    const handleClose = () => setOpen(false);
    const { authReducer } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const handleShow = () => setShow(true);
    useEffect(() => {
      if (authReducer.loginUser === "") {
        setOpen(true);
        navigate('/')
      }
    }, [authReducer]);
  
    const exitUser = () => {
      dispatch({
        type: types.loginUser,
        payload: "",
      });
    };

  return (


    <Modal
    isOpen={open}
    style={{ padding: '20px' , width: '39%'}}
    onRequestClose={handleClose}
  >
    <div className="v-card v-sheet theme--light Modal">
      <div className='v-card__title headline pink lighten-2 white--text v-card__title--primary'>
        ¿Quieres Salir?
      </div>
      <div className="v-card__text">
        {" "}
        Dándole un toque a este botón sales de la Tienda. Si quieres navegar
        en la Tienda utiliza las opciones de la parte inferior: <br />
        <i className="mdi mdi-24px mdi-cart primary--text pi pi-shopping-cart"></i>Carrito
        <i className="mdi mdi-24px mdi-account-badge primary--text"></i>Catalogo{" "}
        <i className="mdi mdi-24px mdi-home primary--text pi pi-home" ></i>Categorías{" "}
      </div>
      <hr className="v-divider theme--light" />
      <div className="v-card__actions">
        <div className="spacer"></div>
        <button
          type="button"
          className="v-btn v-btn--flat theme--light pink--text text--lighten-2"
          onClick={exitUser}
        >
          <div className="v-btn__content">Salir de la Tienda</div>
        </button>
        <button
          type="button"
          className="v-btn v-btn--flat theme--light pink--text text--lighten-2"
          onClick={handleClose}
        >
          <div className="v-btn__content">Volver</div>
        </button>
      </div>
    </div>
  </Modal>

  )
}

export default CloseModal