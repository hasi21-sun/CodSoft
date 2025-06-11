const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      input += value;
      display.value = input;
    }

    if (button.id === "clear") {
      input = "";
      display.value = "";
    }

    if (button.id === "equal") {
      try {
        const result = eval(input);
        display.value = result;
        input = result.toString();
      } catch {
        display.value = "Error";
        input = "";
      }
    }
  });
});
