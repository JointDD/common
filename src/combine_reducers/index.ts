export default (reducers: any) => (state: any, action: any) => {
    return Object.keys(reducers).reduce((accumulator, currentValue) => {
        const updated = reducers[currentValue](state[currentValue], action)

        if (updated) {
            return { ...accumulator, [currentValue]: updated }
        }

        return accumulator
    }, state)
}
