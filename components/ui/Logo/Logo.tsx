const Logo = ({ className = 'flex w-8 h-8 items-center justify-center self-center origin-center pb-0.5', ...props }) => (
  <div className={className}
  {...props}>
    <span className="  font-semibold text-coolgreen">
      C
    </span>
    <span className=" font-semibold text-white">
      R
    </span>
  </div>
)

export default Logo

