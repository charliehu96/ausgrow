import React from "react";

function LandingPage() {
	return (
		<div>
			<div style={{ height: "300px" }}></div>
			<div>
				<p className="tracking-tight">
					This text has tight letter-spacing.
				</p>
				<p className="tracking-normal">
					This text has normal letter-spacing.
				</p>
				<p className="tracking-wide">
					This text has wide letter-spacing.
				</p>
				<p className="tracking-wider">
					This text has wider letter-spacing.
				</p>
				<p className="tracking-widest">
					This text has the widest letter-spacing.
				</p>
			</div>
		</div>
	);
}

export default LandingPage;
