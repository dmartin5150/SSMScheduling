import React  from "react";
import BlockColumnHeader from "./ProviderColumnHeader/BlockColumnHeader";
import BlockReleaseHeader from "./ProviderColumnHeader/BlockReleaseHeader";
import NoBlockHeader from "./ProviderColumnHeader/NoBlockHeader";
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
            {provider.hasBlock ? 
                !block.released ? 
                    <BlockColumnHeader provider={provider} block={block} /> :
                    <BlockReleaseHeader provider={provider} block={block} />
                :
                    <NoBlockHeader provider={provider} block={block} />
             }
            {!provider}
            {procedures.map((procedure) => {
                    return <ProcedureContainer key={procedure.procedureId} procedure={procedure} block={block} />
            })}  
        </div>
    )
}
export default ProviderColumn;