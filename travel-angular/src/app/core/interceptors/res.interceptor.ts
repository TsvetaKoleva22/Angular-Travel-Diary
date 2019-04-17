import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ResInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    public toastr: ToastrService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if(event instanceof HttpResponse && (request.url.endsWith('login') || request.url.endsWith('signup')
          || request.url.includes('create') ||  request.url.includes('delete') || request.url.includes('edit') 
          || request.url.includes('like'))){
          // console.log(event);
          if (event.body.success && request.url.endsWith('login')){
            this.authService.saveUserInfo(event.body);
            this.toastr.success(event.body.message, 'Success');
          } else if (event.body.success && request.url.endsWith('signup')){
            let mes = event.body.message + ' ' + 'Now please log in.'
            this.toastr.success(mes, 'Success');
          } else if (event.body.success){
            this.toastr.success(event.body.message, 'Success');
          }else {
            this.toastr.error(event.body.message, 'Error');
          }
        }
    }),
      catchError((err: HttpErrorResponse) => {
        this.toastr.error(err.error.message, 'Error');
        this.router.navigate(['/']);

        throw err;
      })
    )
  }
}
