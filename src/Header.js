import  React from 'react';
//JS no htme tem que ter {}
export default function Header({children}){ //{} para desestruturação das propriedades que quer obter
    return(
        <header>
            <h1>{children}</h1>
        </header>
    )
}