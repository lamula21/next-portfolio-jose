import { useEffect, useState } from 'react'
import { dynamicText } from '@/utils/text'

export default function TextEffect() {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const [delta, setDelta] = useState(100 - Math.random() * 25)
	const period = 2000

	// responsible for typing and deleting
	useEffect(() => {
		let ticker = setInterval(() => {
			tick()
		}, delta)

		return () => {
			clearInterval(ticker)
		}
	}, [text])

	const tick = () => {
		let i = loopNum % dynamicText.length
		let fullText = dynamicText[i]
		// If deleting take out one char, otherwise print one char
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			// set interval for deleting char effect
			// each time char deleted, next char deleted faster
			setDelta((prevDelta) => prevDelta / 2.5)
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true) // once finished word printed, start deleting
			setDelta(period) // reset
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false) // once finished deleting, start printing
			setLoopNum(loopNum + 1) // move to the next word rotating
			setDelta(100 - Math.random() * 25) // set interval for typing char effect
		}
	}

	return (
		<>
			<span className="font-bold text-gray-200 text-[16px] hover:underline ">
				Hi, I&apos;m Jose Valdivia!
			</span>
			<p className=" mt-[5px] text-[14px] text-gray-300 ">
				<span className="border-r-[6px] border-[#666]">and I {text}</span>
			</p>
		</>
	)
}

// border-right: 0.08em solid #666;
