import React, {useState, useEffect} from 'react';
import { Procedure } from '../../../data/datatypes/procedure';
import ProcedureCard from '../../ProcedureCard/ProcedureCard';
import './ProcedureContainer.css';

interface ProcedureContainerProps {
    procedure:Procedure;
}

const ProcedureContainer: React.FC<ProcedureContainerProps> = ({procedure}) => {

    const [showBlockOutline, setShowBlockOutline] = useState('')

    useEffect(()=> {
        if (procedure.inBlock) {
            setShowBlockOutline('show-outline')
        } else {
            setShowBlockOutline('')
        }
    })

    return (
        <div className={`procedure-container ${showBlockOutline} `}>
            <ProcedureCard procedure={procedure} key={procedure.procedureId} />
        </div>
    )
}
export default ProcedureContainer;