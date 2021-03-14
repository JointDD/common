import { GlobalQuote, Overview } from './type-defs'
import data from '../__mock__/data.json'

const users = [{ name: 'Nextjs', age: 20, msg: 'Hi' }]

const Query = {
    users(parent: any, args: any, context: any) {
        return users
    },
    globalQuote(parent: any, args: any, context: any): GlobalQuote {
        return data.globalQuote
    },
    overview(parent: any, args: any, context: any): Overview {
        return data.overview
    }
}

const Mutation = {
    addUser(parent: any, args: any, context: any) {
        console.log(args.user)
        const newUsers = [...users, args.user]
        return newUsers
    }
}

export default { Query, Mutation }
