import { Component, OnInit } from '@angular/core';
import { Goods } from '../../../model/goods';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  gstPrice = 18;
  newGoods:Goods[] = [];
  eachGoods:Goods = new Goods();
  subTotal = 0; 
  allGst = 0;
  GrandTotal = 0;
  constructor() { }

  ngOnInit() {
  }
  
  getQuantity(eachitem:Goods){
    console.log(eachitem);
    if(eachitem.itemName !== undefined 
      && eachitem.itemQuantity !== undefined
      && eachitem.itemPrice !== undefined)
    this.calculateGstPrice(eachitem);
  }
  calculateGstPrice(eachitem:Goods){
    this.eachGoods.total = eachitem.itemQuantity*eachitem.itemPrice;
    this.eachGoods.gst = eachitem.total/100*this.gstPrice;
    this.eachGoods.total = eachitem.total+eachitem.gst;
  }

  addItem(){
    this.subTotal = 0;
    this.allGst = 0;
    this.GrandTotal = 0;
    this.newGoods.push(this.eachGoods);
    this.eachGoods = new Goods();
     this.newGoods.forEach(data => {
      this.subTotal =this.subTotal + data.itemQuantity*data.itemPrice
     })
     this.newGoods.forEach(data => {
      this.allGst =  this.allGst +data.itemPrice*data.itemQuantity/100*this.gstPrice;
     })
     this.newGoods.forEach(data => {
      this.GrandTotal = this.GrandTotal + data.total;
     })
  }
}
