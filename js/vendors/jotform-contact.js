JotForm.init(function(){
	if (window.JotForm && JotForm.accessible) $('input_3').setAttribute('tabindex',0);
	if (window.JotForm && JotForm.accessible) $('input_10').setAttribute('tabindex',0);
	if (window.JotForm && JotForm.accessible) $('input_4').setAttribute('tabindex',0);
	if (window.JotForm && JotForm.accessible) $('input_11').setAttribute('tabindex',0);
	if (window.JotForm && JotForm.accessible) $('input_6').setAttribute('tabindex',0);
	if (window.JotForm && JotForm.accessible) $('input_7').setAttribute('tabindex',0);
	JotForm.alterTexts(undefined);
	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";
	/*INIT-END*/
});
	
JotForm.prepareCalculationsOnTheFly([null,null,
	{"name":"submit2","qid":"2","text":"Send message","type":"control_button"},
	{"description":"","name":"firstName","qid":"3","subLabel":"","text":"First name","type":"control_textbox"},
	{"description":"","name":"companyName","qid":"4","subLabel":"","text":"Company name","type":"control_textbox"},
	{"description":"","name":"emailAddress","qid":"5","subLabel":"","text":"Email address","type":"control_email"},
	{"description":"","name":"telephoneNumber","qid":"6","subLabel":"","text":"Telephone number","type":"control_textbox"},
	{"description":"","name":"messagequery","qid":"7","subLabel":"","text":"Message\u002Fquery","type":"control_textarea"},
	{"description":"","name":"pleaseVerify","qid":"8","text":"Please verify that you are human","type":"control_captcha"},
	{"description":"","name":"newsletter","qid":"9","text":"Newsletter","type":"control_checkbox"},
	{"description":"","name":"lastName","qid":"10","subLabel":"","text":"Last name","type":"control_textbox"},
	{"description":"","name":"websiteAddress","qid":"11","subLabel":"","text":"Website address","type":"control_textbox"}
]);

setTimeout(function() {
	JotForm.paymentExtrasOnTheFly([null,null,
		{"name":"submit2","qid":"2","text":"Send message","type":"control_button"},
		{"description":"","name":"firstName","qid":"3","subLabel":"","text":"First name","type":"control_textbox"},
		{"description":"","name":"companyName","qid":"4","subLabel":"","text":"Company name","type":"control_textbox"},
		{"description":"","name":"emailAddress","qid":"5","subLabel":"","text":"Email address","type":"control_email"},
		{"description":"","name":"telephoneNumber","qid":"6","subLabel":"","text":"Telephone number","type":"control_textbox"},
		{"description":"","name":"messagequery","qid":"7","subLabel":"","text":"Message\u002Fquery","type":"control_textarea"},
		{"description":"","name":"pleaseVerify","qid":"8","text":"Please verify that you are human","type":"control_captcha"},
		{"description":"","name":"newsletter","qid":"9","text":"Newsletter","type":"control_checkbox"},
		{"description":"","name":"lastName","qid":"10","subLabel":"","text":"Last name","type":"control_textbox"},
		{"description":"","name":"websiteAddress","qid":"11","subLabel":"","text":"Website address","type":"control_textbox"}
	]);
}, 20);
