import React, { useState } from 'react';
import './Faq.css';
import faq_illustration from '../../assets/png/faq_illustration.png';

const Faq = () => {
	const [selected, setSelected] = useState(null);
	const toggle = (index) => {
		if (selected === index) {
			return setSelected(null);
		}
		setSelected(index);
	};

	return (
		<div className='faq__main__contain' id="faq">

			<h1 className='section__title faq_title mobile'>
				Frequently Asked Questions
			</h1>
			<FaqIllustration />
			<div className='faq__contain'>
				<h1 className='section__title faq__title_desktop'>
					Frequently Asked Questions
				</h1>
				<div className='faq__accordion_wrapper'>
					{faqData.map((item, index) => (
						<div
							key={index}
							data-aos='fade-up'
							className={`faq__item_wrapper aos-init aos-animate ${
								selected === index ? 'selected' : ''
							}`}
						>
							<div
								className='faq__accordion__heading'
								onClick={() => toggle(index)}
							>
								<h3>{item.question}</h3>
								{selected === index ? (
									<MinusIcon />
								) : (
									<PlusIcon />
								)}
							</div>
							<div
								className={
									selected === index
										? 'faq__accordion__content show'
										: 'faq__accordion__content'
								}
							>
								<span>{item.answer}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const FaqIllustration = () => {
	return (
		<div className='faq__illustration__contain' data-aos='zoom-in'>
			<img src={faq_illustration} alt='illustration' />
		</div>
	);
};

const PlusIcon = () => {
	return (
		<svg
			width='19'
			height='19'
			viewBox='0 0 19 19'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M9.40626 16.6061V9.3061M9.40626 9.3061V2.0061M9.40626 9.3061H16.7063M9.40626 9.3061H2.10626'
				stroke='#008B4A'
				stroke-width='3.65'
				stroke-linecap='round'
			/>
		</svg>
	);
};

const MinusIcon = () => {
	return (
		<svg
			width='19'
			height='5'
			viewBox='0 0 19 5'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M17.175 2.625H2.57501'
				stroke='#008B4A'
				stroke-width='3.65'
				stroke-linecap='round'
			/>
		</svg>
	);
};

const faqData = [
	{
		question: 'How much is the registration fee?',
		answer: 'Absolutely Zil, Nothing, Nada. The Hackathon is completely free of cost to all selected teams.',
	},
	{
		question: 'How many people should be there in a team?',
		answer: 'A team should consist between 2 and 5 members. ',
	},
	{
		question: 'What about food?',
		answer: 'What about it? We only require that you bring your laptop and items necessary for you to hack. We’ll take care of all your needs, be it food or food.',
	},
	{
		question: 'Can I work on my idea before the Hackathon?',
		answer: 'No. Feel free to brainstorm and create wireframes though.',
	},
	{
		question: "I’m a beginner, can I participate?",
		answer: "Ofcourse! We have THE most amazing mentors to help you out at all times!",
	},
	{
		question: 'I have more questions.',
		answer: 'I have no more answers. JUST KIDDING! Feel free to contact us at support@excelmec.org.',
	},
];

export default Faq;
