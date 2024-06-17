interface ParamsType {
        "method": "get" | "post" | "put" | "delete",
        "query": {
            "q": string
        },
        "request_body": Object<any>,
        "parameters": string
}

interface Options{
    label: string,
    value:string
}
export interface FormElementTypes {
    "name": string,
    "label": string,
    "type": string,
    "placeholder": string,
    "key": string, //clerification pending
    "api": string,
    "params": ParamsType,
    "display_value": string,
    "callback": boolean,
    "validators": {
        "required": boolean
    },
    "options": Array<Options>,
    "visible": boolean,
}