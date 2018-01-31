import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	private todo : FormGroup;




  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
  	let array1 =[1, 2, 3, 4, 5];
	let array2 =[6, 7, 8, 9, 10];
	let bothTogether = [array1,array2];
	console.log(bothTogether);


	}
}