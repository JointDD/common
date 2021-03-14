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

export type Daily = {
  __typename?: 'Daily';
  metaData: MetaData;
  timeSeries: Array<TimeSeries>;
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

export type Intraday = {
  __typename?: 'Intraday';
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

export type Overview = {
  __typename?: 'Overview';
  symbol: Scalars['String'];
  assetType: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  exchange: Scalars['String'];
  currency: Scalars['String'];
  country: Scalars['String'];
  sector: Scalars['String'];
  industry: Scalars['String'];
  address: Scalars['String'];
  fullTimeEmployees: Scalars['String'];
  fiscalYearEnd: Scalars['String'];
  latestQuarter: Scalars['String'];
  marketCapitalization: Scalars['String'];
  eBITDA: Scalars['String'];
  pERatio: Scalars['String'];
  pEGRatio: Scalars['String'];
  bookValue: Scalars['String'];
  dividendPerShare: Scalars['String'];
  dividendYield: Scalars['String'];
  ePS: Scalars['String'];
  revenuePerShareTTM: Scalars['String'];
  profitMargin: Scalars['String'];
  operatingMarginTTM: Scalars['String'];
  returnOnAssetsTTM: Scalars['String'];
  returnOnEquityTTM: Scalars['String'];
  revenueTTM: Scalars['String'];
  grossProfitTTM: Scalars['String'];
  dilutedEPSTTM: Scalars['String'];
  quarterlyEarningsGrowthYOY: Scalars['String'];
  quarterlyRevenueGrowthYOY: Scalars['String'];
  analystTargetPrice: Scalars['String'];
  trailingPE: Scalars['String'];
  forwardPE: Scalars['String'];
  priceToSalesRatioTTM: Scalars['String'];
  priceToBookRatio: Scalars['String'];
  eVToRevenue: Scalars['String'];
  eVToEBITDA: Scalars['String'];
  beta: Scalars['String'];
  a52WeekHigh: Scalars['String'];
  a52WeekLow: Scalars['String'];
  a50DayMovingAverage: Scalars['String'];
  a200DayMovingAverage: Scalars['String'];
  sharesOutstanding: Scalars['String'];
  sharesFloat: Scalars['String'];
  sharesShort: Scalars['String'];
  sharesShortPriorMonth: Scalars['String'];
  shortRatio: Scalars['String'];
  shortPercentOutstanding: Scalars['String'];
  shortPercentFloat: Scalars['String'];
  percentInsiders: Scalars['String'];
  percentInstitutions: Scalars['String'];
  forwardAnnualDividendRate: Scalars['String'];
  forwardAnnualDividendYield: Scalars['String'];
  payoutRatio: Scalars['String'];
  dividendDate: Scalars['String'];
  exDividendDate: Scalars['String'];
  lastSplitFactor: Scalars['String'];
  lastSplitDate: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  globalQuote: GlobalQuote;
  overview: Overview;
  intraday: Intraday;
  daily: Daily;
};


export type QueryGlobalQuoteArgs = {
  symbol: Scalars['String'];
};


export type QueryOverviewArgs = {
  symbol: Scalars['String'];
};


export type QueryIntradayArgs = {
  symbol: Scalars['String'];
  interval: Scalars['Int'];
};


export type QueryDailyArgs = {
  symbol: Scalars['String'];
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
