import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import './ProviderColumnHeader.css';


interface ProviderColumnHeaderProps  {
    provider:Provider,
    block: Block
}



const ProviderColumnHeader: React.FC<ProviderColumnHeaderProps> = ({provider, block}) => {
    return(
        <div className='provider-column-header'>
            <h4>{provider.providerName}</h4>
            <h4>{block.timeString}</h4>
            <h4>{block.availableTime}</h4>
        </div>
    );
}
export default ProviderColumnHeader