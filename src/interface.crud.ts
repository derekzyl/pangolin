import { RequestOptions, ServerResponse } from "http";
import { Model, PopulateOptions } from "mongoose";

export interface CrudModelI {
  Model: Model<any>;
  exempt: string;
}

export interface PopulateFieldI {
  model?: string;
  fields?: string;
  second_layer_populate?: PopulateOptions | string;
}
export interface CustomMessageI<V> {
  message: string;
  success_status: boolean;
  data: V;
  stack?: any;
  error?: any;
  doc_length?: number;
}

export type NextFunction = (err?: any) => void;
export type Request = RequestOptions;
export type Response = ServerResponse;
