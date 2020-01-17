import { Component, OnInit } from '@angular/core';
import * as productActions from '../../state/actions/product.actions';
import * as fromReducer from '../../state/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-best-seller-product-container',
  templateUrl: './best-seller-product-container.component.html',
  styleUrls: ['./best-seller-product-container.component.scss']
})
export class BestSellerProductContainerComponent implements OnInit {

  
  constructor(private store: Store<fromReducer.ProductState>) { 

  }

  ngOnInit() {
  }

}
