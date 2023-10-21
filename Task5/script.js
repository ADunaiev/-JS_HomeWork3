const groups = [
    ["Student 1.1", "Student 1.2", "Student 1.3"],
    ["Student 2.1", "Student 2.2", "Student 2.3", "Student 2.4"],
    ["Student 3.1", "Student 3.2", "Student 3.3"]
];


document.addEventListener('DOMContentLoaded', function() {
    // вмикаємо select у Materialize
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);

    // знаходимо кнопку Select
    const selectBtn = document.getElementById('select-btn');
    if(!selectBtn) throw "Can't find id 'select-btn'";
    selectBtn.addEventListener('click', selectBtnClicked);

  });

  function selectBtnClicked(e) {
    e.preventDefault();

    //знаходимо div для вивода группи
    const resultDiv = document.getElementById('result-div');
    if(!resultDiv) throw "Can't find id 'result-div'";

    let textHTML = "";
    textHTML += "<form class='col s12'><div class='row'><div class='col s12'><div class='row'>";
    textHTML += "<div class='input-field col s12'><input placeholder='Lesson topic' id='lesson_topic' type='text' class='validate'>";
    textHTML += "<label for='lesson_topic'>Topic:</label></div></div></div></div>";

    textHTML += "<div class='row'><div class='col s12'><table><thead><tr><th>Name</th><th>Is present";
    textHTML += "</th></tr></thead><tbody><tr><td>Student 1</td><td><label><input type='checkbox' name='present-checkbox' class='filled-in'/>";
    textHTML += "<span> </span></label></td></tr><tr><td>Student 2</td><td><label><input type='checkbox' name='present-checkbox' class='filled-in'/>";
    textHTML += "<span> </span></label></td></tr></tbody></table></div></div>";

    textHTML += "<div class='row'><div class='col s12'><button type='submit' class='btn waves-effect waves-light col s12' id='save-btn'>save</button></div></div>";

    textHTML += "</form>";
    resultDiv.innerHTML = textHTML;

  }
