import Image from 'next/image'

const Header = () => {
  return (
    <div className="mx-5 flex flex-col items-start">
      <div className="w-1/4 sm:w-1/3">
        <Image
          src="/logo.png" // replace with your logo path
          alt="Logo"
        
          width={175}
          height={175}
        />
      </div>
    </div>
    
  )
}

Header.displayName = 'Header'

export default Header