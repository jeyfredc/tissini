import React, { Fragment, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";
import ContentBoutique from '../Boutique/ContentBoutique';
import FooterBoutique from '../Boutique/FooterBoutique';
import Menu from '../Boutique/Menu';
import { getClothes } from "../reducers/actions/loginUser";
const Categories = () => {

  const dispatch = useDispatch();
  const { authReducer } = useSelector((state) => state);
  console.log(authReducer);

  useEffect(() => {
    if(authReducer.loginUser !== ''){
      dispatch(getClothes(authReducer.loginUser))
    }
  }, [])
  
  return (
    <Fragment>
    <Menu />
    <ContentBoutique />
    <FooterBoutique/>
    </Fragment>
  )
}

export default Categories