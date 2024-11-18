import React, {useState} from "react";

const Temperature = () => {
    const [celsius, SetCelsius] = useState(0);
    const [fahrenheit, SetFahrenheit] = useState(0);
    const [kelvin, SetKelvin] = useState(0);

const Atvalt = () => {
    SetFahrenheit((celsius * 9) / 5 + 32);
    SetKelvin(celsius + 273.15);
}


    return (
        <>
            <h1>Hőmérséklet átváltó</h1>
            <p>Adja meg a hömérséklet értékét: </p>
            <input type="number" value={celsius} onChange={(c) => SetCelsius(Number(c.target.value))} />
            <button onClick={Atvalt} >Átvált</button>
            <p>Farenheit: {fahrenheit}</p>
            <p>Kelvin: {kelvin}</p>
        </>
    );
}

export default Temperature;
