import React from 'react';
import { Procedure } from '../../../data/datatypes/procedure';
import ProcedureCard from '../../ProcedureCard/ProcedureCard';
import './ProcedureContainer.css';

interface ProcedureContainerProps {
    procedures:Procedure[];
}

const ProcedureContainer: React.FC<ProcedureContainerProps> = ({procedures}) => {
    return (
        <div className='procedure-container'>
        {
            procedures.map((procedure) => {
                return <ProcedureCard procedure={procedure} key={procedure.procedureId} />
            })
        }
        </div>
    )
}
export default ProcedureContainer;