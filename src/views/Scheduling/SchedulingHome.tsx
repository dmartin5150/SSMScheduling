import React from 'react';
import ProviderColumn from '../../components/ProviderColumn/ProviderColumn';
import { PROVIDERS } from '../../data/sampledata/Providers';
import { BLOCKS } from '../../data/sampledata/Blocks';
import './SchedulingHome.css';

const SchedulingHome = () => {
    return(
        <div className='schedule-home'>
            <ProviderColumn provider={PROVIDERS[0]} block={BLOCKS[0]} />
        </div>
    )
}
export default SchedulingHome