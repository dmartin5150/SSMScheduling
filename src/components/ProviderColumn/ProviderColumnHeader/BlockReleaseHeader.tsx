import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './BlockColumnHeader.css';


interface ProviderColumnHeaderProps  {
    provider:Provider,
    block: Block
}



const BlockReleaseHeader: React.FC<ProviderColumnHeaderProps> = ({provider, block}) => {
    return(
        <div className='provider-column-header'>
            <div className='provider-column-header-data'>
                <p className='provider-column-header-name'><b>{provider.providerName}</b></p>
                <p className='provider-column-header-time'>Block Time: {block.timeString}</p>
                <div className='provider-column-header-released'>
                    <div>
                        <div className='provider-column-header-image-container'>
                            <img src=
                        </div>
                        <b className='released-message'>Block Released</b>
                </div>
            </div>
            <div className='provider-column-header-button'>
                <AddButton />
            </div>
        </div>
    );
}
export default BlockReleaseHeader