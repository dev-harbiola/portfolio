import { Socials } from '../../../data/socials'
import { Link } from 'react-router-dom'

const SocialInfo = () => {
  return (
    <div className="absolute sm:right-5 lg:right-0 flex flex-col items-center gap-2">
      <div className="h-24 w-1 bg-emerald-500"></div>
      <div className="flex gap-2 items-center flex-col">
        {Array.isArray(Socials) &&
          Socials.map((social) => (
            <Link key={social.name} to={social.url} about={social.name}>
              <social.icon
                name={social.name}
                className="hover:text-emerald-500"
                size={24}
              />
            </Link>
          ))}
      </div>
    </div>
  )
}

export default SocialInfo