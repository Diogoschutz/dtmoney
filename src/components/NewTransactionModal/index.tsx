import Modal from "react-modal";
import { Container } from "../TransactionTable/styles";

interface NewTransactioModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal ({isOpen, onRequestClose}: NewTransactioModalProps) {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Titulo"
                />    

                <input
                    type="number"
                    placeholder="Preço"
                />  

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}