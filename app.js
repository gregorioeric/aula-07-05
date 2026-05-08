const name = document.getElementById("name");
const btnSave = document.getElementById("btnSave");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");

const resultado = document.querySelector("#resultado");

// ternaria => condução ? bloco de codigo :
const storeData = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

// name.addEventListener("input", (e) => {
//     console.log(name.value);

// });

btnSave.addEventListener("click", async (e) => {
  e.preventDefault();
  // dkjhf
  const userData = {
    id: storeData.length + 1,
    name: name.value,
    email: email.value,
    telefone: telefone.value,
  };

  storeData.push(userData);

  localStorage.setItem("Users", JSON.stringify(storeData));

  //   const result = await fetch("http://localhost:5600/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   });
});

const loadData = () => {
  //   for (let i = 0; i < storeData.length; i++) {
  //     const element = storeData[i];
  //     console.log(element);

  //     resultado.innerHTML = element.name;
  //   }
  const users = storeData.map((user) => {
    console.log(user);
  });
};

loadData();
