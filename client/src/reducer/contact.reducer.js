const { DATA_CONTACT_REQUEST, DATA_CONTACT_SUCCESS, DATA_CONTACT_FAIL } = require("../constants/constant");

  function contactReducer(state={contactData:{}},action){

    switch (action.type) {
      case  DATA_CONTACT_REQUEST:
        return { loading: true};
      case  DATA_CONTACT_SUCCESS:
        return { loading: false, success: true,message:action.payload.message,contactData: action.payload };
      case  DATA_CONTACT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state;
    }
  }
 

  export default contactReducer