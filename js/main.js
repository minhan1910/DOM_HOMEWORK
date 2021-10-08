/**
 * Bài 1:
 *
 * Bước 1: Lấy giá trị từ form
 * salaryPerDay
 * theNumberOfWorkingDay
 *
 * Bước 2: tính theo công thức và kiểm tra bằng console.log
 *
 * Bước 3: xuất lên browser
 *
 *
 */

document.getElementById("resultEx1").disabled = true;
function totalSalary(salaryPerDay, theNumberOfWorkingday) {
  return salaryPerDay * theNumberOfWorkingday;
}

document.getElementById("btnTotalSalary").onclick = function () {
  var salaryPerDay = Number(document.getElementById("salaryPerDay").value);

  var theNumberOfWorkingDay = Number(document.getElementById("nWorkDay").value)
  var total = totalSalary(salaryPerDay, theNumberOfWorkingDay);

  document.getElementById("resultEx1").value = total;
};


/**
 * 
 * Bài 2:
 * 
 * B1: Lấy các giá trị từ form về
 * n1, n2, n3, n4, n5
 * 
 * B2: Tính giá trị trung bình
 * gpa / nSubjects
 * 
 * B3: hiện kết quả lên browser
 * 
 */

document.getElementById("resultEx2").disabled = true;
function gradePointAverage(gMath, gPhycis, gChemistry, gEnglish, gLiterature) {
    return (gMath + gPhycis + gChemistry + gEnglish + gLiterature) / 5;
}

document.getElementById("btnGpa").onclick = function() {
    var gMath = Number(document.getElementById("gMath").value);
    var gPhycis = Number(document.getElementById("gPhycis").value);
    var gChemistry = Number(document.getElementById("gChemistry").value);
    var gEnglish = Number(document.getElementById("gEnglish").value);
    var gLiterature = Number(document.getElementById("gLiterature").value);

    var gpa = gradePointAverage(gMath, gPhycis, gChemistry, gEnglish, gLiterature);

    document.getElementById("resultEx2").value = gpa;

}



/**
 * 
 * Bài 3:
 * 
 * B1: Lấy giá trị từ form, khai báo 
 * các giá trị để tính và có const.
 * 
 * B2: Quy đỏi tiền theo công thhức: 
 * OneUSD * VND 
 * 
 * B3:Hiển thị lên màn hình console
 * 
 *  */
const ONE_USD = 23500;
document.getElementById("resultEx3").disabled = true;
function changeCurrency(money) {
    return money * ONE_USD;
}

document.getElementById("btnIntechangeMoney").onclick = function() {
    var money = Number(document.getElementById("money").value);

    var result = changeCurrency(money);
    
    document.getElementById("resultEx3").value = result;
}


/**
 * 
 * Bài 4:
 * 
 * B1: lấy giá trị chiều dài va chiều rộng từ form để tính
 * lengthOfRec , widthOfRec
 * 
 * B2: Tính chu vi và diện tích theo công thức: 
 * perimeterOfRec = (widthOfRec + lengthOfRec) * 2;
 * areaOfRec = lengthOfRec * widthOfRec;
 * 
 * 
 * B3: Hiển thị kết quả lên màn hình browser
 * 
 */


document.getElementById("perimeterOfRec").disabled = true;
document.getElementById("areaOfRec").disabled = true;

function perimeterOfRec(width, length) {
    return (width + length) * 2;
}

function areaOfRec(width, length) {
    return width * length;
}

document.getElementById("btnCalc").onclick = function() {
    var lengthOfRec = Number(document.getElementById("lengthOfRec").value);
    var widthOfRec = Number(document.getElementById("widthOfRec").value);

    var perimeter = perimeterOfRec(widthOfRec, lengthOfRec);
    var area = areaOfRec(widthOfRec, lengthOfRec);

    document.getElementById("perimeterOfRec").value = perimeter;
    document.getElementById("areaOfRec").value = area;
}


/**
 * 
 * bài 5:
 * 
 * B1: Lấy trí trị từ form
 * digit
 * 
 * B2: tách 3 chữ số theo hàng đơn vị, chục, trăm
 * 
 * dv = digit % 10;
 * chuc = (digit % 100) / 10;
 * tram = digit / 100; 
 * 
 * Khúc chia bị biến đổi thành decimal nên phải convert Int
 * 
 * Tiếp theo là tính tổng số chữ số 
 * sum = dv + chuc + tram;
 * 
 * B3: Hiển thị lên browser
 */

document.getElementById("resultEx5").disabled = true;
function sumOfDigit(digit) {
    var dv = parseInt(digit % 10);
    var chuc = parseInt((digit % 100) / 10);
    var tram = parseInt(digit / 100); 
    return (dv + chuc + tram);
}

document.getElementById("btnCalcDigit").onclick = function() {
    var digit = Number(document.getElementById("digit").value);
    var result = sumOfDigit(digit);
    document.getElementById("resultEx5").value = result;
}



