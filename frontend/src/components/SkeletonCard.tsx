const SkeletonCard = () => {
  return (
    <div className="card">
      <div className="flex flex-row items-center justify-start">
        <div className="skeleton h-48 w-1/2 mr-auto rounded-lg"></div>
        <div className="skeleton skeleton-text h-12 mr-auto ml-10"></div>
        
        <div className="flex flex-col ">
          
          <div className="skeleton skeleton-text mr-auto"></div>
        </div>
      </div>
      
      <div>
        <div className="skeleton skeleton-text h-10 w-1/10 my-5"></div>
      </div>
        
      
      <div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text"></div>
      </div>
    </div>
  )
}

export default SkeletonCard