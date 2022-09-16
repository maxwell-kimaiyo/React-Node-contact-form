import axios from "axios";
import {  DATA_CONTACT_FAIL, DATA_CONTACT_SUCCESS, DATA_CONTACT_REQUEST } from "../constants/constant";

const contactAction = (fname,lname,email,subject, msg) => async (dispatch) => {
    dispatch({ type: DATA_CONTACT_REQUEST, payload: { fname,lname,email,subject, msg } });
    try {
      const { data } = await axios.post("/api/message/contact", { fname,lname,email,subject, msg});
      dispatch({ type: DATA_CONTACT_SUCCESS, payload: data });
    } catch (error) {
      if (error.response) {
        dispatch({ type: DATA_CONTACT_FAIL, payload: error.response.data.message });
      }else{
        dispatch({ type: DATA_CONTACT_FAIL, payload: error.message });
      }
      
    }
  }
export {contactAction}
