const name = document.getElementById("name");
const btnSave = document.getElementById("btnSave");
const telefone = document.querySelector("#telefone");
const email = document.querySelector("#email");
const btnAtualizar = document.querySelector("#btnAtualizar");
const btnCancelar = document.querySelector("#btnCancelar");

const resultado = document.querySelector("#resultado");

// ternaria => condução ? bloco de codigo :
const storeData = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users"))
  : [];

// name.addEventListener("input", (e) => {
//     console.log(name.value);

// });

const loadData = () => {
  for (let i = 0; i < storeData.length; i++) {
    const user = storeData[i];

    resultado.innerHTML += `
    <div class="card">
      <h3>${user.name}</h3>
      <div>${user.email}</div>
      <div>${user.telefone}</div>
      <div class="btn-action">
        <button class="edit" data-id="${user.id}">Editar</button>
        <button class="delete" data-id="${user.id}">Deletar</button>
      </div>
    </div>
    `;
  }
  // const users = storeData.map((user) => {
  //   console.log(user);
  // });
};

const edit = (id) => {
  const findUser = storeData.find((user) => user.id === id);

  name.value = findUser.name;
  email.value = findUser.email;
  telefone.value = findUser.telefone;

  btnAtualizar.setAttribute("data-id", findUser.id);
};

const atualizarUser = (id) => {
  const findUser = storeData.find((user) => user.id === id);

  findUser.name = name.value;
  findUser.email = email.value;
  findUser.telefone = telefone.value;

  localStorage.setItem("users", JSON.stringify(storeData));

  btnAtualizar.classList.add("hide");
  btnCancelar.classList.add("hide");
  btnSave.classList.remove("hide");

  name.value = "";
  email.value = "";
  telefone.value = "";

  location.reload();
};

const deletarUser = (id) => {
  const delUser = storeData.filter((user) => user.id !== id);
  localStorage.setItem("users", JSON.stringify(delUser));
  location.reload();
};

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

  localStorage.setItem("users", JSON.stringify(storeData));
  //   const result = await fetch("http://localhost:5600/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(userData),
  //   });
  loadData();
  location.reload();
});

resultado.addEventListener("click", (e) => {
  e.preventDefault();

  const el = e.target;

  if (el.classList.contains("edit")) {
    const id = Number(el.getAttribute("data-id"));
    edit(id);

    btnAtualizar.classList.remove("hide");
    btnCancelar.classList.remove("hide");
    btnSave.classList.add("hide");
  }

  if (el.classList.contains("delete")) {
    const id = Number(el.getAttribute("data-id"));
    deletarUser(id);
  }
});

btnAtualizar.addEventListener("click", (e) => {
  e.preventDefault();

  const el = e.target;
  const id = Number(el.getAttribute("data-id"));
  atualizarUser(id);
});

loadData();

//
//
//
//
//
//
//
//
//
// btnAtualizar.addEventListener("click", function (e) {
//   e.preventDefault();

//   const id = Number(btnAtualizar.getAttribute("data-id"));
//   console.log(id);
// });
