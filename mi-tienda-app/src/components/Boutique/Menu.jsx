import React, { Fragment, useState } from "react";
import "../../styles/Boutique/Menu.scss";
import CloseModal from "./CloseModal";


const Menu = () => {
  const [open, setOpen] = useState(false);

  
  const closeUser = () => {
    setOpen(true);

  };


  return (
    <Fragment>
      <nav
        className="elevation-1 v-toolbar v-toolbar--dense v-toolbar--fixed theme--dark accent menu"
        data-booted="true"
        /* style="margin-top: 0px; padding-right: 0px; padding-left: 0px; transform: translateY(0px);" */
      >
        <div className="v-toolbar__content" /* style="height: 52px;" */>
          <div className="v-toolbar__title primary--text animated bounceInLeft toolbar-text">
            La Boutique
          </div>

          <div className="spacer"></div>

          <a
            href="tel:786-547-0213"
            className="animated zoomIn v-btn v-btn--flat v-btn--icon theme--dark primary--text"
          >
            <div className="v-btn__content">
              <i className="v-icon material-icons theme--dark pi pi-phone"></i>
            </div>
          </a>
          <button
            type="button"
            className="animated zoomIn v-btn v-btn--flat v-btn--icon theme--dark primary--text"
            onClick={closeUser}
          >
            <div className="v-btn__content">
              <i
                aria-hidden="true"
                className="v-icon material-icons theme--dark pi pi-sign-out"
              ></i>
            </div>
          </button>
        </div>
      </nav>
      <div className="text-center">
      {
        open &&
        <CloseModal open={open} setOpen={setOpen}/>

      }

      </div>

    </Fragment>
  );
};

export default Menu;
