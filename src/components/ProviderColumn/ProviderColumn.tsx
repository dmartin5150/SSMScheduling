import React  from "react";
import ProviderColumnHeader from "./ProviderColumnHeader/ProviderColumnHeader";
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
            <ProviderColumnHeader provider={provider} block={block} />
            <ProcedureContainer procedures={procedures} />
        </div>
    )
}
export default ProviderColumn;