import './Intervalo.css';
import React from 'react';
import Card from './Card';

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';

import { connect } from 'react-redux';

const Intervalo = (props) => {

    const { min, max } = props;

    return (

        <Card title="Intervalo de Números" red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return ({
        min: state.numeros.min,
        max: state.numeros.max,
    });
};

const matDispatchToProps = (dispatch) => {
    return {
        alterarMinimo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            // action creator -> action
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, matDispatchToProps)(Intervalo);