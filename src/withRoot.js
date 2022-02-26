import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import * as React from "react";

// A theme with custom primary and secondary color.
// It's optional.

const breakpoints = {
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1800,
	},
};
const typography = {
	// ...typography,
	// Tell Material-UI what the font-size on the html element is.
	htmlFontSize: 10, // 1 rem = 10px, 10/16 = 62.5%

	"@include respond(tab-land)": {
		// width < 1200?
		htmlFontSize: 9, //1 rem = 9px, 9/16 = 56.25%
	},

	"@include respond(tab-port)": {
		// width < 900?
		htmlFontSize: 8, //1 rem = 8px, 8/16 = 50%
	},

	"@include respond(big-desktop)": {
		htmlFontSize: 12, //1rem = 12, 12/16 = 75%
	},
	h1: {
		fontSize: "3.2rem",
		lineHeight: "4rem",
		fontWeight: 700,
	},
	h2: {
		fontWeight: "600",
		fontSize: "2.4rem",
		lineHeight: "2.9rem",
	},
	h3: {
		fontSize: "2rem",
		lineHeight: "2.4rem",
		fontWeight: 600,
		//   letterSpacing: "0.195em",
	},
	h4: {
		fontWeight: "500",
		fontSize: "1.5rem",
		lineHeight: "1.8rem",
	},
	h5: {
		fontSize: "2rem",
		lineHeight: "2.4rem",
		fontWeight: 600,
	},
	h6: {
		fontWeight: "400",
		fontSize: "1.2rem",
		lineHeight: "1.5rem",
	},
	body1: {
		fontWeight: 500,
		fontSize: "1.6rem",
		lineHeight: "1.9rem",
	},
	body2: {
		fontWeight: 500,
		fontSize: "1.2rem",
		lineHeight: "1.5rem",
	},
	subtitle1: {
		fontWeight: 400,
		fontSize: "1.6rem",
		lineHeight: "1.9rem",
	},
	subtitle2: {
		fontWeight: 600,
		fontSize: "1.2rem",
		lineHeight: "1.9rem",
	},
	fontSize: 14,
	fontFamily: "Inter,Open Sans,sans-serif",
	fontWeightLight: "normal",
	fontWeightMedium: "bold",
	fontWeightBold: "bolder",
	fontWeightRegular: "normal",
};
const components = {
	MuiCssBaseline: {
		styleOverrides: {
			body: {},
		},
	},

	MuiOutlinedInput: {
		styleOverrides: {
			input: {
				fontSize: 16,
				borderRadius: 3,

				//border: '1px solid rgba(0,0,0,0.5)'
			},
		},
	},
	MuiAppBar: {
		styleOverrides: {
			root: {
				height: "5.6rem",
				// background:'red'
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			input: {
				fontSize: 16,
				borderRadius: 3,
				fontFamily: "Inter,Open Sans,sans-serif",
				//border: '1px solid rgba(0,0,0,0.5)'
			},
			label: {
				display: "none",
			},
		},
	},

	MuiButton: {
		defaultProps: {
			disableRipple: true,
			disableElevation: true,
		},
		styleOverrides: {
			root: {
				padding: "1rem",
				fontWeight: 800,
				textTransform: "none !important",
			},
			text: {
				textTransform: "none !important",
			},
		},
	},
	MuiIconButton: {
		defaultProps: {
			disableRipple: true,
		},
		styleOverrides: {
			root: {
				padding: "1.2rem",
				borderRadius: "8px",
			},
		},
	},
	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: 8,
				boxShadow: "0px 4px 100px rgba(140, 170, 154, 0.15) !important",
			},
			elevation: {
				boxShadow: "0px 4px 100px rgba(140, 170, 154, 0.15) !important",
			},
			rounded: {
				borderRadius: "8px",
			},
		},
	},
	MuiList: {
		styleOverrides: {
			root: {
				padding: 3,
				margin: "0.9rem 0",
			},
		},
	},
	MuiListItem: {
		styleOverrides: {
			root: {
				padding: 0,
				margin: "0.3rem 0",
			},
		},
		defaultProps: {
			disableRipple: true,
			disableElevation: true,
		},
	},
	MuiCheckBox: {
		defaultProps: {
			disableRipple: true,
		},
	},

	MuiSwitch: {
		defaultProps: {
			disableRipple: true,
			disableElevation: true,
		},
		styleOverrides: {
			root: {
				color: "red",
			},
			thumb: {
				//color:'red',
				// size:'50%'
			},
			checked: {
				// color:'red',
				border: "1px solid green",
			},
			track: {
				background: "transparent",
				// border:'1px solid red'
			},
		},
	},
	MuiTooltip: {
		defaultProps: {
			arrow: true,
			placement: "left",
		},
		styleOverrides: {
			background: "white",
		},
	},
	MuiSelect: {
		styleOverrides: {
			standard: {
				border: "none",
			},
		},
	},
	MuiRadio: {
		defaultProps: {
			disableRipple: true,
		},
	},
	MuiBackdrop: {},
	MuiModal: {
		defaultProps: {
			disableAutoFocus: true,
			disableEnforceFocus: true,
		},
		styleOverrides: {
			root: {
				"& .MuiBackdrop-root": {
					background: "transparent",

					// backdropFilter: "blur(3px)",
				},
			},
		},
	},
};

const lightTheme = createTheme({
	breakpoints,
	typography,
	palette: {
		primary: {
			main: "#8CAA9A",
			dark: "#245C4E",
			contrastText: "#fff",
		},
		secondary: {
			main: "#E46B50",
			light: "rgba(228, 107, 80, 0.25)",
		},
		action: {
			disabledBackground: "#BDBDBD",
			disabled: "#fff",
		},
		error: {
			main: "#EB5757",
		},
		warning: {
			main: "#F49A29",
		},
		success: {
			main: "#219653",
			contrastText: "#fff",
		},
		info: {
			main: "#56CCF2",
			contrastText: "#fff",
		},
		draftPurple: {
			main: "#9DAEEA",
			contrastText: "#fff",
		},
	},
	components,
});

const darkTheme = createTheme({
	breakpoints,
	typography,
	palette: {
		mode: "dark",
		primary: {
			main: "#8CAA9A",
			dark: "#245C4E",
			contrastText: "#fff",
		},
		secondary: {
			main: "#E46B50",
			light: "rgba(228, 107, 80, 0.25)",
		},
		action: {
			disabledBackground: "#BDBDBD",
			disabled: "#fff",
		},
		error: {
			main: "#EB5757",
		},
		warning: {
			main: "#F49A29",
		},
		success: {
			main: "#219653",
			contrastText: "#fff",
		},
		info: {
			main: "#56CCF2",
			contrastText: "#fff",
		},
		draftPurple: {
			main: "#9DAEEA",
			contrastText: "#fff",
		},
	},
	components,
});

export function withRoot(Component) {
	function WithRoot(props) {
		const [darkMode, setDarkMode] = React.useState(false);

		return (
			//   <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				{/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />
				<Component {...props} {...(darkMode ? darkTheme : lightTheme)} />
			</ThemeProvider>
			//   </DarkModeContext.Provider>
		);
	}

	return WithRoot;
}
