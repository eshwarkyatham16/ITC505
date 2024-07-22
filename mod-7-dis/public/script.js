document.getElementById("task-list").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("task")) {
    e.target.classList.toggle("clicked");
  }
});

const sections = {
  "nav-tasks": "tasks",
  "nav-status-codes": "status-codes",
  "nav-json": "json-example",
};

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });
    document.getElementById(sections[e.target.id]).classList.add("active");
  });
});

const movieCollection = `{
    "movies": [
        {
            "title": "Pokiri",
            "director": "Puri",
            "year": 2010,
            "genre": "Crime",
            "actors": ["Mahesh Babu", "Ali"]
        },
        {
            "title": "RRR",
            "director": "Raja mouli",
            "year": 2023,
            "genre": "Sci-Fi",
            "actors": ["NTR", "Ram Charan"]
        }
    ]
}`;

const parsedData = JSON.parse(movieCollection);
console.log(parsedData);

const stringifiedData = JSON.stringify(parsedData, null, 2);
console.log(stringifiedData);

document.getElementById("parsed-data-output").textContent = JSON.stringify(
  parsedData,
  null,
  2
);
document.getElementById("stringified-data-output").textContent =
  stringifiedData;
