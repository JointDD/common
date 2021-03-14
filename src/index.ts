export * from './store'
export * from './state'
export * from './gql'
export * from './combine_reducers'
export * from './applyAsyncMiddleware'

export const isServer = typeof window === 'undefined'

const getFirstLetter = (text: string) => (text ? text[0] : '')

export const getInitials = (firstName: string, lastName: string) => getFirstLetter(firstName) + getFirstLetter(lastName)
