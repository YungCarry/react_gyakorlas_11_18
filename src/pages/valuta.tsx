import React, {useState} from 'react';

const Valuta = () => {
    const [forint, SetForint] = useState(0);
    const [euro, SetEuro] = useState(0);
    const [dollar, SetDollar] = useState(0);
const Atvalt = () => {
    SetEuro(forint/400);
    SetDollar(forint/250);
}

    return (
        <>
            <h1>Valuta átváltó</h1>
            <input type="number" placeholder='Írja be az összeget forintba' onChange={(e) => SetForint(Number(e.target.value))}/>
            <button onClick={Atvalt}>Átvált</button>
            <p>Euro: {euro}</p>
            <p>Dollár: {dollar}</p>
        </>
    );
}

export default Valuta;

