import React from 'react'
import s from './index.module.scss'
import Col from '../Col'
import Row from '../Row'
import CheckBox from '../CheckBox/index'
import NavLabel from '../NavLabel'

interface IGraphsMenuCheckBox {
	className?: string // Added className prop
	// needCheckBox?: boolean
	// textTitle?: string
	// textMain?: string
}

const GraphsMenuCheckBox: React.FC<IGraphsMenuCheckBox> = ({
	className, // needCheckBox,
	// textMain,
} // textTitle,
: IGraphsMenuCheckBox) => {
	return (
		<div className={s.wrapper + ' ' + className}>
			<Row width="1164px" className={s.MenuWrapper}>
				<Col className={s.MenuCol} width="220px">
					<Row className={s.MenuHeaderRow} width="auto">
						<CheckBox id="Blue" className={s.CheckBox} labelText="Клики" />
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M5 10L8 13L11 10"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L8 3L11 6"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Row>
					<NavLabel text="1,007,265" />
				</Col>

				<Col className={s.MenuCol} width="220px">
					<Row className={s.MenuHeaderRow} width="auto">
						<CheckBox
							id="Orange"
							className={`${s.CheckBox} ${s.Orange}`}
							labelText="Конверсия: Все цели"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M5 10L8 13L11 10"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L8 3L11 6"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Row>
					<NavLabel text="4.16%" />
				</Col>

				<Col className={s.MenuCol} width="220px">
					<Row className={s.MenuHeaderRow} width="auto">
						<CheckBox
							id="Purple"
							className={`${s.CheckBox} ${s.Purple}`}
							labelText="Расходы"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M5 10L8 13L11 10"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L8 3L11 6"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Row>
					<NavLabel text="41,941.32₽" />
				</Col>

				<Col className={s.MenuCol} width="220px">
					<Row className={s.MenuHeaderRow} width="auto">
						<CheckBox
							id="Green"
							className={`${s.CheckBox} ${s.Green}`}
							labelText="Доля рекламных ра…"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M5 10L8 13L11 10"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L8 3L11 6"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Row>
					<NavLabel text="27,89%" />
				</Col>

				<Col className={s.MenuCol} width="220px">
					<Row className={s.MenuHeaderRow} width="auto">
						<CheckBox
							id="Red"
							className={`${s.CheckBox} ${s.Red}`}
							labelText="Доходы: Все цели"
						/>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none">
							<path
								d="M5 10L8 13L11 10"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 6L8 3L11 6"
								stroke="#808080"
								strokeWidth="1.2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Row>
					<NavLabel text="121,414.39₽" />
				</Col>
			</Row>
		</div>
	)
}

export default GraphsMenuCheckBox
