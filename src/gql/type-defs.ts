import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type User = {
  __typename?: 'User';
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  msg?: Maybe<Scalars['String']>;
};

export type UserInput = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  msg?: Maybe<Scalars['String']>;
};

export type GlobalQuote = {
  __typename?: 'GlobalQuote';
  symbol: Scalars['String'];
  open: Scalars['String'];
  high: Scalars['String'];
  low: Scalars['String'];
  price: Scalars['String'];
  volume: Scalars['String'];
  latestTradingDay: Scalars['String'];
  previousClose: Scalars['String'];
  change: Scalars['String'];
  changePercent: Scalars['String'];
};

export type Overview = {
  __typename?: 'Overview';
  a200DayMovingAverage: Scalars['String'];
  a50DayMovingAverage: Scalars['String'];
  a52WeekHigh: Scalars['String'];
  a52WeekLow: Scalars['String'];
  address: Scalars['String'];
  analystTargetPrice: Scalars['String'];
  assetType: Scalars['String'];
  beta: Scalars['String'];
  bookValue: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  description: Scalars['String'];
  dilutedEPSTTM: Scalars['String'];
  dividendDate: Scalars['String'];
  dividendPerShare: Scalars['String'];
  dividendYield: Scalars['String'];
  eBITDA: Scalars['String'];
  ePS: Scalars['String'];
  eVToEBITDA: Scalars['String'];
  eVToRevenue: Scalars['String'];
  exchange: Scalars['String'];
  exDividendDate: Scalars['String'];
  fiscalYearEnd: Scalars['String'];
  forwardAnnualDividendRate: Scalars['String'];
  forwardAnnualDividendYield: Scalars['String'];
  forwardPE: Scalars['String'];
  fullTimeEmployees: Scalars['String'];
  grossProfitTTM: Scalars['String'];
  industry: Scalars['String'];
  lastSplitDate: Scalars['String'];
  lastSplitFactor: Scalars['String'];
  latestQuarter: Scalars['String'];
  marketCapitalization: Scalars['String'];
  name: Scalars['String'];
  operatingMarginTTM: Scalars['String'];
  payoutRatio: Scalars['String'];
  pEGRatio: Scalars['String'];
  pERatio: Scalars['String'];
  percentInsiders: Scalars['String'];
  percentInstitutions: Scalars['String'];
  priceToBookRatio: Scalars['String'];
  priceToSalesRatioTTM: Scalars['String'];
  profitMargin: Scalars['String'];
  quarterlyEarningsGrowthYOY: Scalars['String'];
  quarterlyRevenueGrowthYOY: Scalars['String'];
  returnOnAssetsTTM: Scalars['String'];
  returnOnEquityTTM: Scalars['String'];
  revenuePerShareTTM: Scalars['String'];
  revenueTTM: Scalars['String'];
  sector: Scalars['String'];
  sharesFloat: Scalars['String'];
  sharesOutstanding: Scalars['String'];
  sharesShort: Scalars['String'];
  sharesShortPriorMonth: Scalars['String'];
  shortPercentFloat: Scalars['String'];
  shortPercentOutstanding: Scalars['String'];
  shortRatio: Scalars['String'];
  symbol: Scalars['String'];
  trailingPE: Scalars['String'];
};

export type Intraday = {
  __typename?: 'Intraday';
  metaData: MetaData;
  timeSeries: Array<TimeSeries>;
};

export type Daily = {
  __typename?: 'Daily';
  metaData: MetaData;
  timeSeries: Array<TimeSeries>;
};

export type MetaData = {
  __typename?: 'MetaData';
  information: Scalars['String'];
  symbol: Scalars['String'];
  lastRefreshed: Scalars['String'];
  interval: Scalars['String'];
  outputSize: Scalars['String'];
  timezone: Scalars['String'];
};

export type TimeSeries = {
  __typename?: 'TimeSeries';
  time: Scalars['String'];
  open: Scalars['String'];
  high: Scalars['String'];
  low: Scalars['String'];
  close: Scalars['String'];
  volume: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  globalQuote: GlobalQuote;
  overview: Overview;
  intraday: Intraday;
  daily: Daily;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: Array<Maybe<User>>;
};


export type MutationAddUserArgs = {
  user: UserInput;
};
