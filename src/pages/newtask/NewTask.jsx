import prev from '../../assets/images/prev.png'
const NewTask = () => {
  return (
    <div className='container py-3'>
        <div className='py-3 d-flex align-items-center gap-4'>
       <span> <img src={prev} alt="" /></span>
        <h1>New Task</h1>
        </div>

        <div className='py-4'>
          <form className='d-flex flex-column gap-5 text-start'>
           <div>
           <label className='position-absolute translate-middle-y z-3 p-2 bg-light ms-3' htmlFor="">Task Title</label>
            <input className='w-100 rounded-1 border border-secondary px-4 py-3' type="text" placeholder='E.g Project Defense, Assignment ...' />
           </div>

           <div className='d-flex flex-column'>
            <label className='position-absolute translate-middle-y p-2 z-3 bg-light ms-3' htmlFor="">Description</label>
            <textarea className='w-100 rounded-1 border border-secondary px-4 py-3' name="" id="" cols="30" rows="10" placeholder='Briefly describe your task...' ></textarea>
           </div>

          </form>
        </div>
    </div>
  )
}

export default NewTask