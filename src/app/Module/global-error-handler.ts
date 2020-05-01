import { ErrorHandler } from "@angular/core";
export class GlobalErrorHandler extends ErrorHandler{
    handleError(error : any)
    {
        //alert("sssssssss");
        window.alert("========>"+error.message+error.stack);
        //console.log("========>"+error.message+error.stack);        
    }
}