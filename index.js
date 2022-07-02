var arrayNumber = [];
//Thêm số vào mảng
document.getElementById("btnThemSo").onclick = function () {
  //input
  var iSo = Number(document.getElementById("themSo").value);
  //output
  var ketQua = "";
  //progress
  arrayNumber.push(iSo);
  ketQua = "[" + arrayNumber + "]";

  document.getElementById("arrNumber").innerHTML = ketQua;
};

//BAI 1//
document.getElementById("btnTinhTongSoDuong").onclick = function () {
  //input
  //output
  var ketQua = 0;
  //progress
  for (var index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index] > 0) {
      ketQua = ketQua + arrayNumber[index];
    }
  }

  document.getElementById("ketQua_B1").innerHTML = ketQua;
};

//BAI 2//
document.getElementById("btnDemSoDuong").onclick = function () {
  //input
  //output
  var soLuong = 0;
  //progress
  soLuong = countPositiveNumber(arrayNumber);

  document.getElementById("ketQua_B2").innerHTML = soLuong;
};

//BAI 3//
document.getElementById("btnTimSoNhoNhat").onclick = function () {
  //input
  //output
  var soMin = arrayNumber[0];
  //progress
  for (var index = 1; index < arrayNumber.length; index++) {
    if (arrayNumber[index] < soMin) {
      soMin = arrayNumber[index];
    }
  }

  document.getElementById("ketQua_B3").innerHTML = "Số nhỏ nhất là: " + soMin;
};

//BAI 4//
document.getElementById("btnSoDuongMin").onclick = function () {
  //input
  //output
  var soDuongMin = arrayNumber[0];
  //progress
  for (var index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index] > 0 && arrayNumber[index] < soDuongMin) {
      soDuongMin = arrayNumber[index];
    }
    break;
  }

  document.getElementById("ketQua_B4").innerHTML =
    "Số dương nhỏ nhất là: " + soDuongMin;
};

//BAI 5//
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  //input
  //output
  var soChan = 0;
  //progress
  //tim so chan
  for (var index = 0; index < arrayNumber.length; index++) {
    if (arrayNumber[index] % 2 === 0) {
      soChan = arrayNumber[index];
    }
  }
  document.getElementById("ketQua_B5").innerHTML = soChan;
};

//BAI 6//
document.getElementById("btnDoiViTri").onclick = function () {
  //input
  var viTri1 = Number(document.getElementById("viTri1").value);
  var viTri2 = Number(document.getElementById("viTri2").value);
  //output
  //progress
  arrayNumber = doiViTri(arrayNumber, viTri1, viTri2);
  document.getElementById("ketQua_B6").innerHTML = arrayNumber;
};

//BAI 7//
document.getElementById("btnSapXep").onclick = function () {
  //input
  //output
  //progress
  arrayNumber.sort(function (so2, so1) {
    return so2 - so1;
  });
  document.getElementById("ketQua_B7").innerHTML = arrayNumber;
};

//BAI 8//
document.getElementById("btnTimKiem").onclick = function () {
  //input
  //output
  var soNguyenToDauTien = 0;
  //progress
  for (var index = 0; index < arrayNumber.length; index++) {
    var kiemTra = kiemTraSoNguyenTo(arrayNumber[index]);
    if (kiemTra === true && arrayNumber[index] > 1) {
      soNguyenToDauTien = arrayNumber[index];
      break;
    }
  }

  document.getElementById("ketQua_B8").innerHTML = soNguyenToDauTien;
};

//BAI 9//
//them so vao mang moi
var newArr = [];
document.querySelector("#btnThemSoMangMoi").onclick = function () {
  //input
  var so = Number(document.querySelector("#themSoMangMoi").value);
  //output
  var ketQua = "";
  //progress
  newArr.push(so);
  ketQua = "[" + newArr + "]";

  document.querySelector("#newArr").innerHTML = ketQua;
};
//kiem tra so luong so nguyen
document.querySelector("#btnKiemTraSoNguyen").onclick = function () {
  //input: newArr
  //output
  var soLuong = 0;
  //progress
  for (var index = 0; index < newArr.length; index++) {
    if (Number.isInteger(newArr[index]) === true) {
      soLuong++;
    }
  }

  document.querySelector("#ketQua_B9").innerHTML = soLuong;
};

//BAI 10//
document.querySelector("#btnSoSanh").onclick = function () {
  //input
  //output
  var ketQua = "";
  //progress
  var soLuongSoDuong = countPositiveNumber(arrayNumber);
  var soLuongSoAm = countNegativeNumber(arrayNumber);
  if (soLuongSoDuong > soLuongSoAm) {
    ketQua = "Số Dương nhiều hơn Số Âm";
  } else if (soLuongSoDuong < soLuongSoAm) {
    ketQua = "Số Dương ít hơn Số Âm";
  } else {
    ketQua = "Số Dương bằng Số Âm";
  }

  document.querySelector("#ketQua_B10").innerHTML = ketQua;
};
