import Image from 'next/image'

const Header = () => {
  return (
    <div className="ml-10 flex flex-col items-start">
      <Image src="/logo.svg" alt="Logo" width={150} height={100} style={{width: '150px', height: '100px',}}/>
    </div>
    
  )
}

Header.displayName = 'Header'

export default Header