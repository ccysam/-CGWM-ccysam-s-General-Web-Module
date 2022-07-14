function httpPost(url, params) {
    var iframe = document.createElement('iframe');
    var formEltTemp = document.createElement('form');
    iframe.name = 'TIframe';
    iframe.id = 'TIframe';
    formEltTemp.id = 'httpPostForm';
    formEltTemp.action = url;
    formEltTemp.method = 'post';
    formEltTemp.target = 'TIframe';
    formEltTemp.style.display = 'none';
    iframe.style.display = 'none';
    for (var key in params) {
        var opt = document.createElement('textarea');
        opt.name = key;
        opt.value = params[key];
        formEltTemp.appendChild(opt);
    }
    document.body.appendChild(iframe);
    document.body.appendChild(formEltTemp);
    formEltTemp.submit();
    return formEltTemp;
}

function closeHttpPost() {
    document.getElementById('TIframe').remove();
    document.getElementById('httpPostForm').remove();
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function GetElementRect(ElementName) {
    var element = document.getElementById(ElementName);
    var ex1 = element.offsetLeft;
    var ey1 = element.offsetTop;
    var ex2 = element.offsetLeft + element.offsetWidth;
    var ey2 = element.offsetTop + element.offsetHeight;
    var ElementRect = {
        'Ex1': ex1,
        'Ex2': ex2,
        'Ey1': ey1,
        'Ey2': ey2
    };
    return ElementRect;
}

function CheckMouseOut(ElementName, OutEvent) {
    document.getElementById(ElementName).onmouseout = function (event) {
        var x = event.clientX;
        var y = event.clientY;
        var ElementRect = GetElementRect(ElementName);
        if (x < ElementRect['Ex1'] || x > ElementRect['Ex2'] || y < ElementRect['Ey1'] || y > ElementRect['Ey2']) {
            OutEvent();
        }
    }
}
