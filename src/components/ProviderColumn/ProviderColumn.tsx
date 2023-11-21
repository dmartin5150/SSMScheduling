import React  from "react";
import ProviderColumnHeader from "./ProviderColumnHeader/ProviderColumnHeader";
import { Provider } from "../../data/datatypes/provider";
import { Block } from "../../data/datatypes/block";
import ProcedureContainer from "./ProcedureContainer/ProcedureContainer";

import './ProviderColumn.css';

interface ProviderColumnProps {
    provider:Provider
    block:Block
}



const ProviderColumn: React.FC<ProviderColumnProps> = ({provider,block}) => {
    return (
        <div className='provider-column'>
            <ProviderColumnHeader provider={provider} block={block} />
            <ProcedureContainer />
        </div>
    )
}
export default ProviderColumn;