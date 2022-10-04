import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <a className="px-layout mb-10 block text-white font-bold">
        {/*<Image src={logoImage} width={247} height={34} alt={'online cinema'} draggable={false} />*/}
        {/*<Image src={logoImage} width={400} height={300} alt={'online cinema'} draggable={false} />*/}
      </a>
    </Link>
  )
}

export default Logo
