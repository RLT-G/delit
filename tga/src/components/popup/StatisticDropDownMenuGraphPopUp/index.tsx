import React from 'react'
import s from './index.module.scss'
import Row from '../../Row'
import Col from '../../Col'
import Line from '../../Line'
import WhiteLabel from '../../WhiteLabel/index'
import {Collapse, ListItemButton} from '@mui/material'
import {ExpandLess, ExpandMore} from '@mui/icons-material'

interface IStatisticDropDownMenuGraphPopUp {
	className?: string // Added className prop
}

const StatisticDropDownMenuGraphPopUp: React.FC<
	IStatisticDropDownMenuGraphPopUp
> = ({className}: IStatisticDropDownMenuGraphPopUp) => {
	const [open, setOpen] = React.useState(false)

	const handleClick = () => {
		setOpen(!open)
	}
	return (
		<div className={s.wrapper + ' ' + className}>
			<Col width="250px" className={s.ColWrapper}>
				<WhiteLabel className={s.headerWhiteLabel} text="Расходы" />
				<Line width="280px" className={s.Line} />
				<Col width="250px">
					<ListItemButton className={s.buttonList} onClick={handleClick}>
						<Row className={s.RowButton} width="250px">
							<WhiteLabel text="Доходы" />
							{open ? <ExpandLess /> : <ExpandMore />}
						</Row>
					</ListItemButton>

					<Collapse in={open} timeout="auto" unmountOnExit>
						<h1>1</h1>
					</Collapse>
				</Col>
				<Line width="280px" className={s.Line} />
			</Col>
		</div>
	)
}

export default StatisticDropDownMenuGraphPopUp
