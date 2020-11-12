$(function () {
     $('li').on("click",'a', function (e) {
console.log(e)      
  var index = $(this).attr('index')
        var datalists = getdata();
        datalists.splice(index, 1);
        setdata(datalists)
        load()
    })
    load()
    $('#daiban').keydown(function (e) {
        if (e.keyCode === 13) {
            if ($(this).val() == "") {
                alert("请输入操作")
            } else {
                var val = $(this).val();
                var datalist = getdata();
                datalist.push({ 'title': val, 'done': false })
                setdata(datalist);
                load()
                $(this).val("")
            }

        }
    })

    // $('li').on("click",'a', function () {
    //     var index = $(this).attr('index')
    //     var datalists = getdata();
    //     datalists.splice(index, 1);
    //     setdata(datalists)
    //     load()
    // })
    // console.log( $('li'))
    console.log( $('li'))
    console.log( $('ol, ul'))

    $('ol, ul').on("click",'a', function () {
        var index = $(this).attr('index')
        var datalists = getdata();
        datalists.splice(index, 1);
        setdata(datalists)
        load()
    })

    $("ol, ul").on("click", "input", function() {
        var data = getdata();
        var index = $(this).siblings("a").attr("index");
        data[index].done = $(this).prop("checked");
        setdata(data);
        load();
    });
    function setdata(data) {
        localStorage.setItem("datalist", JSON.stringify(data))
    }
    function getdata() {
        var datalist = localStorage.getItem("datalist")
        if (datalist) {
            return JSON.parse(datalist);
        } else {
            return [];
        }
    }
    function load() {
        $('ol,ul').empty()
        var datalist = getdata();
        if (datalist.length != 0) {
            $.each(datalist, function (index, elev) {
                if (elev.done) {
                    $('ul').append($("<li> <input type='checkbox checked='checked''> <p>" + elev.title + "</p> <a hraf='javascript:;' index=" + index + "></a> </li>"))
                } else {
                    $('ol').append($("<li> <input type='checkbox'> <p>" + elev.title + "</p> <a hraf='javascript:;' index=" + index + "></a> </li>"))
                }
            })
        }
    }
});








