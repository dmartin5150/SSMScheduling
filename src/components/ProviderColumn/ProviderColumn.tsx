import React  from "react";
import BlockColumnHeader from "./ProviderColumnHeader/BlockColumnHeader";
import ProcedureContainer from "./ProcedureContainer/ProcedureContainer";
import { Provider } from "../../data/datatypes/provider";
import { Block } from "../../data/datatypes/block";
import { Procedure } from "../../data/datatypes/procedure";
import ProcedureCard from "../ProcedureCard/ProcedureCard";


import './ProviderColumn.css';

interface ProviderColumnProps {
    provider:Provider
    block:Block;
    procedures:Procedure[];
}



const ProviderColumn: React.FC<ProviderColumnProps> = ({provider,block, procedures}) => {
    return (
        <div className='provider-column'>
            <BlockColumnHeader provider={provider} block={block} />
            {procedures.map((procedure) => {
                    return <ProcedureContainer procedure={procedure} />
            })}  
        </div>
    )
}
export default ProviderColumn;