import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi'; // Importar os ícones FiPlus e FiX
import { Container } from './style';

export function NoteItem({ isNew, value, onClick, ...rest }) {
    return (
        <Container $isnew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />

            <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}