import { createBrowserRouter } from "react-router-dom";
import { InvitationPage, HomePage, PopUpPage, IntroductionPage } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <InvitationPage />,
	},
	{
		path: "/home",
		element: <HomePage />,
	},
	{
		path: "/intro",
		element: <PopUpPage />,
	},
	{
		path: "/intro/main",
		element: <IntroductionPage />,
	},
]);

export default router;
