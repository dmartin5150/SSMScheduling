import React from 'react';
import { Procedure } from '../../data/datatypes/procedure';
import './ProcedureCard.css';


interface ProcedureCardProps {
    procedure:Procedure;
}



const ProcedureCard: React.FC<ProcedureCardProps> = ({procedure}) => {
    return(
        <div className='procedure-card'>
            <div className='procedure-card-data'>
                {procedure.inBlock && <p className='procedure-card-inBlock'><b>BLOCK PROCEDURE</b></p>}
                <p className='procedure-card-provider'><b>{procedure.providerName}</b></p> 
                <p className='procedure-card-timeString'>{procedure.timeString}</p> 
                <p className='procedure-card-patientName'>{procedure.patientName}</p> 
                <p className='procedure-card-procedureName'>{procedure.procedureName}</p> 
                {procedure.room && <p className='procedure-card-room'>{procedure.room}</p>}
                <div className='procedure-card-FIN-block' >
                    {procedure.FIN && <p className='procedure-card-FIN'>FIN: {procedure.FIN}</p>} 
                    {procedure.FIN && <div className='procedure-card-copy-container'>
                        <img className='procedure-card-copy-image'src='copy.png' alt='copy /.' />
                    </div>}
                </div> 

            </div>
        </div>
    )
}
export default ProcedureCard;


// procedureId:number;
// providerId:number, 
// providerName: string;
// timeString:string;
// patientName:string;
// procedureName:string;
// room?:string;
// FIN?:string;
// inBlock:boolean;
// scheduleStatus:SCHEDULING_STATUS;