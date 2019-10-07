import { Component, OnInit } from '@angular/core';
import { Goods } from '../../../model/goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  gstPrice = 18;
  price
  total
  quantity
  goods:Goods[] = new Array();
  eachGoods:Goods = new Goods();
  constructor() { }

  ngOnInit() {
  }
  
  getItemPrice(price){
    this.price = price;
    this.calculateGstPrice(this.quantity,this.gstPrice,this.price)
  }

  getQuantity(quantity){
    this.quantity = quantity;
    this.calculateGstPrice(this.quantity,this.gstPrice,this.price)
  }

  calculateGstPrice(quantity,gstPrice,price){
    let total = 0;
    total = quantity*price;
    this.eachGoods.gst = total/100*gstPrice;
    this.calculateTotalPrice(total,this.eachGoods.gst);
  }
  calculateTotalPrice(total,gst){
    this.eachGoods.total = total+gst;
    
  }
  addMoreItem(){
    
  }
}
