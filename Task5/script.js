const groups = [
    ["Student 1.1", "Student 1.2", "Student 1.3"],
    ["Student 2.1", "Student 2.2", "Student 2.3", "Student 2.4"],
    ["Student 3.1", "Student 3.2", "Student 3.3", "Зюзя", "Енжі"]
];

const results = [];

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

    // find Group select
    const groupSelect = document.getElementById('group-select');
    if(!groupSelect) throw "Can't find id 'group-select'";

    // find lesson select
    const lessonSelect = document.getElementById('lesson-select');
    if(!lessonSelect) throw "Can't find id 'lesson-select'";

    if(groupSelect.value < 1 || lessonSelect.value < 1) {
      alert("Please select group and lesson!");
    } else {
        //looking in array for these group and lesson
        var searchedResults = results.filter((item) => item.group==groupSelect.value && item.lesson==lessonSelect.value);

        // if there is no info
        if (searchedResults.length == 0) {

          var selectedGroup = groupSelect.value-1;

          let textHTML = "";
          textHTML += "<form class='col s12'><div class='row'><div class='col s12'><div class='row'>";
          textHTML += "<div class='input-field col s12'><input id='lesson_topic' type='text' class='validate'>";
          textHTML += "<label for='lesson_topic'>Lesson topic:</label></div></div></div></div>";
          textHTML += "<div class='row'><div class='col s12'><table><thead><tr><th>Name</th><th>Is present";
          textHTML += "</th></tr></thead><tbody>";

          for(let i=0; i < groups[selectedGroup].length; i++) {
            textHTML += "<tr><td><span name='student-name'>";
            textHTML += groups[selectedGroup] [i];
            textHTML += "</span></td><td><label><input type='checkbox' name='present-checkbox' class='filled-in'/><span> </span></label></td></tr>";
          }

          textHTML += "</tbody></table></div></div>";
          textHTML += "<div class='row'><div class='col s12'><button type='submit' class='btn waves-effect waves-light col s12' id='save-btn'>save</button></div></div>";
          textHTML += "</form>";
          resultDiv.innerHTML = textHTML;

          // find button Save
          const saveBtn = document.getElementById('save-btn');
          if(!saveBtn) throw "Can't find id 'save-btn'";

          saveBtn.addEventListener('click', saveBtnClicked);
        } else { // showing exicting info about group and lesson
          let textHTML ="";

          textHTML += "<div class='row'><div class='col s12'><h6><span>Lesson topic: ";
          textHTML += searchedResults[0].lessonTopic;
          textHTML += "</span></h6></div></div>";

          textHTML += "<div class='row><div class='col s12'><table><thead><tr><th>Name</th><th>Is present</th></tr></thead>";

          for(let item of searchedResults) {
            textHTML += "<tbody><tr><td>";
            textHTML += item.student;
            textHTML += "</td><td>";
            textHTML += item.presence == true ? "present" : "";
            textHTML += "</td></tr></tbody>";
          }

          textHTML += "</table></div></div>";

          resultDiv.innerHTML = textHTML;
        }

    }

  }

  function saveBtnClicked(e) {
    e.preventDefault();

    //знаходимо div для вивода группи
    const resultDiv = document.getElementById('result-div');
    if(!resultDiv) throw "Can't find id 'result-div'";

    // find Group select
    const groupSelect = document.getElementById('group-select');
    if(!groupSelect) throw "Can't find id 'group-select'";

    // find lesson select
    const lessonSelect = document.getElementById('lesson-select');
    if(!lessonSelect) throw "Can't find id 'lesson-select'";

    // find lesson-topic
    const lessonTopic = document.getElementById('lesson_topic');
    if(!lessonTopic) throw "Can't find id 'lesson-topic'";

    //find student names
    const studentNames = document.getElementsByName('student-name');
    if(!studentNames) throw "Can't find name 'student-name'";
    
    //find present checkboxes
    const presentCheckboxes = document.getElementsByName('present-checkbox');
    if(!presentCheckboxes) throw "Can't find name 'present-checkbox'";

    for(let i=0; i < studentNames.length; i++) {
      results.push(
        {
          group: `${groupSelect.value}`,
          lesson: `${lessonSelect.value}`,
          lessonTopic: `${lessonTopic.value}`,
          student: `${studentNames[i].innerText}`,
          presence: presentCheckboxes[i].checked
        }
      )
    }

    resultDiv.innerHTML = "";

  }