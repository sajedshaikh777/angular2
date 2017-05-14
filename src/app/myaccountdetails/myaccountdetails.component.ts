import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-myaccountdetails',
  templateUrl: './myaccountdetails.component.html',
  styleUrls: ['./myaccountdetails.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyaccountdetailsComponent implements OnInit {

@Input('data') meals: string[] = [];
    page: number = 1;  


	selectedList : Number;
	setClickedList : Function;

	constructor() { 
        this.setClickedList = function(index){
            this.selectedList = index;
        }
	}

	ngOnInit() {
	}


	myaccountlistPrint(){
		alert("You have cliked on print button.");
	}

	myaccounts = [
	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"},	
		{"accountnumber": "234123908342", "nickname": "My Savings Account", "totalbalance": "1234000", "currencycode": "INR"},
		{"accountnumber": "234123909343", "nickname": "My Current Account", "totalbalance": "12698734000", "currencycode": "INR"},
		{"accountnumber": "234123910344", "nickname": "My Joint Account", "totalbalance": "54000", "currencycode": "INR"},
		{"accountnumber": "234123911345", "nickname": "My Savings Account", "totalbalance": "18756", "currencycode": "INR"},
		{"accountnumber": "234123912346", "nickname": "My Current Account", "totalbalance": "1256", "currencycode": "INR"},
		{"accountnumber": "234123913347", "nickname": "My Joint Account", "totalbalance": "8754869", "currencycode": "INR"},
		{"accountnumber": "234123914348", "nickname": "My Current Account", "totalbalance": "8955689", "currencycode": "INR"}
		
	]

}
