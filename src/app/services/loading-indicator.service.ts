import { EventEmitter, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  public onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  private requests: HttpRequest<any>[] = [];

  public onStarted(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
  }

  public onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }

  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {

  constructor(private loadingIndicatorService: LoadingIndicatorService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.onStarted(req);

    return next
      .handle(req)
      .pipe(
        finalize(
          () => this.loadingIndicatorService.onFinished(req)
        )
      );
  }
}
