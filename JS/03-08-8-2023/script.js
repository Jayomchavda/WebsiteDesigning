//   ======================clicl event ================

function formcheck() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let addr = document.getElementById("addr").value;
    let city = document.getElementById("city").value;
    let mobiln = document.getElementById("mobilno").value;
    let mail = document.getElementById("mail").value;
    let passwd = document.getElementById("pass").value;

    if (fname == "" || fname == null) {
        document.getElementById("msg1").innerText = "Enter First Name";
        return false;
    } else if (lname == "" || lname == null) {
        document.getElementById("msg2").innerText = "Enter Last Name";
        return false;
    } else if (male == false && female == false) {
        document.getElementById("msg3").innerText = "Select Gender";
        return false;
    } else if (addr == "" || addr == null) {
        document.getElementById("msg4").innerText = "Enter Address";
        return false;
    } else if (city == "-1") {
        document.getElementById("msg5").innerText = "Select City";
        return false;
    } else if (mobiln == "" || mobiln == null) {
        document.getElementById("msg6").innerText = "Enter Mobil No";
        return false;
    } else if (mail == "" || mail == null) {
        document.getElementById("msg7").innerText = "Enter Email Id";
        return false;
    } else if (passwd == "" || passwd == null) {
        document.getElementById("msg8").innerText = "Enter Password";
        return false;
    }
}





// ===============blur event =================

function blankcheck(blnk, msg) {
    if (blnk.value == "" || blnk.value == null) {
        document.getElementById(msg).innerText = "Enter Value.."
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

function selectop(selop, msg) {
    if (selop.value == "-1") {
        document.getElementById(msg).innerText = "Select Value!!!";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}







// ============= keyboard event ==========

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
        document.getElementById(msg).innerText = "Address has minimum 30 Character";
        return false;
    } else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}

function mobilcheck(mblchk, msg) {
    let regex = /^[0-9]*$/
    let start = /^[6-9]/

    if (!(regex.test(mblchk.value)) || !(start.test(mblchk.value))) {
        document.getElementById(msg).innerText = "Invelid Number";
        return false;
    } else if (mblchk.value.length < 10) {
        document.getElementById(msg).innerText = "Enter Proper Number";
        return false;
    }
    else {
        document.getElementById(msg).innerText = "";
        return false;
    }
}

function checkmail() {
    let mail = document.getElementById("mail").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;

    if (regex.test(mail)) {
        document.getElementById("msg7").innerText = "";
        return false;
    } else {
        document.getElementById("msg7").innerText = "Enter Proper Mail Id";
        return false;
    }
}

function pwdcheck() {
    let passwd = document.getElementById("pass").value;
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/;

    if (regex.test(passwd)) {
        document.getElementById("msg8").innerText = "done";
        return false;
    } else {
        document.getElementById("msg8").innerText = "not done";
        return false;
    }

}


function compair() {
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if (cpass != pass) {
        document.getElementById("msg9").innerText = "Password does not same";
        return false;
    } else {
        document.getElementById("msg9").innerText = "";
        return false;
    }
}


