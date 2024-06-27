let mySotichkiem = new Info("ngân hàng")
let p1 = new SoTichKiem(1,"1 năm","Đạt",13948031,"1/23/2001","21212VNĐ")
let p2 = new SoTichKiem(1,"1 năm","Đạt2",139480311,"2/23/2002","40012VNĐ")

mySotichkiem.addProduct(p1);
mySotichkiem.addProduct(p2);


showAll()
document.getElementById("save").innerHTML=`<button style="background-color: green;" onclick="Add()">Thêm</button>`
function showAll(){
     let list = mySotichkiem.listProduct;
    let str = `<tr>
                    <th colspan="14">Thông tin sổ tích kiệm</th>
                </tr>   
                <tr>
                    <th>Mã số</th>
                    <th>Loại tích kiệm</th>
                    <th>Họ Tên</th>
                    <th>CMND</th>
                    <th>Ngày mở </th>
                    <th>Số tiền gửi vào</th>
                     <th>action</th>
                </tr>
    `
    for (i = 0; i < list.length; i++) {
        str = str + `
        <tr>
                    <td>${list[i].maso}</td>
                    <td>${list[i].LoaiTichkiem}</td>
                     <td>${list[i].Name}</td>
                    <td>${list[i].CMND}</td>
                     <td>${list[i].Date}</td>
                    <td>${list[i].Tien}</td>
                    <td><span ><button style="background-color: red;color: white;" onclick="remove(${i})">Delete</button></span></td>
                </tr>
        `
        document.getElementById("table").innerHTML = str

    }


}

function Add(){
    let masoInput = document.getElementById("maso").value;
    let LoaiTichkiemInput = document.getElementById("loaisotichkiem").value;
    let NameInput = document.getElementById("name").value;
    let CMNDInput = document.getElementById("CMND").value;
    let DateInput = document.getElementById("date").value;
    let TienInput = document.getElementById("tien").value;
    let newSotichkiem = new SoTichKiem(masoInput,LoaiTichkiemInput,NameInput,CMNDInput,DateInput,TienInput)
    mySotichkiem.addProduct(newSotichkiem)
    alert("thêm thành công");
    showAll()
    document.getElementById("maso").value = ""
    document.getElementById("loaisotichkiem").value = ""
    document.getElementById("name").value = ""
    document.getElementById("CMND").value = ""
    document.getElementById("date").value = ""
    document.getElementById("tien").value = ""
   

}

function remove(index){
    let isConfirnm = confirm("bạn có muốn xoá tài khoản này không ?")
    if (confirm) {
        mySotichkiem.removeProduct(index)
        alert("đã xoá thành công")
        showAll()
    }
}