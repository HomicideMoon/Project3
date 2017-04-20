//To append a row in <table> 
//增加一行表
function Append_A_Row() {
    $("#database tbody").append("<tr>" +
        "<td class='id'>" +
        '<input type="checkbox" class="mark">' +
        '<span></span>' +
        "</td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td></td>" +
        "<td>" +
        "<input type='button' class='delete' value='删除'>" +
        "</td>" +
        "</tr>");
}

//To write the data when change or add newdata
//写入一行数据（表）
function DataIn(ind, s) {

    $("#database tr").eq(ind).find("td").eq(0).find("span").text(s.id);
    $("#database tr").eq(ind).find("td").eq(1).html(s.semester);
    $("#database tr").eq(ind).find("td").eq(2).html(s.title);
    $("#database tr").eq(ind).find("td").eq(3).html(s.class);
    $("#database tr").eq(ind).find("td").eq(4).html(s.release);
    $("#database tr").eq(ind).find("td").eq(5).html(s.createTime);
    $("#database tr").eq(ind).find("td").eq(6).html(s.creator);
    $("#database tr").eq(ind).find("td").eq(7).html(s.location);
    $("#database tr").eq(ind).find(".delete").attr("title", s.id);
    $("#database tr").eq(ind).find(".mark").attr("title", s.id);
    $("#database tr").eq(ind).attr("title", s.id);
}

//渲染表格（初始化） 
function InitDraw(datas) {
    $.each(datas, function (i, row) {
        Append_A_Row();
        DataIn(i + 1, row);
    })
}
//重新渲染表格
function ReDraw(datas) {
    $.each(datas, function (i, row) {
        DataIn(i + 1, row);
    })
}

//To delete a row
//删除一行（ 表）
// function delRow(obj) {
//     var Row = obj.parentNode;
//     while (Row.tagName.toLowerCase() != "tr") {
//         Row = Row.parentNode;
//     }
//
//     Row.parentNode.removeChild(Row);
// }


//If the input values has mistakes
//判断输入框，如果错误返回false，否则返回输入值
function InputNoError(names, error, next) {
    var status = 0;

    $.each(names, function (key, val) {
        if ($(val).val() == '') {
            status += 1;
        } else {
            status += 0;
        }
    })
    if (status > 0) {
        $(error).text("您的信息输入有误").show();
        setTimeout(function () {
            $(error).text("请检查并重新录入").fadeOut(2500);
        }, 1500)
        return false;
    } else {
        var datas = {
            id: next + 1,
            semester: $(names.semester).val(),
            title: $(names.title).val(),
            class: $(names.class).val(),
            release: $(names.release).val(),
            createTime: $(names.createTime).val(),
            creator: $(names.creator).val(),
            location: $(names.location).val()
        };
        return datas;
    }
    status = 0;
}

//Clear input values
//输入完毕后清空输入框
function ClearInput(names) {
    $.each(names, function (key, val) {
        $(val).val("");
    })

}

//删除一行内容
function DeleteRow(obj, datas) {
    for (var i = datas.length - 1; i >= 0; i--) {
        if (datas[i].id == obj.attr("title")) {
            datas.splice(i, 1);
        }
    }
    obj.parent("td").parent("tr").remove();
    return datas;
}

function DeleteRow2(obj, datas) {
    for (var i = datas.length - 1; i >= 0; i--) {
        if (datas[i].id == obj.attr("title")) {
            datas.splice(i, 1);
        }
    }
    obj.remove();
    return datas;
}
//选择排序(升序)
function ToBig(datas) {
    var min = 0;
    var temp = {};
    for (var i = 0; i < datas.length - 1; i++) {
        min = i;
        for (var j = i + 1; j < datas.length; j++) {
            if (datas[j].id < datas[min].id) {
                min = j;
            }
        }
        temp = datas[min];
        datas[min] = datas[i];
        datas[i] = temp;

    }

    return datas;
}

//序列大小顺序颠倒
function Reverse(datas) {
    var temp = {};
    for (var i = 0; i < datas.length / 2 - 0.5; i++) {
        temp = datas[i];
        datas[i] = datas[datas.length - i - 1];
        datas[datas.length - i - 1] = temp;

    }
    console.log(datas[0]);
    return datas;
}
