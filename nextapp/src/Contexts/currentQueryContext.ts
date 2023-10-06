import { ApolloQueryResult, LazyQueryExecFunction, MutationFunction, OperationVariables, ApolloError, LazyQueryHookExecOptions} from "@apollo/client";
import { MutationBaseOptions } from "@apollo/client/core/watchQueryOptions";
import React from "react";

export type QueryObjType = {
  query: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>,
  variables?: Partial<OperationVariables>,
  error: ApolloError
}
export type MutationObjType = {
  query: MutationFunction,
  option?: MutationBaseOptions,
  error: ApolloError,
}
export type LazyQueryObjType = {
  query: LazyQueryExecFunction<any, any>,
  option?: LazyQueryHookExecOptions,
  error: ApolloError,
  refetch: (variables?: Partial<OperationVariables>) => Promise<ApolloQueryResult<any>>,
}

export type CurrentQueryType = QueryObjType | MutationObjType | LazyQueryObjType;

export type CurrentQueryContextType = {
  currentQuery: LazyQueryObjType,
  setCurrentQuery: React.Dispatch<React.SetStateAction<LazyQueryObjType>>,
}

export const defaultCurrentQueryContext: CurrentQueryContextType = {
  currentQuery: {} as LazyQueryObjType,
  setCurrentQuery: () => {},
}

export const CurrentQueryContext = React.createContext<CurrentQueryContextType>({} as CurrentQueryContextType);