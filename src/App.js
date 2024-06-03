import React, { useState } from "react";
import "./App.css";
import {
	Attribute,
	CharacterTree,
	DescriptionPlayer,
	Header,
	HealthBar,
	Reset,
	valueBarsState,
	attrsState,
	treesState,
} from "./compoments";

const lpMax = 56;

const App = () => {
	const [healthBars, setHealthBar] = useState(valueBarsState);
	const [attrs, setAttrs] = useState(attrsState);
	const [trees, setTrees] = useState(treesState);
	const [lpPlayers, setLpPlayers] = useState(lpMax);

	const reset = (attrs, setLpPlayers, lpMax) => {
		attrs.forEach((attr) => (attr.value = 3));
		setLpPlayers(lpMax);
	};

	return (
		<div className='App'>
			<Header />
			<br></br>
			<div className='redBox'>
				<DescriptionPlayer />
				<div className='visualBox'>
					{healthBars.map((value, index) => (
						<HealthBar
							index={index}
							healthBars={healthBars}
							setHealthBar={setHealthBar}
						/>
					))}
				</div>
				<div className='visualBox'>
					<div className='puzzleFlex'>
						<div className='puzzleBox'>
							<div style={{ color: "black" }} className='shadowText'>
								Punkty nauki: {lpPlayers}
							</div>
						</div>
						<Reset handleClick={() => reset(attrs, setLpPlayers, lpMax)} />
					</div>
					{attrs.map((value, index) => (
						<Attribute
							index={index}
							attrs={attrs}
							setAttrs={setAttrs}
							lpPlayers={lpPlayers}
							setLpPlayers={setLpPlayers}
						/>
					))}
				</div>
			</div>
			<br></br>
			<div className='blueBox'>
				{trees.map((value, index) => (
					<CharacterTree index={index} trees={trees} setTrees={setTrees} />
				))}
			</div>
		</div>
	);
};

export default App;
