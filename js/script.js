var options = {
  series: [
    {
      name: "اسبوع",
      data: [2, 15, 3, 22, 15, 12, 10, 22, 12, 18, 8, 10],
    },
    {
      name: "شهر",
      data: [0, 20, 10, 2, 3, 23, 10, 15, 2, 20, 5, 12],
    },
  ],
  colors: ["#67E8F9", "#C280EB"],

  chart: {
    height: 400,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  title: {
    text: "Product Trends by Month",
    align: "left",
  },
  grid: {
    row: {
      colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    min: 0,
    max: 25,
    categories: [5, 10, 15, 20, 25, 30],
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
let toggle = document.querySelector(".page .toggle");
let toggleUl = document.querySelector(".sidebar .toggle-ul");
let sidebar = document.querySelector(".sidebar");
let list = document.querySelector(".sidebar ul");

toggle.addEventListener("click", () => {
  sidebar.style.width = "230px";
  sidebar.style.padding = "10px 10px 0 0";
  sidebar.style.position = "fixed";
});
toggleUl.addEventListener("click", () => {
  sidebar.style.width = 0;
  sidebar.style.padding = 0;
});
window.onresize = () => {
  if (window.innerWidth >= 850) {
    sidebar.style.width = "230px";
    sidebar.style.padding = "10px 10px 0 0";
    sidebar.style.position = "fixed";
  } else {
    sidebar.style.width = 0;
    sidebar.style.padding = 0;
    sidebar.style.position = "fixed";
  }
};
let addFile = document.querySelector(".add-file");
let addLink = document.querySelector(".add-link");
let form = document.querySelector(".form-content");
addFile.addEventListener("click", function () {
  let fileform = document.createElement("div");
  fileform.innerHTML = `
  <div class="files">
    <div class="head">
      <h5>الملفات</h5>

    </div>
    <div class="body">
      <span>اضافة ملف</span>
      <input type="file" id="upload" hidden />
      <label for="upload">
        <div class="image">
          <img src="images/upload.png" alt="" />
        </div>
        <p class="uploadDutyNameFile">اسحب ملف او قم بالضغط لاضافة ملف</p>
      </label>
    </div>
    <div class="address">
      <label for="">العنوان الفرعي</label>
      <input type="text" />
    </div>
    <div class="description">
      <label for="">العنوان الفرعي</label>
      <textarea name="description" id="description"></textarea>
    </div>
  </div>
`;
  form.appendChild(fileform);
});
addLink.addEventListener("click", function () {
  let linkForm = document.createElement("div");
  linkForm.innerHTML = `
  <div class="web-link">
              <h3 class="mb-4">اضافة لنك</h3>
              <div>
                <label for="">عنوان*</label>
                <input type="text" />
              </div>
              <div>
                <label for="">الرابط*</label>
                <input type="text" />
              </div>
    </div>
`;
  form.appendChild(linkForm);
});
function addAssigment() {
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "block";
}
function removeOverlay() {
  let overlay = document.querySelector(".overlay");
  overlay.style.display = "none";
}
function changefun() {
  let name = document.getElementById("upload");
  let fileName = document.querySelector(".file-name");
  fileName.innerHTML = name.files.item(0).name;
  let uploadButton = document.querySelector(".upload");
  uploadButton.removeAttribute("disabled");
}

function uplpoadfun() {
  let name = document.getElementById("uploadFile");
  let fileName = document.querySelector(".uploadNameFile");
  fileName.innerHTML = name.files.item(0).name;
}

function uplpoadDutyFile() {
  let name = document.getElementById("uploadDutyFile");
  let fileName = document.querySelector(".uploadDutyNameFile");
  fileName.innerHTML = name.files.item(0).name;
}
function uplpoadProject() {
  let name = document.getElementById("upload-project");
  let fileName = document.querySelector(".upload-project-file");
  fileName.innerHTML = name.files.item(0).name;
}
function opendropdownform() {
  console.log("first");
  let passwordForm = document.querySelector(".password-form");
  let opendrobdown = document.querySelector(".opendrobdown");
  if (passwordForm.classList.contains("active")) {
    passwordForm.classList.remove("active");
  } else {
    passwordForm.classList.add("active");
  }
  if (opendrobdown.classList.contains("active")) {
    opendrobdown.classList.remove("active");
  } else {
    opendrobdown.classList.add("active");
  }

}
