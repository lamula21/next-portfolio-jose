import { Blackhole } from "@/components/hero/Blackhole"
import Hero from "@/components/hero/Hero"

// import SignupProvider from './SignupProvider'
// import {
// 	Signup_data,
// 	Image_src_data,
// 	MobileMenu_data,
// } from '../../Redux-store/Redux-action'
// import { useSelector, useDispatch } from 'react-redux'
// import Scale_Image from './(ScaleImg)/Scale_Image'
// import { useEffect } from 'react'
// import { setStarMode, setStarColur } from '../../Redux-store/Redux-action'
// import MobileMenu from './(MobileMenu)/MobileMenu'

export function SectionHero() {
	// const dispatch = useDispatch()
	// const Signup = useSelector(Signup_data)
	// const Mobilemenu = useSelector(MobileMenu_data)
	// const ImageSrc = useSelector(Image_src_data)

	// useEffect(() => {
	// 	const havestarMode = localStorage.getItem('starMode')
	// 	const colour = localStorage.getItem('colour')
	// 	if (
	// 		havestarMode === '' ||
	// 		havestarMode === null ||
	// 		havestarMode === undefined ||
	// 		colour === '' ||
	// 		colour === undefined ||
	// 		colour === null
	// 	) {
	// 		localStorage.setItem('starMode', 'active')
	// 		localStorage.setItem('colour', '#4d7c0f')
	// 	} else {
	// 		dispatch(setStarMode(havestarMode))
	// 		dispatch(setStarColur(colour))
	// 	}
	// }, [])

	return (
		<section className="relative w-full h-screen flex flex-col items-center justify-start px-[15px]">
			{/* <Blackhole /> */}

			<Hero />
			{/* {Signup ? <SignupProvider /> : <div></div>} Sign up modal */}
			{/* {Mobilemenu ? <MobileMenu /> : <div></div>} open modal*/}
			{/* {ImageSrc.data ? <Scale_Image src_data={ImageSrc} /> : <div></div>} */}

			<div className="absolute w-full h-[1000px] left-0 right-0 top-0 overflow-visible -z-10  shadow-lg shadow-[#030014]/50 bg-[url('/bg-light.svg')] bg-cover"></div>
		</section>
	)
}
