import React from 'react';
import './AddButton.css'

const AddButton: React.FC = () => {
    return(
        <div className='add-button'>
            {/* <div className='add-button-container'> */}
                <p className='add-button-plus'><b>+</b></p>
            {/* </div> */}

        </div>
    )
}

export default AddButton;