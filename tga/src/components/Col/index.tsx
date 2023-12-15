import React, {ReactNode} from 'react'
import s from './index.module.scss'

interface ICol {
	children?: ReactNode[] | ReactNode | null | undefined
	width?: string
	className?: string // Added className prop
}

/**
 * Renders a column component with optional width and custom class name.
 *
 * @param {ICol} props - The properties of the column component.
 * @param {ReactNode} props.children - The content to be rendered inside the column.
 * @param {string} props.width - The width of the column. Defaults to "auto".
 * @param {string} props.className - The custom class name to be added to the column.
 * @return {ReactElement} The rendered column component.
 */
const Col: React.FC<ICol> = ({children, width, className}: ICol) => {
	// const colClassName = `col ${className}`; // Combine className with "col" class using s[className]

	return (
		<div
			className={s.col + ' ' + className}
			style={{width: width ? width : 'auto'}}>
			{children}
		</div>
	)
}

export default Col
