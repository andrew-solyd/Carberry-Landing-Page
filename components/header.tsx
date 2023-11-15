import Image from 'next/image'

export default () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2">
        <Image
          src="/logo.png" // replace with your logo path
          alt="Logo"
        
          width={500}
          height={500}
        />
      </div>
    </div>
    
  )
}
