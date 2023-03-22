export const AuthReducer = (state, action) => {
  const {type, payload: {
      user,
  }} = action

  switch (type) {
      case '###': {
          return {
              ...state,
              user,
          }
      }
      default: return state
  }
}