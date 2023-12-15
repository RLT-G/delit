import React from 'react'
import s from './index.module.scss'
import NavLabel from '../NavLabel/index'
import Row from '../Row'

interface IHeaderSubTitle {
	className?: string // Added className prop
	textHeader: string
}

const HeaderSubTitle: React.FC<IHeaderSubTitle> = ({
	className,
	textHeader,
}: IHeaderSubTitle) => {
	return (
		<div className={s.wrapper + ' ' + className}>
			<Row width="auto" className={s.HeaderRow}>
				<NavLabel
					className={s.navLabel}
					style={{marginRight: '5px'}}
					text={`${textHeader}`}
				/>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.8934 16.9118C11.989 17.3039 11.0245 17.5 10 17.5C8.97549 17.5 8.01103 17.3039 7.10662 16.9118C6.20221 16.5196 5.40441 15.9779 4.71324 15.2868C4.02206 14.5956 3.48039 13.7978 3.08824 12.8934C2.69608 11.989 2.5 11.0245 2.5 10C2.5 8.97549 2.69608 8.01103 3.08824 7.10662C3.48039 6.20221 4.02083 5.40441 4.70956 4.71324C5.39828 4.02206 6.19485 3.48039 7.09926 3.08824C8.00368 2.69608 8.96814 2.5 9.99265 2.5C11.0172 2.5 11.9828 2.69608 12.8897 3.08824C13.7966 3.48039 14.5956 4.02206 15.2868 4.71324C15.9779 5.40441 16.5196 6.20221 16.9118 7.10662C17.3039 8.01103 17.5 8.97549 17.5 10C17.5 11.0245 17.3039 11.989 16.9118 12.8934C16.5196 13.7978 15.9779 14.5956 15.2868 15.2868C14.5956 15.9779 13.7978 16.5196 12.8934 16.9118ZM7.56618 15.7647C8.32108 16.0882 9.13235 16.25 10 16.25C10.8676 16.25 11.6801 16.0882 12.4375 15.7647C13.1949 15.4412 13.8591 14.9939 14.4301 14.4228C15.0012 13.8517 15.4473 13.1887 15.7684 12.4338C16.0895 11.6789 16.25 10.8676 16.25 10C16.25 9.13235 16.0882 8.32108 15.7647 7.56618C15.4412 6.81127 14.9926 6.14706 14.4191 5.57353C13.8456 5 13.1814 4.5527 12.4265 4.23162C11.6716 3.91054 10.8603 3.75 9.99265 3.75C9.125 3.75 8.31373 3.91054 7.55882 4.23162C6.80392 4.5527 6.14216 5 5.57353 5.57353C5.0049 6.14706 4.56005 6.81127 4.23897 7.56618C3.91789 8.32108 3.75735 9.13235 3.75735 10C3.75735 10.8676 3.91789 11.6789 4.23897 12.4338C4.56005 13.1887 5.00613 13.8517 5.57721 14.4228C6.14828 14.9939 6.81127 15.4412 7.56618 15.7647ZM9.85294 11.5221C10.0343 11.5221 10.1777 11.4706 10.2831 11.3676C10.3885 11.2647 10.4412 11.1422 10.4412 11V10.9522V10.9118C10.4412 10.7059 10.5025 10.5282 10.625 10.3787C10.7475 10.2292 10.9387 10.0686 11.1985 9.89706C11.5515 9.66176 11.8431 9.41667 12.0735 9.16176C12.3039 8.90686 12.4191 8.55882 12.4191 8.11765C12.4191 7.71078 12.31 7.36765 12.0919 7.08824C11.8738 6.80882 11.5882 6.59681 11.2353 6.45221C10.8824 6.3076 10.4975 6.23529 10.0809 6.23529C9.44853 6.23529 8.9326 6.36397 8.53309 6.62132C8.13358 6.87868 7.88235 7.17647 7.77941 7.51471C7.7598 7.57353 7.7451 7.63235 7.73529 7.69118C7.72549 7.75 7.72059 7.81127 7.72059 7.875C7.72059 8.04167 7.77451 8.16789 7.88235 8.25368C7.9902 8.33946 8.10539 8.38235 8.22794 8.38235C8.35049 8.38235 8.45466 8.35539 8.54044 8.30147C8.62623 8.24755 8.70098 8.17647 8.76471 8.08824L8.89706 7.91176C8.98529 7.76961 9.08578 7.64828 9.19853 7.54779C9.31127 7.4473 9.4375 7.3701 9.57721 7.31618C9.71691 7.26225 9.86765 7.23529 10.0294 7.23529C10.3676 7.23529 10.6373 7.3223 10.8382 7.49632C11.0392 7.67034 11.1397 7.89706 11.1397 8.17647C11.1397 8.42647 11.0613 8.63113 10.9044 8.79044C10.7475 8.94976 10.5074 9.14216 10.1838 9.36765C9.91912 9.54902 9.69975 9.75 9.52574 9.97059C9.35172 10.1912 9.26471 10.4828 9.26471 10.8456V10.8934V10.9412C9.26471 11.3284 9.46078 11.5221 9.85294 11.5221ZM10.3897 13.4926C10.2328 13.6397 10.0466 13.7132 9.83088 13.7132C9.6201 13.7132 9.43627 13.6385 9.27941 13.489C9.12255 13.3395 9.04412 13.1593 9.04412 12.9485C9.04412 12.7377 9.12132 12.5576 9.27573 12.4081C9.43015 12.2586 9.6152 12.1838 9.83088 12.1838C10.0466 12.1838 10.2328 12.2574 10.3897 12.4044C10.5466 12.5515 10.625 12.7328 10.625 12.9485C10.625 13.1642 10.5466 13.3456 10.3897 13.4926Z"
						fill="#808080"
					/>
				</svg>
			</Row>
		</div>
	)
}

export default HeaderSubTitle