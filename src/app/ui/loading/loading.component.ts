import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {LoadingIndicatorService} from '../../services/loading-indicator.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  public loading = false;
  private loadSub$: Subscription;

  constructor(private loadingIndicatorService: LoadingIndicatorService) {
    this.loadSub$ = loadingIndicatorService.onLoadingChanged
      .subscribe(isLoading => {
        setTimeout(() => this.loading = isLoading);
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.loadSub$.unsubscribe();
  }
}
