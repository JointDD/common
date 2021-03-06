import { gql, makeExecutableSchema } from 'apollo-server-micro'
import resolvers from './resolvers'

export const typeDefs = gql`
    type User {
        name: String
        age: Int
        msg: String
    }

    input UserInput {
        name: String
        age: Int
        msg: String
    }

    type GlobalQuote {
        symbol: String!
        open: String!
        high: String!
        low: String!
        price: String!
        volume: String!
        latestTradingDay: String!
        previousClose: String!
        change: String!
        changePercent: String!
    }

    type Overview {
        a200DayMovingAverage: String!
        a50DayMovingAverage: String!
        a52WeekHigh: String!
        a52WeekLow: String!
        address: String!
        analystTargetPrice: String!
        assetType: String!
        beta: String!
        bookValue: String!
        country: String!
        currency: String!
        description: String!
        dilutedEPSTTM: String!
        dividendDate: String!
        dividendPerShare: String!
        dividendYield: String!
        eBITDA: String!
        ePS: String!
        eVToEBITDA: String!
        eVToRevenue: String!
        exchange: String!
        exDividendDate: String!
        fiscalYearEnd: String!
        forwardAnnualDividendRate: String!
        forwardAnnualDividendYield: String!
        forwardPE: String!
        fullTimeEmployees: String!
        grossProfitTTM: String!
        industry: String!
        lastSplitDate: String!
        lastSplitFactor: String!
        latestQuarter: String!
        marketCapitalization: String!
        name: String!
        operatingMarginTTM: String!
        payoutRatio: String!
        pEGRatio: String!
        pERatio: String!
        percentInsiders: String!
        percentInstitutions: String!
        priceToBookRatio: String!
        priceToSalesRatioTTM: String!
        profitMargin: String!
        quarterlyEarningsGrowthYOY: String!
        quarterlyRevenueGrowthYOY: String!
        returnOnAssetsTTM: String!
        returnOnEquityTTM: String!
        revenuePerShareTTM: String!
        revenueTTM: String!
        sector: String!
        sharesFloat: String!
        sharesOutstanding: String!
        sharesShort: String!
        sharesShortPriorMonth: String!
        shortPercentFloat: String!
        shortPercentOutstanding: String!
        shortRatio: String!
        symbol: String!
        trailingPE: String!
    }

    type Intraday {
        metaData: MetaData!
        timeSeries: [TimeSeries!]!
    }

    type Daily {
        metaData: MetaData!
        timeSeries: [TimeSeries!]!
    }

    type MetaData {
        information: String!
        symbol: String!
        lastRefreshed: String!
        interval: String!
        outputSize: String!
        timezone: String!
    }

    type TimeSeries {
        time: String! # As the time is the key from AV api, we'll change it to time being the field in timeseries struct
        open: String!
        high: String!
        low: String!
        close: String!
        volume: String!
    }

    type Query {
        users: [User!]!
        globalQuote: GlobalQuote!
        overview: Overview!
        intraday: Intraday!
        daily: Daily!
    }

    type Mutation {
        addUser(user: UserInput!): [User]!
    }
`

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
