const Member = (props: any) => {
  return(
    <div className='text-center z-10'>
      <img className='w-[270px] h-[270px] rounded-full ' alt = {props.image} src = {props.image}/>
      <p className='text-[#BE50E5] font-["Poppins"] font-[500] text-[21px] mt-[12px]'>{props.role}</p>
      <p className='text-[#fff] font-["Poppins"] font-[500] text-[28px]'>{props.name}</p>
    </div>
  )
}

export default Member