import React from 'react'
import s from './index.module.scss'
import Row from '../Row/index'
import Col from '../Col/index'
import WhiteLabel from '../WhiteLabel'
import Label from '../Label'
import ButtonSVG from '../ButtonSVG'
import Line from '../Line'
import ToolTip from '../ToolTip/index'
import BlueButton from '../BlueButton'

interface IMenuBannersWCourse {
	width?: string
	className: string
	svg: React.ReactNode
	title: string
	NeedClicks?: boolean
	ooo?: string
	id: string
	link: string
	count: string
	categories: string
	to_end: string
	budget: string
	income: string
	mark: string
	error?: boolean
	error_link?: string
	ButtonAdd: boolean
	fav_active: boolean
	onDetails?: () => void
}

const MenuBannersWCourse: React.FC<IMenuBannersWCourse> = ({
	className,
	svg,
	title,
	count,
	id,
	link,
	categories,
	to_end,
	budget,
	income,
	mark,
	error,
	error_link,
	ButtonAdd,
	fav_active,
	onDetails,
}: IMenuBannersWCourse) => {
	return (
		<div className={s.wrapper + ' ' + className}>
			<Col width="248px">
				<Col width="248px" className={s.BlogerHeader}>
					<Row width="248px" className={s.BlogerHeaderUp}>
						{svg}
						<Col width="180px" className="">
							<WhiteLabel text={title} size="14px" />
							<Row width="180px">
								<Label className="mr-2" text={`ID ${id}`} />
								<Row width="auto" className="items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none">
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2 7.93232C2 8.67289 2.13235 9.37566 2.39706 10.0406C2.66176 10.7056 3.02647 11.2998 3.49118 11.8232C3.95588 12.3467 4.48431 12.7693 5.07647 13.0911C5.19804 13.157 5.31373 13.1842 5.42353 13.1725C5.53333 13.1609 5.62451 13.1202 5.69706 13.0504C5.76961 12.9806 5.81667 12.8973 5.83824 12.8003C5.8598 12.7034 5.84706 12.6035 5.8 12.5008C5.75294 12.398 5.66078 12.3079 5.52353 12.2303C5.02941 11.9589 4.59314 11.6061 4.21471 11.1718C3.83627 10.7376 3.5402 10.2442 3.32647 9.69166C3.11275 9.13914 3.00588 8.5527 3.00588 7.93232C3.00588 7.24603 3.13431 6.60434 3.39118 6.00723C3.64804 5.41012 4.00392 4.88474 4.45882 4.43109C4.91373 3.97744 5.44314 3.62363 6.04706 3.36967C6.65098 3.1157 7.3 2.98872 7.99412 2.98872C8.68824 2.98872 9.33824 3.1157 9.94412 3.36967C10.55 3.62363 11.0814 3.97744 11.5382 4.43109C11.9951 4.88474 12.3529 5.41012 12.6118 6.00723C12.8706 6.60434 13 7.24603 13 7.93232C13 8.1068 13.0559 8.23669 13.1676 8.322C13.2794 8.4073 13.4 8.44995 13.5294 8.44995C13.6471 8.44995 13.7549 8.40633 13.8529 8.31909C13.951 8.23185 14 8.10293 14 7.93232C14 7.12196 13.8431 6.35909 13.5294 5.64373C13.2157 4.92836 12.7824 4.29732 12.2294 3.75062C11.6765 3.20391 11.0373 2.77547 10.3118 2.46528C9.58627 2.15509 8.81373 2 7.99412 2C7.17451 2 6.40294 2.15509 5.67941 2.46528C4.95588 2.77547 4.31863 3.20391 3.76765 3.75062C3.21667 4.29732 2.78431 4.92836 2.47059 5.64373C2.15686 6.35909 2 7.12196 2 7.93232ZM4.37647 7.93232C4.37647 8.36271 4.44804 8.76595 4.59118 9.14205C4.73431 9.51815 4.92549 9.85354 5.16471 10.1482C5.40392 10.4429 5.66667 10.6814 5.95294 10.8636C6.10196 10.9605 6.2402 10.9954 6.36765 10.9683C6.4951 10.9411 6.5951 10.8772 6.66765 10.7763C6.7402 10.6755 6.77157 10.565 6.76176 10.4448C6.75196 10.3246 6.68431 10.2219 6.55882 10.1366C6.19412 9.90007 5.90098 9.58891 5.67941 9.20312C5.45784 8.81733 5.34706 8.39373 5.34706 7.93232C5.34706 7.56398 5.41471 7.2218 5.55 6.9058C5.68529 6.5898 5.87451 6.3116 6.11765 6.0712C6.36078 5.83081 6.64216 5.64276 6.96176 5.50705C7.28137 5.37134 7.62549 5.30349 7.99412 5.30349C8.36275 5.30349 8.70588 5.37134 9.02353 5.50705C9.34118 5.64276 9.61961 5.82984 9.85882 6.06829C10.098 6.30675 10.2873 6.58495 10.4265 6.90289C10.5657 7.22083 10.6412 7.56398 10.6529 7.93232C10.6608 8.06415 10.7098 8.1766 10.8 8.26965C10.8902 8.36271 11.0039 8.40924 11.1412 8.40924C11.2745 8.40924 11.3882 8.36271 11.4824 8.26965C11.5765 8.1766 11.6235 8.06415 11.6235 7.93232C11.6235 7.4399 11.5294 6.97753 11.3412 6.54521C11.1529 6.11288 10.8912 5.73194 10.5559 5.40236C10.2206 5.07279 9.83431 4.81398 9.39706 4.62593C8.9598 4.43787 8.49216 4.34385 7.99412 4.34385C7.5 4.34385 7.03431 4.43787 6.59706 4.62593C6.1598 4.81398 5.77451 5.07279 5.44118 5.40236C5.10784 5.73194 4.84706 6.11288 4.65882 6.54521C4.47059 6.97753 4.37647 7.4399 4.37647 7.93232ZM7.92353 12.3583C7.82157 12.3273 7.77255 12.2556 7.77647 12.1431L7.82941 7.50194C7.82941 7.39337 7.87353 7.32261 7.96176 7.28965C8.05 7.2567 8.13137 7.27705 8.20588 7.35072L11.4235 10.6193C11.502 10.7007 11.5206 10.7841 11.4794 10.8694C11.4382 10.9547 11.3627 10.9993 11.2529 11.0032L9.98235 11.0555L11.0412 13.475C11.0647 13.5293 11.0676 13.5835 11.05 13.6378C11.0324 13.6921 10.998 13.7309 10.9471 13.7541L10.3588 13.9868C10.3078 14.0062 10.2559 14.0042 10.2029 13.981C10.15 13.9577 10.1118 13.9189 10.0882 13.8646L9.08235 11.4103L8.18824 12.3001C8.11373 12.3699 8.02549 12.3893 7.92353 12.3583Z"
											fill="#57BD53"
										/>
									</svg>
									<span className="text-sm text-[#57BD53]">{count}</span>
								</Row>
							</Row>
						</Col>
					</Row>
					<a href="#!" className={s.blueLink}>
						{link}
					</a>
				</Col>

				<Line width="280px" className={s.Line} />

				<Col width="248px" className={s.ContainerMainBlock}>
					<Row width="248px" className={s.TitleTooltip}>
						<Label text="Категории" className={s.LabelMainBlock} />
						<ToolTip text="Категории" top="15px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
									fill="#808080"
								/>
							</svg>
						</ToolTip>
					</Row>
					<Row width="248px">
						<span className={s.Span}>
							{categories}{' '}
							<a href="#!" className={s.blueLink}>
								ещё
							</a>
						</span>
					</Row>
				</Col>

				<Col width="248px" className={s.ContainerMainBlock}>
					<Row width="248px" className={s.TitleTooltip}>
						<Label text="До завершения" className={s.LabelMainBlock} />
						<ToolTip text="Info" top="15px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
									fill="#808080"
								/>
							</svg>
						</ToolTip>
					</Row>
					<Row width="248px">
						<span className={s.Span}>{to_end} дней</span>
					</Row>
				</Col>

				<Col width="248px" className={s.ContainerMainBlock}>
					<Row width="248px" className={s.TitleTooltip}>
						<Label text="Бюджет на неделю" className={s.LabelMainBlock} />
						<ToolTip text="Info" top="15px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
									fill="#808080"
								/>
							</svg>
						</ToolTip>
					</Row>
					<Row width="248px">
						<span className={s.Span}>{budget}₽</span>
					</Row>
				</Col>

				<Col width="248px" className={`${s.ContainerMainBlock}`}>
					<Row width="248px" className={s.TitleTooltip}>
						<Label text="Доход с перехода" className={s.LabelMainBlock} />
						<ToolTip text="Info" top="15px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
									fill="#808080"
								/>
							</svg>
						</ToolTip>
					</Row>
					<Row width="248px">
						<span className={s.Span}>~ {income}₽</span>
					</Row>
				</Col>

				<Col
					width="248px"
					className={`${s.ContainerMainBlock} ${error ? '' : s.ErrorMargin}`}>
					<Row width="248px" className={s.TitleTooltip}>
						<Label text="Цели" className={s.LabelMainBlock} />
						<ToolTip text="Info" top="15px">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
									fill="#808080"
								/>
							</svg>
						</ToolTip>
					</Row>
					<Row width="248px">
						<span className={s.SpanMark}>{mark}</span>
					</Row>
				</Col>

				{error ? (
					<Col width="248px" className={s.ContainerMainBlock}>
						<Row width="248px" className={s.TitleTooltip}>
							<Label text="Размещение запрещено" className={s.LabelError} />
							<ToolTip text="Info" top="15px">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M10.3147 13.5294C9.59118 13.8431 8.81961 14 8 14C7.18039 14 6.40882 13.8431 5.68529 13.5294C4.96176 13.2157 4.32353 12.7824 3.77059 12.2294C3.21765 11.6765 2.78431 11.0382 2.47059 10.3147C2.15686 9.59118 2 8.81961 2 8C2 7.18039 2.15686 6.40882 2.47059 5.68529C2.78431 4.96176 3.21667 4.32353 3.76765 3.77059C4.31863 3.21765 4.95588 2.78431 5.67941 2.47059C6.40294 2.15686 7.17451 2 7.99412 2C8.81373 2 9.58627 2.15686 10.3118 2.47059C11.0373 2.78431 11.6765 3.21765 12.2294 3.77059C12.7824 4.32353 13.2157 4.96176 13.5294 5.68529C13.8431 6.40882 14 7.18039 14 8C14 8.81961 13.8431 9.59118 13.5294 10.3147C13.2157 11.0382 12.7824 11.6765 12.2294 12.2294C11.6765 12.7824 11.0382 13.2157 10.3147 13.5294ZM6.05294 12.6118C6.65686 12.8706 7.30588 13 8 13C8.69412 13 9.34412 12.8706 9.95 12.6118C10.5559 12.3529 11.0873 11.9951 11.5441 11.5382C12.001 11.0814 12.3578 10.551 12.6147 9.94706C12.8716 9.34314 13 8.69412 13 8C13 7.30588 12.8706 6.65686 12.6118 6.05294C12.3529 5.44902 11.9941 4.91765 11.5353 4.45882C11.0765 4 10.5451 3.64216 9.94118 3.38529C9.33726 3.12843 8.68824 3 7.99412 3C7.3 3 6.65098 3.12843 6.04706 3.38529C5.44314 3.64216 4.91373 4 4.45882 4.45882C4.00392 4.91765 3.64804 5.44902 3.39118 6.05294C3.13431 6.65686 3.00588 7.30588 3.00588 8C3.00588 8.69412 3.13431 9.34314 3.39118 9.94706C3.64804 10.551 4.0049 11.0814 4.46176 11.5382C4.91863 11.9951 5.44902 12.3529 6.05294 12.6118ZM6.97059 11.2294H9.36471C9.48627 11.2294 9.58823 11.1902 9.67059 11.1118C9.75294 11.0333 9.79412 10.9353 9.79412 10.8176C9.79412 10.7 9.75294 10.602 9.67059 10.5235C9.58823 10.4451 9.48627 10.4059 9.36471 10.4059H8.63529V7.41176C8.63529 7.25098 8.59608 7.12255 8.51765 7.02647C8.43922 6.93039 8.32549 6.88235 8.17647 6.88235H7.07059C6.94902 6.88235 6.84706 6.92157 6.76471 7C6.68235 7.07843 6.64118 7.17647 6.64118 7.29412C6.64118 7.41176 6.68235 7.5098 6.76471 7.58824C6.84706 7.66667 6.94902 7.70588 7.07059 7.70588H7.7V10.4059H6.97059C6.84902 10.4059 6.74706 10.4451 6.66471 10.5235C6.58235 10.602 6.54118 10.7 6.54118 10.8176C6.54118 10.9353 6.58235 11.0333 6.66471 11.1118C6.74706 11.1902 6.84902 11.2294 6.97059 11.2294ZM8.49118 5.67647C8.34412 5.82549 8.16274 5.9 7.94706 5.9C7.73529 5.9 7.5549 5.82549 7.40588 5.67647C7.25686 5.52745 7.18235 5.34706 7.18235 5.13529C7.18235 4.91961 7.25686 4.73725 7.40588 4.58824C7.5549 4.43922 7.73529 4.36471 7.94706 4.36471C8.16274 4.36471 8.34412 4.43922 8.49118 4.58824C8.63824 4.73725 8.71176 4.91961 8.71176 5.13529C8.71176 5.34706 8.63824 5.52745 8.49118 5.67647Z"
										fill="#F3553E"
									/>
								</svg>
							</ToolTip>
						</Row>
						<Row width="248px">
							<span className={s.Span}>
								{error_link} <Label text="+2" />
							</span>
						</Row>
					</Col>
				) : (
					<></>
				)}
				<Row width="248px" className={s.Buttons}>
					{ButtonAdd ? (
						<BlueButton
							className={s.ButtonAddRemove}
							text="Добавить"
							width="204px"
						/>
					) : (
						<ButtonSVG
							className={s.ButtonAddRemove}
							text="Удалить"
							width="204px"
						/>
					)}

					{fav_active ? (
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none">
								<rect width="36" height="36" rx="8" fill="#4169E1" />
								<path
									d="M12.9436 26C13.1573 26 13.3591 25.9391 13.549 25.8172C13.7389 25.6954 14.0356 25.4704 14.4392 25.1422L17.9199 22.2704C17.9733 22.2207 18.0267 22.2207 18.0801 22.2704L21.5608 25.1422C21.9644 25.4654 22.2596 25.6892 22.4466 25.8135C22.6335 25.9378 22.8368 26 23.0564 26C23.3531 26 23.5846 25.9204 23.7507 25.7613C23.9169 25.6022 24 25.3784 24 25.09V12.1408C24 11.4297 23.7893 10.8951 23.368 10.5371C22.9466 10.179 22.3175 10 21.4807 10H14.5193C13.6825 10 13.0534 10.179 12.632 10.5371C12.2107 10.8951 12 11.4297 12 12.1408V25.09C12 25.3784 12.0831 25.6022 12.2493 25.7613C12.4154 25.9204 12.6469 26 12.9436 26Z"
									fill="#F2F2F2"
								/>
							</svg>
						</button>
					) : (
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								viewBox="0 0 36 36"
								fill="none">
								<rect width="36" height="36" rx="8" fill="#333333" />
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M13.549 25.8172C13.3591 25.9391 13.1573 26 12.9436 26C12.6469 26 12.4154 25.9204 12.2493 25.7613C12.0831 25.6022 12 25.3784 12 25.09V12.1408C12 11.4297 12.2107 10.8951 12.632 10.5371C13.0534 10.179 13.6825 10 14.5193 10H21.4807C22.3175 10 22.9466 10.179 23.368 10.5371C23.7893 10.8951 24 11.4297 24 12.1408V25.09C24 25.3784 23.9169 25.6022 23.7507 25.7613C23.5846 25.9204 23.3531 26 23.0564 26C22.8368 26 22.6335 25.9378 22.4466 25.8135C22.2596 25.6892 21.9644 25.4654 21.5608 25.1422L18.0801 22.2704C18.0267 22.2207 17.9733 22.2207 17.9199 22.2704L14.4392 25.1422C14.0356 25.4704 13.7389 25.6954 13.549 25.8172ZM13.4911 24.042C13.5475 24.0544 13.6083 24.0357 13.6736 23.986L17.5282 20.8531C17.6706 20.7388 17.8279 20.6816 18 20.6816C18.1721 20.6816 18.3294 20.7388 18.4718 20.8531L22.3264 23.986C22.3917 24.0357 22.4525 24.0544 22.5089 24.042C22.5653 24.0295 22.5935 23.986 22.5935 23.9114V12.1557C22.5935 11.8325 22.4941 11.5888 22.2953 11.4247C22.0964 11.2606 21.8042 11.1786 21.4184 11.1786H14.5905C14.1988 11.1786 13.9036 11.2606 13.7047 11.4247C13.5059 11.5888 13.4065 11.8325 13.4065 12.1557V23.9114C13.4065 23.986 13.4347 24.0295 13.4911 24.042Z"
									fill="#808080"
								/>
							</svg>
						</button>
					)}
				</Row>

				<Label
					onClick={onDetails}
					className={s.LabelDetails}
					text="Подробнее"
				/>
			</Col>
		</div>
	)
}

export default MenuBannersWCourse
