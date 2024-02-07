import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="items-center sm:items-start sm:ml-10 sm:mt-5 flex flex-col items-start">
      <Link href="/" className="cursor-pointer">
          <Image src="/logo.svg" alt="Logo" width={150} height={50} style={{width: '150px', height: '50px',}}/>
      </Link>
    </div>
    
  )
}

Header.displayName = 'Header'

export default Header