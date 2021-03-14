export default (dispatch: any) => (action: any) => {
    if (typeof action === 'function') {
        return action(dispatch)
    } else {
        return dispatch(action)
    }
}
