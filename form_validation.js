let data = [];
let data_of_year = [];
function alldata_submit() {
    f_name_check();
    l_name_check();
    moblie_check();
    email_check();
    gender_check();
    date_check();
    object_new();
}
function f_name_check(){
  let name_match_f = document.getElementById('first_name').value;
  let nameRegex = /^[a-zA-Z]{4,10}$/;
  if (nameRegex.test(name_match_f)) {       
    document.getElementById('red1').style.display = "none";
    // console.log("fname ok");
    return true;
  }
  else{
    document.getElementById('red1').style.display = "block";
  }
}
function l_name_check(){
  let name_match_l = document.getElementById('last_name').value;
  let nameRegex = /^[a-zA-Z]{4,10}$/;
  if (nameRegex.test(name_match_l)) {       
    document.getElementById('red1_1').style.display = "none";
    // console.log("lname ok");
    return true;
  }
  else{
    document.getElementById('red1_1').style.display = "block";
  }
}

function moblie_check() {
  let phone_match = document.getElementById('mobile_number').value;
  let phoneRegex = /^\d{10}$/;
  if (phoneRegex.test(phone_match)) {       
    document.getElementById('red2').style.display = "none";
    // console.log("phone ok");
    return true;
  }
  else{
    document.getElementById('red2').style.display = "block";
  }
}

function email_check() {
  let email_value = document.getElementById('email_id').value;
  let emailRegex = /^[a-z0-9]+@gmail.com$/;
      if(emailRegex.test(email_value)){
        document.getElementById('red3').style.display = "none";
      // console.log("email ok");
        return true;
      }
      else {
        document.getElementById('red3').style.display = "block";
      }
}

function gender_check() {
    let gender_value = document.querySelector('input[name = Gender]:checked').value;
    // console.log("done"); 
    return true;
}
function date_check(){
    let date_value = document.getElementById('birth_date').value;
    if(date_value != ""){
      document.getElementById('red_b').style.display = "none";
      // console.log("dob ok");
        return true;
    }
    else{
      document.getElementById('red_b').style.display = "block";
    }
}   
class Person {
    constructor(fName, lName, mobile_val, email_value, gender_value, birth_value) {
        this.Fullname = fName + " " + lName;
        this.Mobile_number = mobile_val;
        this.Email = email_value;
        this.Gender = gender_value;
        this.Birth = birth_value;
        this.Year_value = this.Birth.substring(0, 4);
        console.log(this.Year_value);
    }
}
function object_push(fName, lName, mobile_val, email_value, gender_value, birth_value) {
    let temp_obj = new Person(fName, lName, mobile_val, email_value, gender_value, birth_value);
    data.push(temp_obj);
    alert("Data submitted !");
}
function object_new() {
    if (f_name_check() && l_name_check() && moblie_check() && email_check() && gender_check() && date_check()) {
        let fName = document.getElementById('first_name').value;
        let lName = document.getElementById('last_name').value;
        let mobile_val = document.getElementById('mobile_number').value;
        let email_value = document.getElementById('email_id').value;
        let gender_value = document.querySelector('input[name = Gender]:checked').value;
        let birth_value = document.querySelector('input[type="date"]').value;
        object_push(fName, lName, mobile_val, email_value, gender_value, birth_value);
    }
}
function view_data() {
    document.getElementById('data_table').style.display = "block";
    let tbl = "";
    tbl += `<tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Mobile Number</th>
                <th>Email address</th>
                <th>Birthdate</th>
                <th>Birthyear</th>
            </tr>`

        data.map((val, index, arr) => {
            tbl += `<tr>
                        <td>${data[index].Fullname}</td>
                        <td>${data[index].Gender}</td>
                        <td>${data[index].Mobile_number}</td>
                        <td>${data[index].Email}</td>
                        <td>${data[index].Birth}</td>
                        <td>${data[index].Year_value}</td>
                    </tr>`
        })
    if (data.length == 0) {
        alert("No data found");
      }
      else {
        alert("Now you can see data");
        document.getElementById('table_data').innerHTML = tbl;
    }
}
function filter_data() {
    data_of_year = [];
    data.filter(function year_filter(val, index, arr) {
        if (data[index].Year_value >= 2000) {
            data_of_year.push(data[index]);
        }
    })
    document.getElementById('year_table').style.display = "block";
    let tbl = "";
    tbl += `<tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Mobile Number</th>
                <th>Email address</th>
                <th>Birthdate</th>
                <th>Birthyear</th>
            </tr>`
    data_of_year.map((val, index, arr) => {
        tbl += `
        <tr>
            <td>${data_of_year[index].Fullname}</td>
            <td>${data_of_year[index].Gender}</td>
            <td>${data_of_year[index].Mobile_number}</td>
            <td>${data_of_year[index].Email}</td>
            <td>${data_of_year[index].Birth}</td>
            <td>${data_of_year[index].Year_value}</td>
        </tr>
        `
    })
    if (data_of_year.length == 0) {
        alert("Here is No data with born year equal or above 2000")
      }
      else {
        alert("Data of 20th century");
        document.getElementById('year_data').innerHTML = tbl;
    }
}
