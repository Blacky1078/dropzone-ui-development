import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-product-tile-view',
  templateUrl: './product-tile-view.component.html',
  styleUrl: './product-tile-view.component.css',
})
export class ProductTileViewComponent {
  @Input() product_rating!: string;
  @Input() product_image_source!: string;
  @Input() product_title!: string;
  @Input() product_price!: string;
  @Input() product_description!: string;
  @Input() product__brand!: string;
  @Input() product__category!: string;
  @Input() product__list__name!: string;
}
