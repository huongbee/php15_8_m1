

function change(){
	var box = document.getElementById('box')
	box.style.width = "100px"
	box.style.height = "100px"
	box.style.backgroundColor = "red"
	box.style.lineHeight = "90px"
	box.innerHTML = '5+6'
	window.alert('Cám ơn bạn đã chọn tui!')
}


function demo(){
	var box = document.getElementById('box')
	var a = 10
	var b = 20
	box.innerHTML = a+b
}


function tinhtong(){
	var a = document.getElementById('so_a').value 
	var b = document.getElementById('so_b').value
	var pt = document.getElementById('pheptinh').value.trim()
	console.log(typeof(a))

	if(a == '' ){
		alert('Vui lòng nhập số a')

		document.getElementById('so_a').focus()
		return 0
	}
	if(b == '' ){
		alert('Vui lòng nhập b')

		document.getElementById('so_b').focus()
		return 0
	}
	if(pt!="+" && pt!="-" && pt!="x" && pt!="*" && pt!="/" || pt == ''  ){
		console.log(pt)
		alert('Vui lòng nhập pt')

		document.getElementById('pheptinh').focus()
		return 0
	}
	


	a = parseInt(a);
	b = parseInt(b);
	console.log(typeof(a))

	var kq = '';

	if(pt == "+"){
		kq = a + b
	}
	else if(pt == "-"){
		kq = a-b
	}
	else if(pt=="x" || pt=="*"){
		kq = a*b
	}

	else{
		if(b==0){
			alert('Số b phải khác 0')
			return 0
		}
		kq = a/b
	}

	document.getElementById('ketqua').innerHTML = kq
	
}