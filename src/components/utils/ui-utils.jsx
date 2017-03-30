import React from 'react'
import classnames from 'classnames'

export const Row = ({children}) => {
  return (<div className="row">{children}</div>)
}

export const SaveButton = ({className, label, disabled }) => {
  let classes = classnames('btn btn-primary pull-right', className)

  return <div>
            <button type='submit' className={classes} disabled={disabled}>{label || 'Salvar'}</button>
            <div className="clearfix"></div>
        </div>
}