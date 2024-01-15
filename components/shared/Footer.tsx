import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 text-center sm:flex-row">
        <Link href='/'>
          <Image
          src='/assets/images/logo.svg'
          alt="logo"
          width={70}
          height={18}
          className="bg-white rounded "
          />
        </Link>
        <p>2023 HeyApp! All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer