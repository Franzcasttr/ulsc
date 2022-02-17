const reducer = (state, action) => {
  if (action.type === 'GET_CONTACT_OPEN') {
    return { ...state, iscontactOpen: true };
  }
  if (action.type === 'GET_CONTACT_CLOSE') {
    return { ...state, iscontactOpen: false };
  }
  throw new Error(`no matching ${action.type} action type`);
};

export default reducer;
