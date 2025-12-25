import React from "react";

export const Header: React.FC = () => {
	return (
		<header className="text-center py-12 px-4">
			<div className="inline-block mb-4">
				<span className="text-6xl">🏰</span>
			</div>
			<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-glow">
				The Hogwarts House Points System
			</h1>
			{/* <p className="font-display text-xl md:text-2xl text-primary mb-2">
				The Hogwarts House Points System
			</p> */}
			<p className="text-muted-foreground max-w-2xl mx-auto text-lg">
				Learn how React Context works by managing house points just like at
				Hogwarts. Watch how state flows from Provider to all consuming
				components!
			</p>
		</header>
	);
};
