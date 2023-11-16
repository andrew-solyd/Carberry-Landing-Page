import Image from 'next/image'

const Header = () => {
  return (
    <div className="mx-5 flex flex-col items-start">
      <Image src="/logo.svg" alt="Logo" width={100} height={50} />
    </div>
    
  )
}

Header.displayName = 'Header'

export default Header