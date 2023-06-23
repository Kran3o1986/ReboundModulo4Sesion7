
const formulario = document.querySelector("form");
const temperatura = document.querySelector("#temperatura");
const temp = document.querySelector("#temp");
const alert = document.querySelector("#alert");

const calcularCelsius = (grados) => {
    return new Promise((resolve, reject) => {
        const conversion = parseInt((5 / 9) * (Number(grados) - 32));

        if (grados.trim()) {
            resolve(conversion);
        } else {
            reject("No has ingresado una temperatura en el convertidor");
        }
    });
};

const obtenerGrados = async (grados) => {
    try {
        const resultado = await calcularCelsius(grados);
        temp.textContent = `${resultado}°C`;
        alert.textContent = "";
    } catch (error) {
        temp.textContent = "";
        alert.textContent = error;
    }
};

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const fahr = temperatura.value;

    obtenerGrados(fahr);
});