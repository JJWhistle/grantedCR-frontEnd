import Bar from './Bar';


const SecundaryHeader = ({page}) => {
  

  return (
  <>
    <div className='secundaryHeader'>
      <div className='secundaryHeader__content'>
        <Bar />
        
        <video className='secundaryHeader__video' src={page.header} loop muted autoPlay></video>
        
        <div className='secundaryHeader__flex'>
          <h1 className='secundaryHeader__heading'>{page.title}</h1>
        </div>
      </div>
    </div>
  </>
  )
}

export default SecundaryHeader