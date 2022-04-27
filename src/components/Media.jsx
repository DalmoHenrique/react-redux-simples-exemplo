import './Media.css';
import React from 'react';
import Card from './Card';

import { connect } from 'react-redux';

const Media = (props) => {
    return (

        <Card title="Média de Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(props.max + props.min) / 2}</strong>
                </span>
            </div>
        </Card>
    );
};

const mapStateToProps = (state) => {
    return ({
        min: state.numeros.min,
        max: state.numeros.max
    });
};

export default connect(mapStateToProps)(Media);