import React, {ReactNode} from 'react'
import s from './index.module.scss'

interface ICheckBox {
	children?: ReactNode[]
	labelText?: string
	className?: string // Added className prop
	id?: string
}

const CheckBox: React.FC<ICheckBox> = ({
	labelText,
	className,
	id,
}: ICheckBox) => {
	return (
		<div className={`${s.CheckBox} ${className}`}>
			<input
				type={'checkbox'}
				id={id}
				className={`${s.checkbox} ${className}`}
			/>
			<label className={className} htmlFor={id}>
				{labelText}
			</label>
		</div>
	)
}

export default CheckBox
