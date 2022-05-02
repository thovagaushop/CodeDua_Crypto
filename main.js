var selectRow = null;
var idNumber = 0;

//Submit
function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
}


//Lay du lieu tu form
function readFormData() {
    var formData = {};
    idNumber = idNumber + 1;
    formData['id'] = idNumber;
    formData['tenxe'] = document.getElementById("tenxe").value;
    formData['hinhanh'] = document.getElementById("hinhanh").value;
    formData['hangxe'] = document.getElementById("hangxe").value;
    formData['giatien'] = document.getElementById("giatien").value;
    formData['mota'] = document.getElementById("mota").value;
    formData['nguoilienhe'] = document.getElementById("nguoilienhe").value;
    formData['sdtnguoilienhe'] = document.getElementById("sdtnguoilienhe").value;
    formData['email'] = document.getElementById("email").value;
    return formData;
}

//Insert Data
function insertNewRecord(data) {
    var table = document.getElementById("listcar").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.id;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = "<img width = '60px' height = '60px' src='" + data.hinhanh + "'></img>";
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.tenxe;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.hangxe;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.giatien;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.mota;
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.nguoilienhe;
    var cell8 = newRow.insertCell(7);
        cell8.innerHTML = data.sdtnguoilienhe;
    var cell9 = newRow.insertCell(8);
        cell9.innerHTML = data.email;  
}