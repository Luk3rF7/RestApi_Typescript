export interface HttpResponse<T> {
  statusCode:number,
  body: T | string,
}
export interface HttpRequest<B> {
  params?: any;
  header?: any;
  body?: B;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  SERVER_ERROR = 500,
}

export interface Icontroller {
  handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}