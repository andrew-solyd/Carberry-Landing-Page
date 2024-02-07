
import { PiTiktokLogo } from 'react-icons/pi'
import { PiInstagramLogo } from 'react-icons/pi'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row my-10 mx-10 justify-between items-center">
        <div className="text-xs mr-10">© 2024, Cartberry (Solydaria, Inc.)</div>
				<Link href="/blog" className="mx-10">
					<div className="text-xs">Blog</div>
				</Link>
        <div className="flex space-x-2 flex-row">
          <PiTiktokLogo size={20} />
          <Link href="https://www.instagram.com/cartberry_app" className="cursor-pointer">
						<PiInstagramLogo size={20} />
					</Link>
        </div>
      </div>
    </div>
  )
}

Footer.displayName = 'Footer'

export default Footer