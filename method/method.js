/**
 * Hàm dùng để đếm số lượng số dương có trong mảng
 * @param {*} arrNumber
 * @returns số lượng số dương
 */

function countPositiveNumber(arrNumber) {
  var soLuong = 0;

  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      soLuong++;
    }
  }

  return soLuong;
}

/**
 * Hàm dùng để đếm số lượng số âm có trong mảng
 * @param {*} arrNumber
 * @returns số lượng số âm
 */
function countNegativeNumber(arrNumber) {
  var soLuong = 0;

  for (var index = 0; index < arrayNumber.length; index++) {
    if (arrNumber[index] < 0) {
      soLuong++;
    }
  }

  return soLuong;
}

/**
 * Hàm dùng để đổi chỗ hai giá trị ở hai vị trí bất kì trong mảng
 * @param {*} arrNumber mảng
 * @param {*} index1 vị trí thứ nhất
 * @param {*} index2 vị trí thứ hai
 * @returns mảng mới sau khi đổi vị tri
 */

function doiViTri(arrNumber, index1, index2) {
  var temporary = arrNumber[index1];
  arrNumber[index1] = arrNumber[index2];
  arrNumber[index2] = temporary;

  return arrNumber;
}

/**
 * Hàm dùng để kiểm tra xem một số có phải là số nguyên tố hay không
 * @param {*} so số nhập vào
 * @returns trả ra kết quả true hoặc false; là số nguyên tố thì true, không phải là số nguyên tố thì false
 */
function kiemTraSoNguyenTo(so) {
  //output
  var kiemTra = true;
  for (var uoc = 2; uoc <= so / 2; uoc++) {
    if (so % uoc == 0) {
      kiemTra = false;
      break;
    }
  }
  return kiemTra;
}
