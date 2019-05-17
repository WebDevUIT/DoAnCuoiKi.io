module.exports.HienThiLoaiDT = async function () {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlybandienthoai',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dsloaidt = await pool.query('SELECT * from dienthoai ');
    Bangloaidt = dsloaidt[0];
    var kq = "";
    for (i = 0; i < Bangloaidt.length; i++) {

        kq += "<a href='http://localhost:3000/?maloai="
            + Bangloaidt[i].Maloai + "&&tenhang=" + Bangloaidt[i].Tenloai + "'>" + Bangloaidt[i].TenHangg + "</a><br>";
    }

    return kq;
}

module.exports.HienThiDT = async function (maloai,tenloai) {
    var mysql = require('mysql2/promise');
    var pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'quanlybandienthoai',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    var dshoa;
    if (maloai==0)
        dshoa = await pool.query('select  * from dienthoai order by mahoa desc limit 0,10');
    else
        dshoa = await pool.query('select  * from dienthoai where maloai=' + maloai);

    Bangdt = dsdt[0];
    var kq = "<table> <caption>" + tenloai+" </caption > ";

    for (i = 0; i < Bangdt.length; i++) {

        if (i % 5 == 0)
            kq += "<tr>";
        kq += "<td><a href='http://localhost:3000/?madt=" + Bangdt[i].MaDT + "'> "
      kq+=" <img src = 'image/" + Banghoa[i].image + "' /></a > <br>";
        kq += Banghoa[i].tenhoa + "<br><i>Giá bán :" + Bangdt[i].gia + "</i></td>";

        if ((i + 1) % 5 == 0)
            kq += "</tr>";

    }
    kq += "</table>";

    return kq;
};