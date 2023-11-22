import React, {useState, useEffect} from 'react';
import { Procedure } from '../../../data/datatypes/procedure';
import { Block } from '../../../data/datatypes/block';
import ProcedureCard from '../../ProcedureCard/ProcedureCard';
import OpenTimeCard from '../../OpenTimeCard/OpenTimeCard';
import { PROCEDURE_TYPES } from '../../../data/datatypes/procedure';
import './ProcedureContainer.css';

interface ProcedureContainerProps {
    procedure:Procedure;
    block:Block;

}

const ProcedureContainer: React.FC<ProcedureContainerProps> = ({procedure,block}) => {

    const [showBlockOutline, setShowBlockOutline] = useState('')

    useEffect(()=> {
        if (procedure.inBlock) {
            if (block.released) {
                setShowBlockOutline('show-released');
            } else {
                setShowBlockOutline('show-outline');
            }
        } else {
            setShowBlockOutline('')
        }
    })

    return (
        <div className={`procedure-container ${showBlockOutline} `}>
        {
            procedure.procedureType === PROCEDURE_TYPES.PROCEDURE ? 
            <ProcedureCard procedure={procedure} key={procedure.procedureId} /> :
            <OpenTimeCard procedure={procedure} key={procedure.procedureId} /> 
        }
        </div>
    )
}
export default ProcedureContainer;