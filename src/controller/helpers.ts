import { HttpResponse,HttpStatusCode } from './interface_protocol';

export const ok = <T>(body:any):HttpResponse<T> => ({
  statusCode: HttpStatusCode.OK,
  body,
})

export const created =<T>(body:any):HttpResponse<T> => ({
  statusCode: HttpStatusCode.CREATED,
  body
})


export const badRequest = (message:string):HttpResponse<string> => {
  return {
    statusCode: HttpStatusCode.BAD_REQUEST,
    body:message,
  }
}

export const serverError = (): HttpResponse<string> =>{
  return {
    statusCode:HttpStatusCode.SERVER_ERROR,
    body: "something went wrong"
  };
};