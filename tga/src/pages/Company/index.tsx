import React from 'react'
import s from './index.module.scss'
import LeftCompanyMenu from '../../components/LeftCompanyMenu/index'
import HeaderCompany from '../../components/HeaderCompany/index'
import Table from '../../components/Table/index'
import TableLineFooter from '../../components/TableLineFooter'

const Company: React.FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.leftMenu}>
				<LeftCompanyMenu />
			</div>
			<div className={s.rightMenu}>
				{/* COMPANY */}
				<HeaderCompany textHeader="Компании" needDownMenu={true} />
				<Table />
				{/* <TableLineFooter className={s.TableLineFooter} /> */}

				{/* NO COMPANY CONTENT */}
				{/* <Col width='360px' className={s.noCompany}>
              <NavLabel className={s.noCompanyTitle} text='Нет кампаний'/>
              <Label className={s.noCompanyLabel} width='360px' isMini={true} text='У вас нет ни одной кампании соответствующей заданным параметрам'/>
              <BlueButton width='180px' text='Создать'/>
            </Col> */}

				{/* FINANCY */}
				{/* <HeaderFinancy connect={true}/> */}

				{/* No Trans FINANCY */}
				{/* <Col width='360px' className={s.noTransFinancy}>
              <NavLabel className={s.noTransFinancyTitle} text='Нет операций'/>
              <Label className={s.noTransFinancyLabel} width='360px' isMini={true} text='История отобразится после того, как будет совершена хотя бы одна транзакция'/>
            </Col> */}
				{/* <TableFinancy/> */}

				{/* SITES */}
				{/* <HeaderCompany textHeader='Компании'/>
            <TableSites/> */}

				{/* Statistic */}
				{/* <HeaderCompany textHeader='Статистика'/>  */}
				{/* <StatisticPage/> */}
				{/* <Col width='360px' className={s.noCompany}>
              <NavLabel className={s.noCompanyTitle} text='Нет кампаний'/>
              <Label className={s.noCompanyLabel} width='360px' isMini={true} text='У вас нет ни одной кампании соответствующей заданным параметрам'/>
              <BlueButton width='180px' text='Создать'/>
            </Col> */}
			</div>
		</div>
	)
}

export default Company
