const users = [{ name: 'Nextjs', age: 20, msg: 'Hi' }]

const Query = {
    users(parent: any, args: any, context: any) {
        return users
    }
}

const Mutation = {
    addUser(parent: any, args: any, context: any) {
        const newUsers = [...users, args.user]
        return newUsers
    }
}

export default { Query, Mutation }
