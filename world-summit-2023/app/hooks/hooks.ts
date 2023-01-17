import { useState, useEffect } from "react";

export const useDesktop = () => {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 1043);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 1043);
	};

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia);
	});

	return isDesktop;
};
