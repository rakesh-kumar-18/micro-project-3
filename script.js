let myElements = document.getElementsByClassName("grid-item");

for (let i = 0; i < myElements.length; i++) {
	const element = myElements[i];
	element.addEventListener("click", calculate(element));
}

function calculate(element) {
	return () => {
		let headingElement = document.getElementById("heading");
		let val = element.innerText;
		if (val === "RESET") {
			headingElement.innerHTML = "<span>0</span>";
		} else if (val === "DEL") {
			if (headingElement.innerText.length === 1) {
				headingElement.innerHTML = "<span>0</span>";
			} else {
				headingElement.innerText = headingElement.innerText.slice(0, -1);
			}
		} else if (val === "=") {
			headingElement.innerText = eval(headingElement.innerText);
		} else if ((val >= 0 && val <= 9) || val === ".") {
			let displayVal = headingElement.innerText;
			if (displayVal === "0") {
				displayVal = val;
			} else {
				displayVal += val;
			}
			headingElement.innerText = displayVal;
		} else {
			let op = headingElement.innerText.at(-1);
			if (op === "+" || op === "-" || op === "*" || op === "/") {
				headingElement.innerText = headingElement.innerText.slice(0, -1);
			}
			headingElement.innerText += val;
		}
	};
}
