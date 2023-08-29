// =====================click event=======================

function formcheck() {
    let fname = document.getElementById("fname").value;
    let mname = document.getElementById("mname").value;
    let lname = document.getElementById("lname").value;
    let addr = document.getElementById("addr").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let mnumber = document.getElementById("mnumber").value;



    if (fname == "" || fname == null) {
        document.getElementById("msg1").innerText = "Enter First Name";
        return false;
    }
    else if (mname == "" || mname == null) {
        document.getElementById("msg2").innerText = "Enter Middle Name";
        return false;
    }
    else if (lname == "" || lname == null) {
        document.getElementById("msg3").innerText = "Enter Last Name";
        return false;
    }
    else if (addr == "" || addr == null) {
        document.getElementById("msg4").innerText = "Enter Address";
        return false;
    }
    else if (male == false && female == false) {
        document.getElementById("msg5").innerText = "Select Gender";
        return false;
    }
    else if (mnumber == "" || mnumber == null) {
        document.getElementById("msg7").innerText = "Enter Mobil No";
        return false;
    }

}








// ==================blur event =============

function blankcheck(blnk, msg) {
    if (blnk.value == "" || blnk == null) {
        document.getElementById(msg).innerText = "Enter Value";
        return false;
    }
}

function dateblankcheck(blnk, msg) {
    if (blnk.value == "" || blnk == null) {
        document.getElementById(msg).innerText = "Enter Date of Birth";
        return false;
    }
}

function selectchecked(selcheck, msg) {
    if (selcheck.checked == false) {
        document.getElementById(msg).innerText = "Select Value!!!";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}

function genderblankcheck(blnk, msg) {
    if (blnk.checked == false) {
        document.getElementById(msg).innerText = "Select Gender";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}



// ===================key event==============

function namevalid(namechk, msg) {
    let regex = /^[a-zA-Z]*$/;

    if (!(regex.test(namechk.value)) || (namechk.value.length < 2)) {
        document.getElementById(msg).innerText = "Invalid Name";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}

function addresscheck(addrlen, msg) {
    if (addrlen.value.length < 30) {
        document.getElementById(msg).innerText = "Address has Minimun 30 Cherecter";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;

    }


