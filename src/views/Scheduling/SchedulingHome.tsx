import React from 'react';
import ProviderColumn from '../../components/ProviderColumn/ProviderColumn';
import { PROVIDERS } from '../../data/sampledata/Providers';
import { BLOCKS } from '../../data/sampledata/Blocks';
import { PROCEDURES } from '../../data/sampledata/Procedures';
import './SchedulingHome.css';

const SchedulingHome: React.FC = () => {

    const provider1 = PROCEDURES.filter((procedure)=> procedure.providerId === 1);
    const provider2 = PROCEDURES.filter((procedure)=> procedure.providerId === 2);
    const provider3 = PROCEDURES.filter((procedure)=> procedure.providerId === 3);
    const provider4 = PROCEDURES.filter((procedure)=> procedure.providerId === 4);

    return(
        <div className='schedule-home'>
            <ProviderColumn provider={PROVIDERS[0]} block={BLOCKS[0]} procedures={provider1}/>
            <ProviderColumn provider={PROVIDERS[1]} block={BLOCKS[1]} procedures={provider2}/>
            <ProviderColumn provider={PROVIDERS[2]} block={BLOCKS[2]} procedures={provider3}/>
            <ProviderColumn provider={PROVIDERS[3]} block={BLOCKS[3]} procedures={provider4}/>
        </div>
    )
}
export default SchedulingHome