import { Fragment, useState } from "react"
import React from "react"

interface Props {
	title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
	return (
		<Fragment>
			<header className="App-header">
				<h1>{title}</h1>
			</header>
		</Fragment>
	)
}