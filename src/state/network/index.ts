import { ActionTypes } from '../constants'

export const initialNetworkState = {}

export const networkActions = (
    name: string,
    { start, success, failure }: { start?: string; success?: string; failure?: string } = {}
) => ({
    start: () => ({
        type: ActionTypes.CALL_STARTED,
        payload: { name, message: start }
    }),
    success: () => ({
        type: ActionTypes.CALL_SUCCEEDED,
        payload: { name, message: success }
    }),
    failure: (error: any) => ({
        type: ActionTypes.CALL_FAILED,
        payload: { name, message: failure, error }
    })
})

export const networkReducer = (state: any, { type, payload }: any) => {
    switch (type) {
        case ActionTypes.CALL_STARTED: {
            return {
                ...state,
                [payload.name]: {
                    status: ActionTypes.CALL_STARTED,
                    message: payload.message,
                    error: null
                }
            }
        }
        case ActionTypes.CALL_SUCCEEDED: {
            return {
                ...state,
                [payload.name]: {
                    status: ActionTypes.CALL_SUCCEEDED,
                    message: payload.message,
                    error: null
                }
            }
        }
        case ActionTypes.CALL_FAILED: {
            return {
                ...state,
                [payload.name]: {
                    status: ActionTypes.CALL_FAILED,
                    message: payload.message,
                    error: payload.error
                }
            }
        }
    }
}
