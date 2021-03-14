import applyAsyncMiddleware from '../applyAsyncMiddleware'
import { ActionTypes } from '../state/constants'

// As nextJs.getInitialProps is a static method, useStore hook cannot be used in it
// On the other hand, the application state needs to be consistent,
// regardless of where and when the data was fetched.
// This class helps with providing a consistent initialState to the StateProvider,
// regardless of where the data is fetched.

export interface Action {
    type: ActionTypes
    [payload: string]: any
}

export default class Store {
    public state: any
    public reducer: any
    observers: any[] = []
    constructor(initialState: any, reducer: any) {
        this.state = initialState
        this.reducer = reducer
    }

    dispatch = applyAsyncMiddleware((action: any) => {
        this.state = this.reducer(this.state, action)
        this.observers.forEach((o) => o(this.state))
    })

    subscribe = (handler: any) => {
        const unsub = new Array(...this.observers)
        this.observers.push(handler)
        return () => {
            this.observers = unsub
        }
    }

    getState = () => this.state

    waitFor = async (criteria: (arg0: any) => any, timeout = 1000) =>
        await new Promise<void>((resolve, reject) => {
            const handleChange = () => {
                if (!criteria || criteria(this.getState())) {
                    resolver()
                }
            }

            const resolver = () => {
                clearTimeout(id)
                unsubscribe()
                resolve()
            }

            const id = setTimeout(resolver, timeout)

            const unsubscribe = this.subscribe(handleChange)
        })
}
