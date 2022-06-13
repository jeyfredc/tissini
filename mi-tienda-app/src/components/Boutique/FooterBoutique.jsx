import React from "react";
import "../../styles/Boutique/FooterBoutique.scss";

const FooterBoutique = () => {
  return (
    <div>
      <button
        type="button"
        className="v-btn v-btn--block v-btn--bottom v-btn--fixed v-btn--large theme--light primary buttonCatalogo" 
      >
        <div className="v-btn__content_catalogo">
          <span class="font-weight-bold">Ver Catálogo Digital !   {"  "}</span>
          <i aria-hidden="true" class="v-icon ml-2 material-icons theme--light">
            menu_book
          </i>
        </div>
      </button>
      <div
        className="v-item-group v-bottom-nav theme--light v-bottom-nav--fixed v-bottom-nav--active"
        /* style="height: 56px;" */
      >
        <a
          href="/categorias"
          aria-current="page"
          className="v-btn--active v-btn v-btn--active v-btn--flat v-btn--router theme--light primary--text"
          value="categorias"
        >
          <div className="v-btn__content">
            <span className="btn-text">Categorías</span>
            <i className="mdi mdi-24px mdi-home-outline pi pi-home"></i>
          </div>
        </a>
        <a
          value="catalogo"
          className="v-btn v-btn--flat theme--light primary--text"
        >
          <div className="v-btn__content">
            <span className="btn-text">Catálogo</span>
            <i className="mdi mdi-24px mdi-badge-account-outline pi pi-user"></i>
          </div>
        </a>

        <a
          href="/carrito"
          className="v-btn v-btn--flat v-btn--router theme--light primary--text"
          value="carrito"
        >
          <div className="v-btn__content">
            <span className="btn-text">Carrito</span>
            <span
              className="v-badge v-badge--overlap"
              /* right="" */ style={{ zIndex: "10000" }}
            ></span>
            <i className="mdi mdi-24px mdi-cart-outline pi pi-shopping-cart"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FooterBoutique;
