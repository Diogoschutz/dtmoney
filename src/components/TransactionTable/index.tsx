import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable() {
    useEffect(()=> {
        fetch('http://localhost:3000/api/transaction')
        .then(response => response.json())
        .then(data => console.log(data))
    },[]);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>14/03/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="widthdraw">- R$1.100,00</td>
                        <td>Casa</td>
                        <td>10/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}