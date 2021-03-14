import { networkActions } from '../network/index'
import fetch from 'isomorphic-fetch'
import { ActionTypes } from '../constants'
import { Action } from '../../store'

export const initialUserState: any = null

export const userActions = {
    loadMe: () => {
        const { start, success, failure } = networkActions(ActionTypes.LOAD_ME, {
            start: 'fetchMeStart',
            success: 'fetchMeSuccess',
            failure: 'fetchMeFailure'
        })

        return (dispatch: any) => {
            dispatch(start())
            setTimeout(() => {
                fetch('http://localhost:3000/api/v1/me')
                    .then((response: any) => response.json())
                    .then((data: any) => {
                        dispatch({ type: ActionTypes.LOAD_ME, payload: { data } })
                        dispatch(success())
                    })
                    .catch((error: any) => dispatch(failure(error)))
            }, 500)
        }
    }
}

export const userReducer = (state: any, { type, payload }: Action) => {
    switch (type) {
        case ActionTypes.LOAD_ME: {
            return payload.data
        }
    }
}
