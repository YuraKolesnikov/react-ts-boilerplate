import type { ReactElement } from 'react'

import './scss/main.scss'
import css from './app.module.scss'

const App = (): ReactElement => (
	<div>
		<nav className={css.nav}>Nav</nav>
		<main className={css.main}>Main</main>
		<footer className={css.footer}>Footer</footer>
	</div>
)

export default App
