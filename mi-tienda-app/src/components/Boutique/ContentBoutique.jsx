import React, { useEffect, useState } from "react";
import "../../styles/Boutique/ContentBoutique.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {  url } from "../../config/variables";
import {  useSelector } from "react-redux";

const ContentBoutique = () => {

  const { authReducer } = useSelector((state) => state);
  const [image, setImage] = useState([])
  const [clothes, setClothes] = useState([])

  useEffect(() => {
    if(authReducer.dataImage.length !== 0){
      setImage(authReducer.dataImage[0].images)
      setClothes(authReducer.dataImage[6].images)
      
    }
  }, [authReducer.dataImage])
  
  console.log(image);
  return (
    <div className="layout justify-center">
      <div className="flex xs12 sm8 md5 lg4">
        <div className="v-card v-card--flat v-sheet theme--light grey lighten-5 velmld-parent">
          <div className="container pa-1 mt-1">
            <div className="v-responsive v-image mb-2 imageBoutique">
              <div
                className="v-responsive__sizer "
                
              ></div>
              <div className="v-image__image v-image__image--cover imageBoutique" style={{backgroundImage:'url(https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg)'}}>              </div>
              <div className="v-responsive__content" >
                <button
                  type="button"
                  className="see-more-promo--button v-btn v-btn--right v-btn--round v-btn--small v-btn--top theme--dark" 
                >
                  <div className="v-btn__content">
                    <span className="font-weight-bold">Ver más</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="layout row wrap">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
              >
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {image.map((data,index)=>{
                    return(
                      <SwiperSlide key={data}>
                      <div className="swiper-slide" styled={{ textAlign: '-webkit-center' }}>
                        <div className="elevation-2 slider v-card v-sheet theme--light" styled={{ width: '76%' }}>
                          <div
                            className="v-responsive v-image"
                            cover=""
                          //   styled={{ width: "100%" }}
                          >
                            <div
                              className="v-responsive__sizer"
                              style={{ paddingBottom: "44.9756%" }}
                            ></div>
                            <div
                              className="v-image__image v-image__image--cover imageBoutique" style={{backgroundImage:`url(${url}${data.url})`}}
                            ></div>
                           { console.log(data)}
                            <div className="v-responsive__content"></div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    )
                  })}

                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="v-card v-card--flat v-sheet theme--light grey lighten-5 velmld-parent">
          <div className="container pa-1 mt-1">
            <div className="v-responsive v-image mb-2 imageBoutique">
              <div
                className="v-responsive__sizer "
                styled={{ paddingBottom: "34.1549%" }}
              ></div>
              <div className="v-image__image v-image__image--cover imageBoutique" style={{backgroundImage:`url(${url}/img/categories/multivendor/new-products.png)`}}>              </div>
            </div>
          </div>
          <div className="layout row wrap">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
                styled={{
                  transitionDuration: "0ms",
                  transform: "translate3d(-2440px, 0px, 0px)",
                }}
              >
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {clothes.map((data,index)=>{
                    return(
                      <SwiperSlide key={data}>
                      <div className="swiper-slide" styled={{ textAlign: '-webkit-center' }}>
                        <div className="elevation-2 slider v-card v-sheet theme--light" styled={{ width: '76%' }}>
                          <div
                            className="v-responsive v-image"
                            cover=""
                          //   styled={{ width: "100%" }}
                          >
                            <div
                              className="v-responsive__sizer"
                              style={{ paddingBottom: "44.9756%" }}
                            ></div>
                            <div
                              className="v-image__image v-image__image--cover imageBoutique" style={{backgroundImage:`url(${url}${data.url})`}}
                            ></div>
                           { console.log(data)}
                            <div className="v-responsive__content"></div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    )
                  })}

                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentBoutique;
