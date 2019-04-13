import {
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService,
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    if(err.status === 401){ //unauthorized
                        this.toastr.error(err.error.description, 'Error!');
                        this.router.navigate(['/login'])
                    }
                    return throwError(err);
                })
            )
    }

}
