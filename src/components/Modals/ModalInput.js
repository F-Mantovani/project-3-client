import React from 'react'
import ModalInputPlato from '../../design.system/ModalInputPlato'

const ModalInput = ({label, type, placeholder, value, onChange, readOnly}) => {
  return (
    <ModalInputPlato>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        >

        </input>
    </ModalInputPlato>
  )
}

export default ModalInput