import { GradIcon } from '@/components/icons'
import MongoCrud from '../../public/next-mongo-crud.png'
import PrismaCrud from '../../public/next-prisma-crud.png'
import SqlCrud from '../../public/next-sql-crud.png'
import Twitter from '../../public/next-twitter-supabase.png'
import Technical from '../../public/react-test-55k.png'
import Quizlet from '../../public/react-zustand-quizlet.png'

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
	{
		name: 'More',
		hash: '#more',
	},
]

export const links_navigation = [
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Blog',
		hash: '#blog',
	},
	{
		name: 'Courses',
		hash: '#courses',
	},
	{
		name: 'More',
		hash: '#more',
	},
]

export const experiencesData = [
	{
		title: 'Graduated bootcamp',
		location: 'Miami, FL',
		description:
			'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
		icon: GradIcon,
		date: '2019',
	},
	{
		title: 'Front-End Developer',
		location: 'Orlando, FL',
		description:
			'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
		icon: MongoCrud,
		date: '2019 - 2021',
	},
	{
		title: 'Full-Stack Developer',
		location: 'Houston, TX',
		description:
			"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
		icon: PrismaCrud,
		date: '2021 - present',
	},
]

export const projectsData = [
	{
		title: 'Ecommerce',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sit expedita cupiditate a, cumque vitae aspernatur debitis consectetur eaque facilis.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: SqlCrud,
	},
	{
		title: 'Twitter Clone',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sit expedita cupiditate a, cumque vitae aspernatur debitis consectetur eaque facilis.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: Twitter,
	},
	{
		title: 'Javascript Quiz',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est sit expedita cupiditate a, cumque vitae aspernatur debitis consectetur eaque facilis.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: Quizlet,
	},
]

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'Prisma',
	'MongoDB',
	'Redux',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Python',
	'Django',
	'Framer Motion',
]
