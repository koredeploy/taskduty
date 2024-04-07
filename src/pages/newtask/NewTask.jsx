import prev from '../../assets/images/prev.png'
const NewTask = () => {
  return (
    <div className='container py-3'>
        <div className='py-3 d-flex align-items-center gap-4'>
       <span> <img src={prev} alt="" /></span>
        <h1>New Task</h1>
        </div>
    </div>
  )
}

export default NewTask