import { Link } from 'react-router-dom'

function FooterInfo({ title, informations }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <ul className="flex flex-col gap-3">
        {informations.map((item) => {
          const isExternal =
            item.link.startsWith('http') ||
            item.link.startsWith('tel:') ||
            item.link === '#'

          return (
            <li key={item.text}>
              {isExternal ? (
                <a href={item.link} className="text-base text-white hover:underline">
                  {item.text}
                </a>
              ) : (
                <Link to={item.link} className="text-base text-white hover:underline">
                  {item.text}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FooterInfo
