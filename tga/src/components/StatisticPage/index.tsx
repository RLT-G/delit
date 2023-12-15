import React, {ReactNode} from 'react'
import s from './index.module.scss'
import Row from '../Row'
import Col from '../Col'
import ButtonSVG from '../ButtonSVG/index'
import WhiteLabel from '../WhiteLabel/index'
import Label from '../Label'
import HeaderSubTitle from '../HeaderSubTitle/index'
import Line from '../Line'
import Button from '../Button'
import DatePicker from 'react-multi-date-picker'
import InputIcon from 'react-multi-date-picker/components/input_icon'
import GraphsMenuCheckBox from '../GraphsMenuCheckBox/index'
import LineGraph from '../LineGraph/index'
import moment from 'moment'
import NavLabel from '../NavLabel'
import CheckBox from '../CheckBox'
import {Bar, Bubble, Line as LineChart} from 'react-chartjs-2'

import {
	Chart as ChartJS,
	LinearScale,
	PointElement,
	Tooltip,
	Legend,
	LineElement,
	CategoryScale,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
)
ChartJS.defaults.borderColor = '#333333'

interface IStatisticPage {
	children?: ReactNode[] | ReactNode
	width?: string
	className?: string // Added className prop
	needDownMenu?: boolean
	textHeader: string
}

//Line chart

function randomArray(length: number) {
	const arr = []
	let prev = 0
	for (let i = 0; i < length; i++) {
		//generate random numbers but prev number should be +- 50
		const num = Math.floor(Math.random() * 100) + prev - 50
		prev = num
		arr.push(num)
	}
	return arr
}

// //generate array of dates from start date to end date like ["1 January", "2 January", "3 January",..., "1 December","2 December", ..., "31 December"]

function generateArrayOfDates(startDate: string, endDate: string): string[] {
	const start = moment(startDate, 'YYYY-MM-DD')
	const end = moment(endDate, 'YYYY-MM-DD')
	const dates = []

	while (start.isSameOrBefore(end)) {
		dates.push(start.format('D MMMM'))
		start.add(1, 'day')
	}

	return dates
}

// // Example usage
const startDate = '2022-01-01'
const endDate = '2022-12-31'
const arrayOfDates = generateArrayOfDates(startDate, endDate)
console.log(arrayOfDates)

const data = {
	labels: generateArrayOfDates('2022-01-01', '2022-03-30'),
	datasets: [
		{
			label: 'Клики (цифрай)',
			data: randomArray(120),
			borderWidth: 1,
			backgroundColor: '#4169E1',
			borderColor: '#4169E1',
			pointRadius: 0,
		},
		{
			label: 'Конверсия: Все цели (%))',
			data: randomArray(120),
			borderWidth: 1,
			backgroundColor: '#F3A63B',
			borderColor: '#F3A63B',
			pointRadius: 0,
		},
		{
			label: 'Расходы (Рубли знак валюты)',
			data: randomArray(120),
			borderWidth: 1,
			backgroundColor: '#6049B4',
			borderColor: '#6049B4',
			pointRadius: 0,
		},
		{
			label: 'Доля рекламных расходов(%)',
			data: randomArray(120),
			borderWidth: 1,
			backgroundColor: '#57BD53',
			borderColor: '#57BD53',
			pointRadius: 0,
		},
		{
			label: 'Доходы: Все цели (Рубли знак валюты)',
			data: randomArray(120),
			borderWidth: 1,
			backgroundColor: '#F3553E',
			borderColor: '#F3553E',
			pointRadius: 0,
		},
	],
}

//End line chart

//Bubble chart
const dataBubble = {
	//Generate random data for bubble chart from chart.js 2 react
	datasets: [
		{
			label: 'Red dataset',
			data: Array.from({length: 50}, () => ({
				x: Math.abs(Math.random() * 100 - 50),
				y: Math.abs(Math.random() * 100 - 50),
				r: Math.abs(Math.random() * 30 - 5),
			})),
			borderColor: '#57BD53',
			backgroundColor: '#57BD53',
		},
		{
			label: 'Blue dataset',
			data: Array.from({length: 50}, () => ({
				x: Math.abs(Math.random() * 100 - 50),
				y: Math.abs(Math.random() * 100 - 50),
				r: Math.abs(Math.random() * 30 - 5),
			})),
			borderColor: '#4169E1',
			backgroundColor: '#4169E1',
		},
	],
}

const optionsBubble = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
			text: 'Chart.js Bubble Chart',
		},
	},
	scales: {
		x: {
			gridLines: {
				borderDash: [8, 10],
				dashOffset: 2,
				color: '#333',
			},
			border: {dash: [4, 4]},
			grid: {
				BorderDash: [33, 40],
				BorderDashOffset: 2,
				tickLength: 10,
			},
			ticks: {
				callback: function (val, index) {
					// Hide every 10nd tick label
					return index % 10 === 0 ? this.getLabelForValue(val) : ''
				},
				align: 'center',
				maxRotation: 0,
			},
		},
		y: {
			gridLines: {
				borderDash: [10, 10],
				color: '#333',
			},
			//don't display the y values, but dispaly the grid
			ticks: {
				display: false,
			},
		},
	},
}

//End Bubble chart

//Bar chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
export const dataBar = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => Math.abs(Math.random() * 1000 - 500)),
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => Math.abs(Math.random() * 1000 - 500)),
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
}
//End Bar chart

//Area chart
const getLabels = async () => {
	const arr = []
	for (let i = 0; i < 12; i++) {
		arr.push(String(i))
	}
	return arr
}

let labels2: string[] = await getLabels()
export const dataArea = {
	labels,
	datasets: [
		{
			fill: true,
			label: 'Поиск',
			data: labels.map(() => Math.abs(Math.random() * 20 - 5)),
			borderWidth: 1,
			backgroundColor: '#6049B4',
			borderColor: '#6049B4',
			pointRadius: 0,
		},
		{
			fill: true,
			label: 'РСЯ',
			data: labels.map(() => Math.abs(Math.random() * 20 - 5)),
			borderWidth: 1,
			backgroundColor: '#7BBFDE',
			borderColor: '#7BBFDE',
			pointRadius: 0,
		},
	],
}
//End Area chart

const StatisticPage: React.FC<IStatisticPage> = ({
	className,
}: IStatisticPage) => {
	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	const months = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	]

	return (
		<div className={s.wrapper + ' ' + className}>
			<Col width="1164px" className={s.ColStatistic}>
				<HeaderSubTitle textHeader="Компании" />
				<div className={s.AddCompanyWrapper}>
					<ButtonSVG
						width="220px"
						className={s.AddCompanyBtn}
						text="Добавить компанию">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none">
							<path
								d="M12 6V18"
								stroke="white"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M6 12H18"
								stroke="white"
								strokeWidth="1.4"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</ButtonSVG>
					<Col width="220px" className={s.AddCompanySpan}>
						<Row className={s.AddCompanySpanTitle} width="200px">
							<WhiteLabel text="курсы английского яз…" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none">
								<rect width="24" height="24" rx="7" fill="#262626" />
								<path
									d="M7.16474 16.8352C7.2404 16.9067 7.32656 16.955 7.42323 16.9803C7.51991 17.0055 7.61658 17.0055 7.71325 16.9803C7.80992 16.955 7.89398 16.9067 7.96543 16.8352L12.0004 12.7983L16.0354 16.8352C16.1068 16.9067 16.1909 16.955 16.2876 16.9803C16.3842 17.0055 16.482 17.0065 16.5807 16.9834C16.6795 16.9603 16.7646 16.9109 16.8361 16.8352C16.9075 16.7637 16.9548 16.6796 16.9779 16.5829C17.0011 16.4862 17.0011 16.3894 16.9779 16.2927C16.9548 16.196 16.9075 16.1119 16.8361 16.0404L12.8011 11.9972L16.8361 7.96034C16.9075 7.88885 16.9559 7.80475 16.9811 7.70803C17.0063 7.61131 17.0063 7.5146 16.9811 7.41788C16.9559 7.32116 16.9075 7.23706 16.8361 7.16558C16.7604 7.08988 16.6743 7.04047 16.5776 7.01735C16.4809 6.99422 16.3842 6.99422 16.2876 7.01735C16.1909 7.04047 16.1068 7.08988 16.0354 7.16558L12.0004 11.2025L7.96543 7.16558C7.89398 7.08988 7.80887 7.04047 7.7101 7.01735C7.61132 6.99422 7.5136 6.99422 7.41693 7.01735C7.32026 7.04047 7.2362 7.08988 7.16474 7.16558C7.09329 7.23706 7.04601 7.32116 7.02289 7.41788C6.99977 7.5146 6.99977 7.61131 7.02289 7.70803C7.04601 7.80475 7.09329 7.88885 7.16474 7.96034L11.1997 11.9972L7.16474 16.0404C7.09329 16.1119 7.04495 16.196 7.01974 16.2927C6.99452 16.3894 6.99347 16.4862 7.01658 16.5829C7.0397 16.6796 7.08909 16.7637 7.16474 16.8352Z"
									fill="#808080"
								/>
							</svg>
						</Row>
						<Label isMini={true} text="ID 9876543210" />
					</Col>
					<Col width="220px" className={s.AddCompanySpan}>
						<Row className={s.AddCompanySpanTitle} width="200px">
							<WhiteLabel text="курсы английского яз…" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none">
								<rect width="24" height="24" rx="7" fill="#262626" />
								<path
									d="M7.16474 16.8352C7.2404 16.9067 7.32656 16.955 7.42323 16.9803C7.51991 17.0055 7.61658 17.0055 7.71325 16.9803C7.80992 16.955 7.89398 16.9067 7.96543 16.8352L12.0004 12.7983L16.0354 16.8352C16.1068 16.9067 16.1909 16.955 16.2876 16.9803C16.3842 17.0055 16.482 17.0065 16.5807 16.9834C16.6795 16.9603 16.7646 16.9109 16.8361 16.8352C16.9075 16.7637 16.9548 16.6796 16.9779 16.5829C17.0011 16.4862 17.0011 16.3894 16.9779 16.2927C16.9548 16.196 16.9075 16.1119 16.8361 16.0404L12.8011 11.9972L16.8361 7.96034C16.9075 7.88885 16.9559 7.80475 16.9811 7.70803C17.0063 7.61131 17.0063 7.5146 16.9811 7.41788C16.9559 7.32116 16.9075 7.23706 16.8361 7.16558C16.7604 7.08988 16.6743 7.04047 16.5776 7.01735C16.4809 6.99422 16.3842 6.99422 16.2876 7.01735C16.1909 7.04047 16.1068 7.08988 16.0354 7.16558L12.0004 11.2025L7.96543 7.16558C7.89398 7.08988 7.80887 7.04047 7.7101 7.01735C7.61132 6.99422 7.5136 6.99422 7.41693 7.01735C7.32026 7.04047 7.2362 7.08988 7.16474 7.16558C7.09329 7.23706 7.04601 7.32116 7.02289 7.41788C6.99977 7.5146 6.99977 7.61131 7.02289 7.70803C7.04601 7.80475 7.09329 7.88885 7.16474 7.96034L11.1997 11.9972L7.16474 16.0404C7.09329 16.1119 7.04495 16.196 7.01974 16.2927C6.99452 16.3894 6.99347 16.4862 7.01658 16.5829C7.0397 16.6796 7.08909 16.7637 7.16474 16.8352Z"
									fill="#808080"
								/>
							</svg>
						</Row>
						<Label isMini={true} text="ID 9876543210" />
					</Col>
					<Col width="220px" className={s.AddCompanySpan}>
						<Row className={s.AddCompanySpanTitle} width="200px">
							<WhiteLabel text="курсы английского яз…" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none">
								<rect width="24" height="24" rx="7" fill="#262626" />
								<path
									d="M7.16474 16.8352C7.2404 16.9067 7.32656 16.955 7.42323 16.9803C7.51991 17.0055 7.61658 17.0055 7.71325 16.9803C7.80992 16.955 7.89398 16.9067 7.96543 16.8352L12.0004 12.7983L16.0354 16.8352C16.1068 16.9067 16.1909 16.955 16.2876 16.9803C16.3842 17.0055 16.482 17.0065 16.5807 16.9834C16.6795 16.9603 16.7646 16.9109 16.8361 16.8352C16.9075 16.7637 16.9548 16.6796 16.9779 16.5829C17.0011 16.4862 17.0011 16.3894 16.9779 16.2927C16.9548 16.196 16.9075 16.1119 16.8361 16.0404L12.8011 11.9972L16.8361 7.96034C16.9075 7.88885 16.9559 7.80475 16.9811 7.70803C17.0063 7.61131 17.0063 7.5146 16.9811 7.41788C16.9559 7.32116 16.9075 7.23706 16.8361 7.16558C16.7604 7.08988 16.6743 7.04047 16.5776 7.01735C16.4809 6.99422 16.3842 6.99422 16.2876 7.01735C16.1909 7.04047 16.1068 7.08988 16.0354 7.16558L12.0004 11.2025L7.96543 7.16558C7.89398 7.08988 7.80887 7.04047 7.7101 7.01735C7.61132 6.99422 7.5136 6.99422 7.41693 7.01735C7.32026 7.04047 7.2362 7.08988 7.16474 7.16558C7.09329 7.23706 7.04601 7.32116 7.02289 7.41788C6.99977 7.5146 6.99977 7.61131 7.02289 7.70803C7.04601 7.80475 7.09329 7.88885 7.16474 7.96034L11.1997 11.9972L7.16474 16.0404C7.09329 16.1119 7.04495 16.196 7.01974 16.2927C6.99452 16.3894 6.99347 16.4862 7.01658 16.5829C7.0397 16.6796 7.08909 16.7637 7.16474 16.8352Z"
									fill="#808080"
								/>
							</svg>
						</Row>
						<Label isMini={true} text="ID 9876543210" />
					</Col>

					<Col width="220px" className={s.AddCompanySpan}>
						<Row className={s.AddCompanySpanTitle} width="200px">
							<WhiteLabel text="курсы английского яз…" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none">
								<rect width="24" height="24" rx="7" fill="#262626" />
								<path
									d="M7.16474 16.8352C7.2404 16.9067 7.32656 16.955 7.42323 16.9803C7.51991 17.0055 7.61658 17.0055 7.71325 16.9803C7.80992 16.955 7.89398 16.9067 7.96543 16.8352L12.0004 12.7983L16.0354 16.8352C16.1068 16.9067 16.1909 16.955 16.2876 16.9803C16.3842 17.0055 16.482 17.0065 16.5807 16.9834C16.6795 16.9603 16.7646 16.9109 16.8361 16.8352C16.9075 16.7637 16.9548 16.6796 16.9779 16.5829C17.0011 16.4862 17.0011 16.3894 16.9779 16.2927C16.9548 16.196 16.9075 16.1119 16.8361 16.0404L12.8011 11.9972L16.8361 7.96034C16.9075 7.88885 16.9559 7.80475 16.9811 7.70803C17.0063 7.61131 17.0063 7.5146 16.9811 7.41788C16.9559 7.32116 16.9075 7.23706 16.8361 7.16558C16.7604 7.08988 16.6743 7.04047 16.5776 7.01735C16.4809 6.99422 16.3842 6.99422 16.2876 7.01735C16.1909 7.04047 16.1068 7.08988 16.0354 7.16558L12.0004 11.2025L7.96543 7.16558C7.89398 7.08988 7.80887 7.04047 7.7101 7.01735C7.61132 6.99422 7.5136 6.99422 7.41693 7.01735C7.32026 7.04047 7.2362 7.08988 7.16474 7.16558C7.09329 7.23706 7.04601 7.32116 7.02289 7.41788C6.99977 7.5146 6.99977 7.61131 7.02289 7.70803C7.04601 7.80475 7.09329 7.88885 7.16474 7.96034L11.1997 11.9972L7.16474 16.0404C7.09329 16.1119 7.04495 16.196 7.01974 16.2927C6.99452 16.3894 6.99347 16.4862 7.01658 16.5829C7.0397 16.6796 7.08909 16.7637 7.16474 16.8352Z"
									fill="#808080"
								/>
							</svg>
						</Row>
						<Label isMini={true} text="ID 9876543210" />
					</Col>
				</div>

				<Line width="1164px" className={s.Line} />

				{/* Graphs */}
				<HeaderSubTitle textHeader="Ключевые показатели" />
				<div className={s.extendedBlock}>
					<div className={s.extendedLink}>
						<Button width="84px" className={s.extendedButton} text="Часы" />
						<Button width="78px" className={s.extendedButton} text="Дни" />
						<Button width="89px" className={s.extendedButton} text="Недели" />
						<Button width="58px" className={s.extendedButton} text="Месяцы" />
					</div>
					<div className={s.DatePicker}>
						<DatePicker
							range
							weekDays={weekDays}
							months={months}
							numberOfMonths={2}
							fixMainPosition={true}
							arrow={false}
							highlightToday={false}
							// animations={[
							//     opacity({ from: 0.1, to: 1, duration: 400 })

							// ]}
							render={<InputIcon />}
						/>
					</div>
				</div>
				<GraphsMenuCheckBox />
				<LineGraph data={data} />

				<Line width="1164px" className={s.Line} />

				<HeaderSubTitle textHeader="Эффективность продвижения" />
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
				<div>
					<Bubble data={dataBubble} options={optionsBubble} />
				</div>
				<div>
					<Bar data={dataBar} options={optionsBubble} />
				</div>
				<div>
					<LineChart data={dataArea} options={optionsBubble} />
				</div>
			</Col>
		</div>
	)
}

export default StatisticPage
