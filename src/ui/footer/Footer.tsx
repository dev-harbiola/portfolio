const Footer = () => {
  return (
    <div className='flex items-center justify-center py-5 border-t border-gray-800'>Abiola Fasanya &copy; <DateYear /></div>
  )
}
const DateYear = () => {
  return (
    <span>
      {new Date(Date.now()).getFullYear()}
    </span>
  )
}
export default Footer