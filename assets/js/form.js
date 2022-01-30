const contactForm = document.querySelector("#contact");
const personName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const fileLabel = document.querySelector("#fileLabel");
const file = document.querySelector("#file");

const url = "http://localhost:8080/contact";
// const url = "https://hookb.in/qByERVJx13tEwPllw0LK";

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  fileLabel.classList.remove("hide");
  file.classList.remove("hide");
  file.value = "50";

  let formData = new FormData(contactForm);

  const formDataSerialized = Object.fromEntries(formData);

  console.log(formDataSerialized, "serialized");
  const jsonObject = formDataSerialized;
  console.log(jsonObject);
  file.value = "80";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonObject),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    personName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    console.log(json);
  } catch (error) {
    console.error(error);
    alert("there ia a error");
  }
  file.value = "100";
  fileLabel.classList.add("hide");
  file.classList.add("hide");
});
