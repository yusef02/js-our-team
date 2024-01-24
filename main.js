const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const rowGridElement = document.querySelector(".container .row");
for (let member of team) {
  // console.log(
  //   member,
  //   `
  // ${member.name}
  // ${member.role}
  // ${member.image}`
  // );
  // --------------------------------------------
  // rowGridElement.innerHTML += `
  // <ul>
  //   <li>${member.name}</li>
  //   <li>${member.role}</li>
  //   <li>${member.image}</li>
  // </ul>
  // `;

  rowGridElement.innerHTML += `
  <div class="col-md-4">
    <div class="card p-3">
      <img src="./img/${member.image}" class="mb-2">
      <h2 class="fs-4 mb-2 text-center">${member.name}</h2>
      <span class="mb-2 text-center">${member.role}</span>
    </div>
  </div>
  `;
}
