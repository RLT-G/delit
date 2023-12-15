import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.scss'
import MainPage from './pages/Main'
import Header from './components/Header'
import ChooseAccount from './pages/ChooseAccount'
import Register from './pages/Register/index'
import Welcome from './pages/Welcome'
import Company from './pages/Company'
import CompanyCreate from './pages/CompanyCreate'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {IUser, IPermission} from './types'
import Settings from './pages/Settings'
import Bloggers from './pages/Bloggers'
import Finance from './pages/Finance'
import Sites from './pages/Sites'
import Statistic from './pages/Statistic'
import Test from './pages/Test'
import Media from './pages/Media'
import MyBanners from './pages/MyBanners'
import StatisticBlogger from './pages/StatisticBlogger/index'

let defaultState = {
	user: {
		id: 1,
		name: 'Test User',
		avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
		permission: {
			id: 0,
			name: 'Просмотр',
		} as IPermission,
		nick: '@testuser',
		isBlogger: false,
	},
	users: [
		{
			id: 1,
			name: 'Ольга Петрова',
			avatar: 'https://randomuser.me/api/portraits/thumb/women/16.jpg',
			token: '12345',
			permission: {
				id: 0,
				name: 'Просмотр',
			} as IPermission,
			nick: '@testuser',

			isBlogger: false,
		} as IUser,
		{
			id: 2,
			name: 'Екатерина Иванова',
			avatar: 'https://randomuser.me/api/portraits/thumb/women/13.jpg',
			token: '4343',
			permission: {
				id: 0,
				name: 'Просмотр',
			} as IPermission,
			nick: '@testuser',

			isBlogger: true,
		} as IUser,
		{
			id: 3,
			name: 'Иван Иванов',
			avatar: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
			token: '123424245',
			permission: {
				id: 0,
				name: 'Просмотр',
			} as IPermission,
			nick: '@testuser',

			isBlogger: false,
		} as IUser,
		{
			id: 4,
			name: 'Человек человеков',
			avatar: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
			token: '5645634',
			permission: {
				id: 0,
				name: 'Просмотр',
			} as IPermission,
			nick: '@testuser',

			isBlogger: false,
		} as IUser,
	] as Array<IUser>,

	//Dataset for test
	test: {
		users: Array<IUser>(),
	},
}

//Save data or get data to defaultState(Redux) from localStorage if it exists
if (localStorage.getItem('kaba_data') !== null) {
	defaultState = JSON.parse(localStorage.getItem('kaba_data')!)
} else {
	localStorage.setItem('kaba_data', JSON.stringify(defaultState))
}

// if (defaultState.test.users.length === 0) {
//   for (let i = 4; i < 100; i++) {
//     defaultState.test.users.push({
//       id: i + 1,
//       name: `Person ${i + 1}`,
//       avatar: `https://randomuser.me/api/portraits/thumb/men/${i + 1}.jpg`,
//       token: `token ${i + 1}`,
//       permission: {
//         id: 0,
//         name: "Просмотр",
//       } as IPermission,
//       isBlogger: i % 2 === 0 ? true : false
//     });
//   }
// }

const reducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case 'getUser':
			return {...state, user: state.user}
		case 'setUser':
			console.log('setUser', action.user)

			return {...state, user: action.user}
		default:
			return state
	}
}

const store = createStore(reducer)

const getStartPage = () => {
	//If users length == 0 and user == null show main page. If user == null and users length > 0 show choose account. If user != null show Company page
	if (defaultState.users.length === 0 && defaultState.user === null)
		return <MainPage />
	else if (defaultState.users.length > 0 && defaultState.user === null)
		return <ChooseAccount />
	else return <Company />
}

const router = createBrowserRouter([
	//just for test
	{
		path: '/login',
		element: <MainPage />,
	},
	{
		path: 'choose',
		element: <ChooseAccount />,
	},
	{
		path: '/',
		element: getStartPage(),
	},
	{
		path: '/register',
		element: <Register />,
	},
	{
		path: '/test',
		element: <Test />,
	},
	{
		path: '/welcome',
		element: <Welcome />,
	},
	{
		path: '/create',
		element: <CompanyCreate />,
	},
	{
		path: '/settings',
		element: <Settings />,
	},
	{
		path: '/bloggers',
		element: <Bloggers />,
	},
	{
		path: '/finance',
		element: <Finance />,
	},
	{
		path: '/sites',
		element: <Sites />,
	},
	{
		path: '/statistics',
		element: <Statistic />,
	},
	{
		path: '/media',
		element: <Media />,
	},
	{
		path: '/mybanners',
		element: <MyBanners />,
	},
	{
		path: '/statisticBlogger',
		element: <StatisticBlogger />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Header />
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
)
