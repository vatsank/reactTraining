import React from 'react';



const validate = (values) => {

    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length < 2) {
        errors.name = 'Minimum be 2 characters or more'
    }
    return errors
    


}

export default validate;