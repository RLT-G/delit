import React, {ReactNode} from 'react'
import s from './index.module.scss'

interface PopUpWrapper {
	children?: ReactNode[] | ReactNode | null | undefined
}

const PopUpWrapper: React.FC<PopUpWrapper> = ({children}: PopUpWrapper) => {

	return (
        <>
            <div className={s.wrapper}>
                {children}
            </div>
            <div className={s.Background}></div>
        </>
	)
}

export default PopUpWrapper
