var ShortDuration = getComputedStyle(document.documentElement).getPropertyValue('--TotalShortAnimationDuration').replace(/[^0-9]/ig, '');
var LongDuration = getComputedStyle(document.documentElement).getPropertyValue('--TotalLongAnimationDuration').replace(/[^0-9]/ig, '');
var TotalBorderRadius = getComputedStyle(document.documentElement).getPropertyValue('--TotalBorderRadius').replace(/[^0-9]/ig, '');
var DefaultBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--DefaultBackgroundColor');

function CloseDialog(DialogName) {
    document.getElementById(DialogName).style.animationName = 'hideDialog';
    setTimeout(() => {
        document.getElementById(DialogName).style.display = 'none';
    }, LongDuration - 20);
}

function OpenDialog(DialogName) {
    document.getElementById(DialogName).style.animationName = 'showDialog';
    document.getElementById(DialogName).style.display = 'block';
}

function ClearInput(InputName) {
    document.getElementById(InputName).getElementsByTagName('input')[0].value = '';
    document.getElementById(InputName).getElementsByClassName('ClearBtn')[0].style.display = 'none';
}

function Check4Btn(InputName) {
    if (document.getElementById(InputName).getElementsByTagName('input')[0].value !== '') {
        document.getElementById(InputName).getElementsByClassName('ClearBtn')[0].style.display = 'block';
    } else {
        document.getElementById(InputName).getElementsByClassName('ClearBtn')[0].style.display = 'none';
    }
}

function ShowCheckMark(CBName, Sel) {
    document.getElementById(CBName).getElementsByClassName('mark')[Sel].style.animationName = 'showMark';
    document.getElementById(CBName).setAttribute('data-selected', 'true');
    document.getElementById(CBName).getElementsByClassName('Selection')[Sel].setAttribute('data-selected', 'true');
}

function HideCheckMark(CBName, Sel) {
    document.getElementById(CBName).getElementsByClassName('mark')[Sel].style.animationName = 'hideMark';
    document.getElementById(CBName).setAttribute('data-selected', 'false');
    document.getElementById(CBName).getElementsByClassName('Selection')[Sel].setAttribute('data-selected', 'false');
}

function ClickCheck(CheckBoxName) {
    var s = document.getElementById(CheckBoxName).getAttribute('data-selected');
    if (s == 'true') {
        HideCheckMark(CheckBoxName, 0);
    } else if (s == 'false') {
        ShowCheckMark(CheckBoxName, 0);
    }
}

function ClickRadio(RadioName, Sel) {
    var nSel = document.getElementById(RadioName).getAttribute('data-selection');
    if (nSel == Sel) {
        HideCheckMark(RadioName, Sel);
        document.getElementById(RadioName).setAttribute('data-selection', 'none');
    } else {
        if (nSel != 'none') {
            HideCheckMark(RadioName, nSel);
        }
        ShowCheckMark(RadioName, Sel);
        document.getElementById(RadioName).setAttribute('data-selection', Sel);
    }
}

function Switch(SwitchName) {
    var status = document.getElementById(SwitchName).getAttribute('data-switched');
    if (status == 'true') {
        document.getElementById(SwitchName).setAttribute('data-switched', false);
    } else if (status == 'false') {
        document.getElementById(SwitchName).setAttribute('data-switched', true);
    }
}

function ShowFloatBox(BoxName) {
    if (document.getElementById(BoxName).getAttribute('data-type') == 'float') {
        document.getElementById(BoxName).setAttribute('data-isOpen', 'true');
        CheckMouseOut(BoxName, () => {
            document.getElementById(BoxName).setAttribute('data-isOpen', 'false');
            document.getElementById(BoxName).onmouseout = null;
        });
    } else if (document.getElementById(BoxName).getAttribute('data-type') == 'solid') {
        var innerF = () => {
            if (document.getElementById(BoxName).getAttribute('data-isOpen') == 'true') {
                document.getElementById(BoxName).setAttribute('data-isOpen', 'false');
                document.removeEventListener('click', innerF);
            } else {
                document.getElementById(BoxName).setAttribute('data-isOpen', 'true');
            }
        }
        document.addEventListener('click', innerF);
        document.getElementById(BoxName).addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
}

function foldAccordion(AccordionName, Sel) {
    if (Sel == null) {
        var Height;
        Height = document.getElementById(AccordionName).parentElement.clientHeight - (2 * TotalBorderRadius);
        var es = document.getElementById(AccordionName).parentElement.getElementsByClassName('Accordion');
        var isOpen = document.getElementById(AccordionName).getAttribute('data-isOpen');
        var openedAcc = document.getElementById(AccordionName).parentElement.getAttribute('data-openedAcc');
        var cAcc = document.getElementById(AccordionName).getAttribute('data-AccSel');
        if (isOpen == 'true') {
            document.getElementById(AccordionName).setAttribute('data-isOpen', 'false');
            document.getElementById(AccordionName).parentElement.setAttribute('data-openedAcc', 'none');
        } else if (isOpen == 'false') {
            if (openedAcc == 'none') {
                document.getElementById(AccordionName).setAttribute('style', '--CloseHeight:' + document.getElementById(AccordionName).clientHeight + 'px; --OpenHeight:' + (Height - ((es.length - 1) * document.getElementById(AccordionName).clientHeight)) + 'px;');
                document.getElementById(AccordionName).setAttribute('data-isOpen', 'true');
                document.getElementById(AccordionName).parentElement.setAttribute('data-openedAcc', cAcc);
            } else {
                foldAccordion(AccordionName, parseInt(openedAcc));
            }
        }
    } else if (Sel != null) {
        document.getElementById(AccordionName).parentElement.getElementsByClassName('Accordion')[Sel].setAttribute('data-isOpen', 'false');
        document.getElementById(AccordionName).parentElement.setAttribute('data-openedAcc', 'none');
        foldAccordion(AccordionName);
    }
}

function CheckTextArea(TextAreaName) {
    var len = document.getElementById(TextAreaName).getElementsByTagName('textarea')[0].value.length;
    var max = parseInt(document.getElementById(TextAreaName).getAttribute('data-maxText'));
    var str = len + '/' + max;
    if (len > max) {
        document.getElementById(TextAreaName).getElementsByTagName('span')[0].style.color = 'lightcoral';
    } else {
        document.getElementById(TextAreaName).getElementsByTagName('span')[0].style.color = DefaultBackgroundColor;
    }
    document.getElementById(TextAreaName).getElementsByTagName('span')[0].innerHTML = str;
}

function Pagination(PgnName) {
    var current = parseInt(document.getElementById(PgnName).getAttribute('data-currentPage'));
    var max = parseInt(document.getElementById(PgnName).getAttribute('data-maxPage'));
    for (let i = 1; i <= max; i++) {
        if (i == current) {
            document.getElementById(PgnName).getElementsByTagName('div')[i].classList.add('unavl');
        } else {
            document.getElementById(PgnName).getElementsByTagName('div')[i].classList.remove('unavl');
            document.getElementById(PgnName).getElementsByTagName('div')[i].setAttribute('onclick', 'ClickPage(\'' + PgnName + '\',' + i + ');');
        }
    }
    if (current == 1) {
        document.getElementById(PgnName).getElementsByTagName('div')[0].classList.add('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[max + 1].classList.remove('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[max + 1].setAttribute('onclick', 'ClickPage(\'' + PgnName + '\',' + (current + 1) + ');');
    } else if (current == max) {
        document.getElementById(PgnName).getElementsByTagName('div')[max + 1].classList.add('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[0].classList.remove('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[0].setAttribute('onclick', 'ClickPage(\'' + PgnName + '\',' + (current - 1) + ');');
    } else {
        document.getElementById(PgnName).getElementsByTagName('div')[0].classList.remove('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[max + 1].classList.remove('unavl');
        document.getElementById(PgnName).getElementsByTagName('div')[0].setAttribute('onclick', 'ClickPage(\'' + PgnName + '\',' + (current - 1) + ');');
        document.getElementById(PgnName).getElementsByTagName('div')[max + 1].setAttribute('onclick', 'ClickPage(\'' + PgnName + '\',' + (current + 1) + ');');
    }
}

function ClickPage(PgnName, Sel) {
    document.getElementById(PgnName).setAttribute('data-currentPage', Sel);
    Pagination(PgnName);
}

function ShowTip(TipName, event) {
    var left = event.clientX;
    var top = event.clientY;
    console.log(left, top);
    document.getElementById(TipName).style.left = left + 'px';
    document.getElementById(TipName).style.top = top + 'px';
    document.getElementById(TipName).setAttribute('data-isOpen', 'true');
}

function HideTip(TipName) {
    document.getElementById(TipName).setAttribute('data-isOpen', 'false');
}