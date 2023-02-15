import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class index extends Component {
	render() {
		return (
			<Link to='/' data-testid='logo-test'>
				<svg width='232' height='71' viewBox='0 0 232 71' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<g filter='url(#filter0_d_2_26)'>
						<path d='M4.8 44.44H6.8V26.48H4.8V19.88H21.04C25.4933 19.88 29.0267 21.1067 31.64 23.56C34.28 25.9867 35.6 29.9467 35.6 35.44C35.6 40.9333 34.28 44.9067 31.64 47.36C29.0267 49.7867 25.4933 51 21.04 51H4.8V44.44ZM20.32 44.44C21.2267 44.44 21.9067 44.2 22.36 43.72C22.8133 43.24 23.04 42.4933 23.04 41.48V29.4C23.04 27.4267 22.1333 26.44 20.32 26.44H18V44.44H20.32Z' fill='black'/>
					</g>
					<path d='M42.9053 49V43.26H44.6553V27.51H42.9053V21.77H56.2053V27.51H54.4553V43.26H56.2053V49H42.9053Z' fill='black'/>
					<path d='M85.7767 42.08H86.9767V47H75.2167V42.08H77.0167L76.5367 39.68H72.4567L71.9767 42.08H73.7767V47H63.5167V42.08H64.7167L69.7867 23.66H80.7067L85.7767 42.08ZM73.1167 36.5H75.8767L74.6467 30.53H74.3467L73.1167 36.5Z' fill='black'/>
					<path d='M108.38 45.35C106.78 45.35 105.263 45.2167 103.83 44.95C102.413 44.6667 101.321 44.35 100.555 44V39.05H106.055C106.055 39.5667 106.171 39.9417 106.405 40.175C106.638 40.4083 107.063 40.525 107.68 40.525C108.196 40.525 108.563 40.45 108.78 40.3C109.013 40.1333 109.13 39.8917 109.13 39.575C109.13 39.3083 109.021 39.0833 108.805 38.9C108.588 38.7 108.213 38.5 107.68 38.3L105.53 37.55C103.68 36.85 102.346 36.025 101.53 35.075C100.73 34.125 100.33 32.8417 100.33 31.225C100.33 29.2583 100.971 27.7667 102.255 26.75C103.555 25.7167 105.713 25.2 108.73 25.2C110.18 25.2 111.538 25.35 112.805 25.65C114.088 25.9333 115.121 26.3167 115.905 26.8V31.275H110.905C110.905 30.4417 110.388 30.025 109.355 30.025C108.855 30.025 108.496 30.0917 108.28 30.225C108.08 30.3417 107.98 30.5583 107.98 30.875C107.98 31.1583 108.096 31.3833 108.33 31.55C108.58 31.7167 108.98 31.8917 109.53 32.075L111.705 32.825C113.471 33.425 114.755 34.2083 115.555 35.175C116.371 36.125 116.78 37.375 116.78 38.925C116.78 41.0417 116.063 42.6417 114.63 43.725C113.213 44.8083 111.13 45.35 108.38 45.35Z' fill='black'/>
					<path d='M131.54 42.08H133.04V28.61H131.54V23.66H143.72C147.06 23.66 149.71 24.58 151.67 26.42C153.65 28.24 154.64 31.21 154.64 35.33C154.64 39.45 153.65 42.43 151.67 44.27C149.71 46.09 147.06 47 143.72 47H131.54V42.08ZM143.18 42.08C143.86 42.08 144.37 41.9 144.71 41.54C145.05 41.18 145.22 40.62 145.22 39.86V30.8C145.22 29.32 144.54 28.58 143.18 28.58H141.44V42.08H143.18Z' fill='black'/>
					<path d='M158.754 49V43.26H160.504V27.51H158.754V21.77H182.379V32.34H174.539V27.51H170.304V33.04H173.384V37.03H170.304V43.26H174.539V37.73H182.379V49H158.754Z' fill='black'/>
					<path d='M206.6 19.88H219.96V26.44H218.36L211.2 51H198.24L191.08 26.44H189.48V19.88H204.84V26.44H202.76L205.52 39.84H205.92L208.68 26.44H206.6V19.88Z' fill='black'/>
					<defs>
						<filter id='filter0_d_2_26' x='0.800049' y='19.88' width='38.8' height='39.12' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
							<feFlood floodOpacity='0' result='BackgroundImageFix'/>
							<feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
							<feOffset dy='4'/>
							<feGaussianBlur stdDeviation='2'/>
							<feComposite in2='hardAlpha' operator='out'/>
							<feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'/>
							<feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2_26'/>
							<feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2_26' result='shape'/>
						</filter>
					</defs>
				</svg>
			</Link>
		);
	}
}
