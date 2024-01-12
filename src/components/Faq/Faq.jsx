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
		<div className='faq__main__contain'>
			<FaqIllustration />
			<div className='faq__contain'>
				<h1 className='section__title faq_title'>
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
		question: 'Is there any registration fee?',
		answer: 'This hackathon is completely free of cost, and open to all!',
	},
	{
		question: 'Do I need a team to participate?',
		answer: 'The more the merrier! You can participate as a team of 2-5 members.',
	},
	{
		question: 'Will I be provided food during the event?',
		answer: 'All checked-in participants will be served delicious meals.',
	},
	{
		question: 'Can I work on my idea before the hackathon?',
		answer: 'Nope, all coding must be done during the hackathon. Feel free to brainstorm ideas and create wireframes, though!',
	},
	{
		question: 'I\'m a beginner, can I participate?',
		answer: 'Absolutely! We\'ll have mentors to help you out. Hackathons are a great place to learn new skills.',
	},
	{
		question: 'I have more questions.',
		answer: 'Feel free to reach out to support@excelmec.org',
	},
];

export default Faq;
