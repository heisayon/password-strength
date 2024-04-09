const test = document.getElementById("test");
const patterns = [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/];
const strengthPercentage = ["0%", "25%", "50%", "70%", "100%"];
const strength = document.getElementById("strengthscreen");
test.addEventListener("input", (event) => {
  let value = event.target.value;
  let point = 0;
  //   value = String(value);
  if (value.length >= 6) {
    patterns.forEach((element) => {
      if (element.test(value)) {
        point++;
      }
    });
  }
  strength.textContent = `Strength is ${strengthPercentage[point]}`;
});
